async function download() {
  const zip = new JSZip();

  // Select all image elements with the class 'memory-card-img'
  const imageElements = document.querySelectorAll('.memory-game img');

  // Create an array to store unique image sources
  const uniquePictureSources = [];

  // Iterate through each image element
  for (const imageElement of imageElements) {
    const src = imageElement.getAttribute('src');

    // Check if the source is not already in the array
    if (!uniquePictureSources.includes(src)) {
      // Add the unique source to the array
      uniquePictureSources.push(src);

      // Read the image data and add it to the zip file
      const response = await fetch(src);
      const data = await response.blob();

      // Extract the filename from the source
      const fileName = src.split('/').pop();

      // Add the image to the zip file with a dynamic filename
      zip.file(fileName, data);
    }
  }

  // Generate and download the zip file
  const blob = await zip.generateAsync({ type: 'blob' });

  const zipFileName = 'pictures.zip';
  const a = document.createElement('a');
  document.body.appendChild(a);

  a.href = URL.createObjectURL(blob);
  a.download = zipFileName;

  a.click();

  document.body.removeChild(a);
}
