#!/bin/bash

# Navigate to the assets directory
cd assets-user || exit

# Find all files with .png extension and store the names in an array
files=(*.png)

# Create an array to store JSON objects
json_array=()

# Populate the array with JSON objects like {"url": "assets/p1.png"}, {"url": "assets/p2.png"}, etc.
for ((i=0; i<${#files[@]}; i++)); do
    json_object="{\"url\":\"assets-user/${files[i]}\"}"
    json_array+=("$json_object")
done

# Join the array elements with commas to create a JSON-formatted string
json_string=$(IFS=,; echo "[${json_array[*]}]")

# Write the JSON string to pictures.json
echo "$json_string" > pictures.json

# Print a success message
echo "Successfully created pictures.json with the list of PNG filenames including 'assets/' path."
