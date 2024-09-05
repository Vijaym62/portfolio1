import { Component, NgModule, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/project';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../services/project.service';
import { ProjectCardComponent } from './project-card/project-card.component';
import { BsModalService } from 'ngx-bootstrap/modal'
import { CarouselModule } from 'ngx-bootstrap/carousel'

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent,CommonModule,],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  providers: [BsModalService,]
})

// @NgModule({
//   imports: [
//     CarouselModule.forRoot(),
//     // other imports
//   ],
//   // other properties
// }),



export class PortfolioComponent implements OnInit{
  project={} as Project[];
typescript:boolean=false
  // isCollapsed: boolean = true; // Notice the capital 'C'
  
  // toggleCollapse() {
  //   this.isCollapsed = !this.isCollapsed;
  // }

  constructor(private titleService:Title,private projectService: ProjectService){
    this.titleService.setTitle('vijay mali - Portfolio')
  }
  ngOnInit(): void {
    this.project =this.projectService.GetProjects();
  }


// Filter(){
//   let filterTags:Tag[]
// if(this.typescript){
//   filterTags.push(Tag.Typescript)
// }

//   this.project=this.projectService.GetProjectsByFilter(filterTags);
// }

}

