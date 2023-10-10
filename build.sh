#!/bin/bash

# Step 1: Build the project using `npm run generate`
npm run generate

# Step 2: Create and checkout the "build" branch
git checkout -b build

# Step 3: Add the contents of the "dist" folder
git add -f dist

# Step 4: Commit the changes
git commit -m "Add built files"

# Step 5: Force push to the "build" branch
git push -f origin build

# Step 6: Switch back to the original branch (e.g., "main" or "master")
git checkout main  # Change to your main branch name if needed
