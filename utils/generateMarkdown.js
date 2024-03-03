// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GPL: '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    BSD: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  };

  return licenseBadges[license] || '';
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: 'Licensed under the [MIT License](https://opensource.org/licenses/MIT)',
    Apache: 'Licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
    GPL: 'Licensed under the [GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)',
    BSD: 'Licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)',
  };

  return licenseLinks[license] || '';
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  return `${licenseBadge}\n\n${licenseLink}\n\n`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}

## Description

${data.description}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contribution)
- [Tests](#test)
- [Licenses](#license)
- [GitHub](#github)
- [Email](#email)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contribution}

## Tests
${data.test}

## Licenses
${licenseSection}

## Questions
If you have any questions or want to discuss about this project, feel free to reach out to me!

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
