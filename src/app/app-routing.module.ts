import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MusicControllerComponent } from './music-controller/music-controller.component';

setTimeout(()=>{
    console.log('router');
},4000);

const routes: Routes = [
//   { path: '', redirectTo: 'list', pathMatch: 'full' },  // Corrected: No leading '/'
  { path: 'list', component: MusicControllerComponent },       // Corrected: No leading '/'
  { path: 'player/:id', component: MusicDetailComponent }, // Corrected: No leading '/'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
