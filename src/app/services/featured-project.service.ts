// import { Injectable } from '@angular/core';


// @Injectable({
//   providedIn: 'root'
// })
// export class FeaturedProductService {

//   constructor() { }
// }
///////////////////////////////



import { Injectable } from "@angular/core";

export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeaturedProjectsService {
  // Example project data
  featuredProjects: Project[] = [
    {
      name: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Angular and Node.js.',
      imageUrl: 'assets/ecommerce.png',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      projectUrl: 'https://your-ecommerce-site.com'
    },
    // Add more featured projects here
  ];

  getFeaturedProjects(): Project[] {
    return this.featuredProjects;
  }
}



