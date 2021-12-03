const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const { createReadStream } = require('fs');

function generateProfile(team) {
    let profile = []
    for(var i = 0; i < team.length; i++){
        const teamArray = team[i]
        switch(teamArray.getRole()){
            case 'Manager':
                const manager = new Manager(teamArray.name, teamArray.id, teamArray.email, teamArray.officeNumber);
                profile.push(generateManagerProfile(manager))
                break;
            case 'Engineer':
                const engineer = new Engineer(teamArray.name, teamArray.id, teamArray.email, teamArray.github);
                profile.push(generateEngineerProfile(engineer));
                break;
            case 'Intern':
                const intern = new Intern(teamArray.name, teamArray.id, teamArray.email, teamArray.school);
                profile.push(generateInternProfile(intern));
                break;        
        }
    }
    return profile.join(``)
}

const generateManagerProfile = (Manager) => {
    return `
    <div class="card" style="width: 18rem">
        <div class="card-header">
            <h3 class="card-title">${Manager.getName()}<h3>
            <h6 class="card-text">${Manager.getRole()}<h6>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Manager.getId()}<li>
                <li class="list-group-item">Email: ${Manager.getEmail()}<li>
                <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}<li>
            </ul>
        </div>
    </div>
    `
};

const generateEngineerProfile = (Engineer) => {
    return `
    <div class="card" style="width: 18rem">
        <div class="card-title">
            <h3 class="card-title"> ${Engineer.getName()}</h3>
            <h6 class="card-text"> ${Engineer.getRole()}</h6>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Engineer.getID()}</li>
                <li class="list-group-item">Email: ${Engineer.getEmail()}</li>
                <li class="list-group-item">GitHub: ${Engineer.getGithub()}</li>
            </ul>
        </div>
    </div>
    `
}

const generateInternProfile = (Intern) => {
    return `
    <div class="card" style="width: 18rem">
        <div class="card-title">
            <h3 class="card-title"> ${Intern.getName()}</h3>
            <h6 class="card-text"> ${Intern.getRole()}</h6>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Intern.getID()}</li>
                <li class="list-group-item">Email: ${Intern.getEmail()}</li>
                <li class="list-group-item">School: ${Intern.gerSchool()}</li>
            </ul>
        </div>
    </div>
    `
}

function generateTeam(team) {
    console.log(team)

}

module.exports = generateTeam;