import { Component, NgModule, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project';
// import { CarouselModule } from 'ngx-bootstrap/carousel'; 
import { CommonModule } from '@angular/common';
import { FeaturedProjectComponent } from '../featured-project/featured-project.component';
// import { CarouselModule } from 'ngx-bootstrap/carousel/carousel.module';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselModule } from 'ngx-bootstrap/carousel'

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule,FeaturedProjectComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{


  featuredProject={} as Project;
  constructor(private titleService:Title,private projectService:ProjectService){
    this.titleService.setTitle('vijay mali - Home')
  }
  ngOnInit(): void {
   this.featuredProject=this.projectService.GetProjectById(0);
  }

///////////////////

currentSlide: number = 0

onSlideChange(newSlide: number) {
  this.currentSlide = newSlide;
}








}
