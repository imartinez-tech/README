// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}
  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;    
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License ${license}`    
  }
  return ''; 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("Data: ", data)
  return `
  # ${data.title} 
    ${renderLicenseBadge(data.license)}

  #Decription 
  ${data.description}
  
  ##Table of Contents

  * [Installation](#installation)

  *[Usage](#usage)
  ${renderLicenseLink(data.license)}

  *[Contributing](contributing)

  *[Tests](#tests)

  *[Questions](#questions)

  ##Installation 

  To install necessary dependecies, run the following command: 
  \`\`\` 
  ${data.installation}
  \`\`\`

  ##Usage 

  ${data.usage}

  ##Contributing  

  ${data.contributing}

  ##Tests 

  To run test, run the following command: 
  \`\`\`
  ${data.test}
  \`\`\`

  ##Questions 

  If there are any questions, contact me at ${data.Email}.
   You can find more of my work at [${data.Github}](https://github/${data.Github}/).


 


  build out the rest of the markdown
`;
}

module.exports = generateMarkdown;
