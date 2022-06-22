// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "APM":
      return '[![License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)';
    case "AUR license":
      return '[![License](https://img.shields.io/badge/license-Apache-blue)](https://opensource.org/licenses/Apache-2.0)';
    case "Unlicense":
      return  '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://unlicense.org)';
    default:
      console.log("License N/A");
      break;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "APM":
      return 'https://opensource.org/licenses/MIT';
    case "AUR license":
      return 'https://opensource.org/licenses/Apache-2.0';
    case "Unlicense":
      return  'https://unlicense.org';
    default:
      console.log("License N/A");
      break;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);

  return `
  ## License ${licenseBadge}

  Licensed under ${license} - ${licenseLink}
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = `
# ${data.title}

## Project Description
${data.description}

## Installation
${data.instructions}

## Usage
${usage}

## Contributor Guidelines
${contribute}

## Testing
${testing}

`;
fs.appen
}

module.exports = generateMarkdown;
