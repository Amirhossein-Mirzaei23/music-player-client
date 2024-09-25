import { Component, Input } from '@angular/core';
import { ImageContainerComponent } from '../image-container/image-container.component';
@Component({
  selector: 'app-music-card,ImageContainerComponent',
  standalone: true,
  imports: [ImageContainerComponent],
  templateUrl: './music-card.component.html',
  styleUrl: './music-card.component.scss'
})
export class MusicCardComponent {
  @Input() musicCardData!:any
  // @Input() childData: string = '';  

}
