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
            
    `
}