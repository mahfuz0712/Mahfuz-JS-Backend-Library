import fs from 'fs';

// Path to your package.json file
const packagePath = 'package.json';

// Read and parse package.json
const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// Get the current version and split it into parts
const versionParts = packageData.version.split('.').map(Number);

// Increment the minor version (last part)
versionParts[2] += 1;

// If minor version exceeds 9, reset it and increment the middle version
if (versionParts[2] > 9) {
  versionParts[2] = 0;
  versionParts[1] += 1;
}

// Update the version in package.json
packageData.version = versionParts.join('.');

// Write the updated package.json back to the file
fs.writeFileSync(packagePath, JSON.stringify(packageData, null, 2));

console.log(`Version updated to ${packageData.version}`);
