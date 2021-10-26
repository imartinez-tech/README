// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge() 
  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink()

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection()

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("Data: ", data)
  return `
  # ${data.title}
  # ${`https://img.shields.io/badge/License-MIT-brightgreen`}

  # question
  ## ${data.description}
  ## ${data.Github}
  ## ${data.Email}


  build out the rest of the markdown
`;
}

module.exports = generateMarkdown;
