const inqurier = require("inquirer")
const fs = require("fs")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const { messageParent } = require("jest-worker")
const { data } = require("browserslist")
const { array } = require("yargs")
var managerArray = []
var internArray = []
var engineerArray = [];
promptManager()

function promptManager ()  {
    inqurier.prompt([
        {
            type: "input",
            message: "what is your name",
            name: "name"
        },
        {
            type: "input",
            message: "what is your id",
            name: "id"
        },
        {
            type: "input",
            message: "what is your email",
            name: "email"
        },
        {
            type: "input",
            message: "what is your office number",
            name: "officeNumber"
        },
        
    ])
        .then((data) => {
            console.log("here")
        managerArray.push(new Manager (data.name, data.id, data.email, data.officeNumber))
        selectRole()
    })
}


function promptIntern ()  {
    inqurier.prompt([
        {
            type: "input",
            message: "what is your name",
            name: "name"
        },
        {
            type: "input",
            message: "what is your id",
            name: "id"
        },
        {
            type: "input",
            message: "what is your email",
            name: "email"
        },
        {
            type: "input",
            message: "what is your school",
            name: "school"
        },
        
    ])
        .then((data) => {
            console.log("here3")
        internArray.push(new Intern (data.name, data.id, data.email, data.school))
        selectRole()
        })

}


function promptEngineer() {
    inqurier.prompt([
        {
            type: "input",
            message: "what is your name",
            name: "name"
        },
        {
            type: "input",
            message: "what is your id",
            name: "id"
        },
        {
            type: "input",
            message: "what is your email",
            name: "email"
        },
        {
            type: "input",
            message: "what is your github",
            name: "github"
        },
        
    ])
    .then((data) => {
       engineerArray.push(new Intern (data.name, data.id, data.email, data.github))
       selectRole()
    })
    
}

function selectRole() {
    inqurier.prompt([
        {
            type: "list",
            choices: ["Intern", "Engineer", "Finishing building your team"],
            message: "Pick a role",
            name: "role"
        }
    ])
    .then((data) => {
        if (data.role === "Engineer") {
            promptEngineer();
        }
        if (data.role === "Intern") {
            promptIntern();
        }
        if (data.role === "Finishing building your team") {
            GenerateHTML(managerArray, engineerArray, internArray);
        }
     }) 
}

function GenerateManager(managerArray) {
   
    `<div class="card" style="width: 18rem;">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
      <h5 class="card-title">${managerArray.name}</h5>
      <p class="card-text">Manager</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${managerArray.id}</li>
      <li class="list-group-item">${managerArray.email}/li>
      <li class="list-group-item">${managerArray.officeNumber}/li>
    </ul>
    <!-- <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div> -->
  </div>`
}

function GenerateIntern(internArray) {
    for (let i = 0; i < internArray.length; i++) {
        `<div class="card" style="width: 18rem;">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
      <h5 class="card-title">${managerArray.name}</h5>
      <p class="card-text">Manager</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${managerArray.id}</li>
      <li class="list-group-item">${managerArray.email}/li>
      <li class="list-group-item">${managerArray.school}/li>
    </ul>
    <!-- <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div> -->
  </div>`
    }
}


function GenerateEngineer(engineerArray) {
    for (let i = 0; i < engineerArray.length; i++) {
        `<div class="card" style="width: 18rem;">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
      <h5 class="card-title">${engineerArray[i].name}</h5>
      <p class="card-text">Manager</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${engineerArray[i].id}</li>
      <li class="list-group-item">${engineerArray[i].email}/li>
      <li class="list-group-item">${engineerArray[i].github}/li>
    </ul>
    <!-- <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div> -->
  </div>`
    }
}

const init = () => {
    promptManager()
    // Use writeFileSync method to use promises instead of a callback function
      .then((userInput) => fs.writeFileSync('index1.html', dataForHTML(userInput)))
      .then(() => console.log('Successfully wrote to README.MD'))
      .catch((err) => console.error(err));
  };
  
  init();


