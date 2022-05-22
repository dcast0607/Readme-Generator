//Adding node modules that we will use to generate the readme. 
const fs = require('fs');
const inquirer = require('inquirer');

//Questions to ask, will be using inquirer ==> prompt to ask these questions.

/*
1) Please enter the name of your project. 
2) Please enter a short description for your project.
3) Please enter a table of contents.
4) Please enter installation instructions.
5) Please enter any usage instructions.
6) Please enter any license information.
7) Please enter any information regarding the contributors of this project.
8) Enter any test information here:
9) If you would like to enter a frequently asked questions sections, please include that here. 
10) If you have any pictures you would like to add, please add a link to their file location here:
*/

const confirmUserInput = 

inquirer.prompt(
   [
       {
           type: 'input',
           message: 'Please enter the name of your project.',
           name: 'projectTitle',
           //will call separate function to validate user input.
        //    validate: confirmUserInput
       },
       {
        type: 'input',
        message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
        - What was your motivation?
        - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
        - What problem does it solve?
        - What did you learn?
        `,
        name: 'projectDescription',
        //will call separate function to validate user input.
        // validate: confirmUserInput
        },
        {
            type: 'input',
            message: 'Please enter a table of contents: ',
            name: 'projectTableOfContents',
            //will call separate function to validate user input.
            // validate: confirmUserInput
        },
        {
            type: 'input',
            message: 'Please enter any installation instructions: ',
            name: 'projectInstallationInstructions',
            //will call separate function to validate user input.
            // validate: confirmUserInput
        },
        {
            type: 'input',
            message: 'Please enter any usage instructions: ',
            name: 'projectUsageInstructions',
            //will call separate function to validate user input.
            // validate: confirmUserInput
        },
        {
            type: 'checkbox',
            message: 'Please select any relevant licenses: (Use the space key to select an option).',
            choices: ['Javascript', 'NodeJS', 'CSS', 'HTML'],
            name: 'projectLicense',
            //will call separate function to validate user input.
            // validate: confirmUserInput
        },
        {
            type: 'input',
            message: 'If there were any contributors that helped you with this project enter them here: ',
            name: 'projectContributors',
            //will call separate function to validate user input.
            // validate: confirmUserInput
        },
        {
            type: 'input',
            message: 'Please enter any testing information here: ',
            name: 'projectTestingInformation',
            //will call separate function to validate user input.
            // validate: confirmUserInput
        },
        {
            type: 'input',
            message: 'If you would like to include an FAQ section, please include that here: ',
            name: 'projectFAQSection',
            //will call separate function to validate user input.
            // validate: confirmUserInput
        },
        {
            type: 'input',
            message: 'If you would like to include any images, please add the directory path to the images here: ',
            name: 'projectImages',
            //will call separate function to validate user input.
            // validate: confirmUserInput
        }
   ] 
).then( function(answers) {
    const convertedAnswer =  Object.entries(answers);
    const convertedProjectTitle = answers.projectTitle;
    const convertedProjectDescription = answers.projectDescription;
    const convertedProjectTableOfContents = answers.projectTableOfContents;
    const convertedProjectInstallationInstructions = answers.projectInstallationInstructions;
    const convertedProjectUsageInstructions = answers.projectUsageInstructions;
    const convertedProjectLicense = answers.projectLicense;
    const separatedProjectLicense = convertedProjectLicense.split(",")
    const convertedProjectContributors = answers.projectContributors;
    const convertedProjectTestingInformation = answers.projectTestingInformation;
    const convertedProjectFAQSection = answers.projectFAQSection;
    const convertedProjectImages = answers.projectImages;

    console.log(convertedAnswer);
    const readMeTemplate = `
## *${convertedProjectTitle}*

## Description
${convertedProjectDescription}

### Project Table of Contents
${convertedProjectTableOfContents}

### Project Installation Instructions
${convertedProjectInstallationInstructions}

### Project Usage Instructions
${convertedProjectUsageInstructions}

#### Project License Information
${separatedProjectLicense}

#### Project Contributors
${convertedProjectContributors}

#### Project Testing Information
${convertedProjectTestingInformation}

#### Project FAQ Section
${convertedProjectFAQSection}

#### Project Images
${convertedProjectImages}

`
    //FS WriteFile will be used to create a readme file.
    fs.writeFile("Sample-README.md", `${readMeTemplate}`, function(err){
    if(err) {
        return console.log(err);
    }
    else {
        console.log("The file was saved!");
    }
    });

});

