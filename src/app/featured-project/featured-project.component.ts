// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-featured-product',
//   standalone: true,
//   imports: [],
//   templateUrl: './featured-product.component.html',
//   styleUrl: './featured-product.component.scss'
// })
// export class FeaturedProductComponent {

// }



import { Component, OnInit } from '@angular/core';
import { FeaturedProjectsService, Project } from '../services/featured-project.service';
import { CommonModule } from '@angular/common';
// import { FeaturedProjectsService, Project } from './services/featured-projects.service';

@Component({
  selector: 'app-featured-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-project.component.html',
  styleUrls: ['./featured-project.component.scss']
})
export class FeaturedProjectComponent implements OnInit {
  featuredProjects?: Project[] = [];

  constructor(private featuredProjectsService: FeaturedProjectsService) {}

  ngOnInit(): void {
    this.featuredProjects = this.featuredProjectsService.getFeaturedProjects();
  }
}
