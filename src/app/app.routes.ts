import { Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu-component/main-menu-component'; 
import { AboutComponent } from './about-component/about-component';
import { UniComponent } from './uni-component/uni-component';
import { Project } from './project/project';
import { Art } from './art/art';

export const routes: Routes = [
    {path: '', component: MainMenuComponent},
    {path: 'about', component: AboutComponent}, 
    {path: 'uni-projects', component: UniComponent}, 
    {path: 'project/:slug', component: Project},
    {path: 'art', component: Art}
];
