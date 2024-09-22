

// import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MusicControllerComponent } from './music-controller/music-controller.component';

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })

export const routes: Routes = [
   { path: '', redirectTo: 'list', pathMatch: 'full' },  // Corrected: No leading '/'
  { path: 'list', component: ItemListComponent },       // Corrected: No leading '/'
  { path: 'player/:id', component: MusicDetailComponent }, // Corrected: No leading '/'
];


// export class AppRoutingModule<Routes> { }


// const routes: Routes = [];
