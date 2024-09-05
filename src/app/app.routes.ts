import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { FeaturedProjectComponent } from './featured-project/featured-project.component';


export const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'contact',component:ContactComponent},
{path:'portfolio',component:PortfolioComponent},
{path:'resume',component:ResumeComponent},
{path:'**',component:HomeComponent,pathMatch:'full'},
{path:'footer',component:FooterComponent},
// {path:'featured-project',component:FeaturedProjectComponent},

];
@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
  })


  export class AppRoutingModule { }