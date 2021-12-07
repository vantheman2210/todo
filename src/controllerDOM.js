import * as myModule3 from './createProject.js'; 


export let controllerProjectDOM = function () {   

  // DOM for creating new project folders 
  //let content = document.getElementById("content"); 
  let sideBar = document.getElementById("side-bar"); 
  //let projects = document.querySelectorAll("projects");
  let buttonProject = document.getElementById("showProject");   
  let addProject = document.getElementById("addProject");  
  let submitForm = document.getElementById("submitProject");

  //DOM for showing form that adds new projects
  function projectForm () { 
    addProject.style.display = "block";  
    buttonProject.style.display = "none";
  }

  buttonProject.addEventListener("click", projectForm);

  //Function that adds new 
  function projectAdd () {  
    let name = document.getElementById("projectName").value; 
    let project = new myModule3.createProject(name); 
    myModule3.myProjects.push(project); 
    addProject.style.display = "none";  
    buttonProject.style.display = "block";
    createProjectDiv(); 
    addProject.reset();  
  } 

  submitForm.addEventListener("click", projectAdd);  

  //DOM function for creating new div elemnts for new projects 

  function createProjectDiv () { 

    sideBar.innerHTML = "";

    for(let i = 0; i < myModule3.myProjects.length; i++) { 
      
      //let index = myProjects[i]; 

      let div = document.createElement("div");   
      div.id = i;  
      div.innerText = myModule3.myProjects[i].name;
      div.setAttribute("class", "projects");
      
      sideBar.appendChild(div);
    }
  }
  
} 

export let controllerTaskDOM = function () { 
  
  //DOM
  let buttonTask = document.getElementById("showTaskForm"); 
  let formTask = document.getElementById("taskForm"); 
  let submitTaskForm = document.getElementById("submitTask")
  
  //Function for showing form that adds new task, and addeventlistener
  function showForm () { 
    buttonTask.style.display = "none";  
    formTask.style.display = "block";
  }

  buttonTask.addEventListener("click", showForm); 

  //Function for adding task to an array, and initiating function that shows tasks on page
  function taskAdd () {  
    //let name = document.getElementById("projectName").value; 
    //let project = new myModule3.createProject(name); 
    //myModule3.myProjects.push(project); 
    buttonTask.style.display = "block";  
    formTask.style.display = "none";
    formTask.reset();  
  } 

  submitTaskForm.addEventListener("click", taskAdd);  

}