import { Component, Input } from '@angular/core';
import { ImageContainerComponent } from '../image-container/image-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-music-card,ImageContainerComponent',
  standalone: true,
  imports: [ImageContainerComponent,CommonModule,RouterModule],
  templateUrl: './music-card.component.html',
  styleUrl: './music-card.component.scss'
})
export class MusicCardComponent {
  @Input() musicCardData!:any
  // @Input() childData: string = '';  

}
