const fs = require('fs');

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "APM":
      return `[<img src="https://img.shields.io/badge/license-MIT-green">](https://opensource.org/licenses/MIT)`;
    case "AUR license":
      return `[<img src="https://img.shields.io/badge/license-Apache-blue">](https://opensource.org/licenses/Apache-2.0)`;
    case "Unlicense":
      return  `[<img src="https://img.shields.io/badge/license-Unlicense-blue.svg">](http://unlicense.org/)`;
    default:
      console.log("License N/A");
      break;
  }
};

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "APM":
      return 'https://opensource.org/licenses/MIT';
    case "AUR license":
      return 'https://opensource.org/licenses/Apache-2.0';
    case "Unlicense":
      return 'https://unlicense.org';
    case "N/A":
      console.log("License N/A");
      return '';
  }
};

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);
  var licenseSection;

  if(license != "N/A") {
    licenseSection = `
## License ${licenseBadge}

Licensed under ${license} - ${licenseLink}
`;
  } else {
    licenseSection = '';
  }
  fs.appendFile("README.md", licenseSection, (error) => 
  error ? console.error(error) : console.log("License section successfully generated!"));
}

// Function to generate markdown for README
function generateMarkdown(data) {
  let markdownBody = `
# ${data.title}
This project was created by ${data.name} - click [here](mailto:${data.email}) to email the creator


## Project Description
${data.description}

## Installation
${data.instructions}

## Usage
${data.usage}

## Contributor Guidelines
${data.contribute}

## Testing
${data.testing}

`; 
  fs.appendFile("README.md", markdownBody, (error) =>
  error ? console.error(error) : console.log("Markdown body successfully generated!"));

  renderLicenseSection(data.license);
}

module.exports = generateMarkdown;
