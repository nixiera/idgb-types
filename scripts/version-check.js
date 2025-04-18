/**
 * This script checks that the version in package.json matches the latest version in CHANGELOG.md.
 * It's intended to be run as a pre-publish check to ensure version consistency.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read package.json
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const packageVersion = packageJson.version;

// Read CHANGELOG.md
const changelogPath = path.join(__dirname, '..', 'CHANGELOG.md');
const changelog = fs.readFileSync(changelogPath, 'utf8');

// Extract the latest version from CHANGELOG.md
// This regex looks for the latest version header in the format ## [x.y.z]
const versionRegex = /## \[(\d+\.\d+\.\d+)]/;
const match = changelog.match(versionRegex);

if (!match) {
  console.error('Error: Could not find a version in CHANGELOG.md');
  process.exit(1);
}

const changelogVersion = match[1];

// Check if the versions match
if (packageVersion !== changelogVersion && changelogVersion !== 'Unreleased') {
  console.error(`Error: Version mismatch between package.json (${packageVersion}) and CHANGELOG.md (${changelogVersion})`);
  console.error('Please update the versions to match before publishing.');
  process.exit(1);
}

// Check if there's an Unreleased section
if (changelog.includes('## [Unreleased]')) {
  console.warn('Warning: There are unreleased changes in CHANGELOG.md.');
  console.warn('Consider creating a new version before publishing.');
}

console.log('Version check passed!');
console.log(`Current version: ${packageVersion}`);