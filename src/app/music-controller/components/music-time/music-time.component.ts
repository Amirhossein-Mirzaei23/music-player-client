import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-music-time',
  standalone: true,
  imports: [],
  templateUrl: './music-time.component.html',
  styleUrl: './music-time.component.scss'
})
export class MusicTimeComponent {
  @Input() currentTime: string = '00:00'; // This is the prop received from the parent
  @Input() duration: string = '--:--' ; // This is the prop received from the parent
}
