import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InfosComponent } from './infos/infos.component';
import { AgendaComponent } from './agenda/agenda.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
 
 
const routes: Routes = [
 {
   path:'',
   pathMatch:'full',
   component: HomeComponent,
 },
 {
   path:'about',
   component:AboutComponent,
 },
 {
  path:'home',
  component:HomeComponent,
},
 {
   path:'infos',
   component:InfosComponent,
   children: [
     {
       path:'',
       pathMatch:'full',
       redirectTo: 'agenda',
     },
     {
       path: 'agenda',
       component:AgendaComponent,
     },
     {
       path: 'map',
       component:MapComponent,
     },      {
       path: 'contact',
       component:ContactComponent,
     }
   ]
 }
];
 
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }