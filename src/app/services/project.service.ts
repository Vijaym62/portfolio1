import { Injectable } from '@angular/core';
// import { Project } from '../models/project';
import { Tag } from '../models/Tag';
import { Project } from '../models/project';
import { ProjectCardComponent } from '../portfolio/project-card/project-card.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
project:Project[]=[
  // {id: 0, name: "Web API Project", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Web API Project that was developed for a class project.", description: "this project.", tags: [Tag.CSharp, Tag.ASPNet]},
  {id: 0, name: "MeanStack CRUD Operations", pictures: ["./assets/img1.png","./assets/img2.png","./assets/img3.png"], projectLink: "//www.github.com", summary: "CRUD Operations provides basic Create, Read, Update, and Delete (CRUD) functionality with a responsive front-end and RESTful API for managing data.", description: "This project demonstrates a full-stack web application built using the MEAN (MongoDB, Express.js, Angular, and Node.js) stack. The application provides Create, Read, Update, and Delete (CRUD) functionality for managing records in a MongoDB database. It features a responsive front-end developed with Angular and a  back-end API created with Node.js and Express.js. The project is ideal for handling typical user records. It also includes RESTful API endpoints for seamless integration and client-server communication.", tags: [Tag.MongoDB,Tag.Express,Tag.ANGULAR,Tag.Nodejs,]},
  {id: 1, name: "Task Management System", pictures: ["./assets/img21.png","./assets/img22.png","./assets/img24.png"], projectLink: "//www.github.com", summary: "A full-stack Task Management Application featuring CRUD operations with Angular, Node.js, Express, and styled with TailwindCSS and Angular Material.", description: "This Task Management Application is a full-stack web application that allows users to add, view, edit, and delete tasks. Built with Angular for the frontend and Node.js with Express for the backend, it provides a seamless user experience for managing tasks. The tasks are stored in a JSON file or an in-memory array for simplicity. The application demonstrates responsive design with TailwindCSS and Angular Material,user-friendly interface across various devices..", tags: [Tag.ANGULAR, Tag.Typescript, Tag.Nodejs,Tag.Json]},
  {id: 2, name: "E-commerce App", pictures: ["./assets/img31.png","./assets/img32.png","./assets/img33.png","./assets/img34.png","./assets/img35.png"], projectLink: "//www.github.com", summary: "A eCommerce Website built with MEAN stack, offering product browsing, a shopping cart, and a wishlist, with a responsive Angular frontend and a Node.js/Express backend.", description: "This eCommerce platform is built using Angular for the frontend and Node.js with Express for the backend. It features a user-friendly interface that allows customers to browse products, manage their carts, and complete purchases securely. The backend handles API requests, product management, and user authentication, ensuring smooth operations. The site is styled with Tailwind CSS for a modern and responsive design. This project showcases full-stack development skills, with a focus on creating a seamless shopping experience from start to finish.", tags: [Tag.MongoDB ,Tag.ANGULAR, Tag.TailwindCss]},
  // {id: 3, name: "Chrome Extension", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Developed a chrome extension that tracks the prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.Javascript]},
  // {id: 5, name: "Mobile App", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.Java]}
];
  constructor() { }
  GetProjects(){
    return this.project;
  }
GetProjectById(id: number) : Project{
  let project =this.project.find (project=> project.id==id)
if (project == undefined){
  throw new TypeError("there is no project that matches the id:" +id);
}
return project;
}

// GetProjectsByFilter(filterTags:tag[]){
//   let filteredProjects:Project[]=[];
//   this.GetProjects.forEach(function(project){
//     let foundAll=true;
//     filterTags.forEach(function(filterTag){
//       if(project.tags.includes(filterTag)==false){
//         foundAll=false;
//       }
//     });
//     if(foundAll){
//       filteredProjects.push(project);
//     }
//   });
//   return filteredProjects;
// }
}
