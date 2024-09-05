import { Component, inject, Input, NgModule } from '@angular/core';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
// import { ProjectService } from '../../services/project.service';
import { BsModalRef, BsModalService, ModalModule, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports:  [CommonModule,ModalModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent{
  @Input() project = {} as Project;

  bsModalRef?:BsModalRef;
  
constructor(private modalService: BsModalService){

}

openProjectModal(){
const modalOptions:ModalOptions={
  class:"modal-lg",
  initialState:{
    project:this.project
  }
}



  this.bsModalRef=this.modalService.show(ProjectModalComponent,modalOptions)
}
}









// // openProjectModal() {
//   //   this.project = this.projectService.GetProjectById(this.project.id);
//   //   this.isModalOpen = true;
//   // }
  
// }
