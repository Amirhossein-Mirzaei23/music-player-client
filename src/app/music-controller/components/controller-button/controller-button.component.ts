import { Component, Output,Input, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-music-controller-button',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './controller-button.component.html',
  styleUrl: './controller-button.component.scss'
})
export class ControllerButtonComponent {
  //  isMusicPlay = false
  
    @Output() playEvent = new EventEmitter<void>();  // Event to handle Play
    @Output() nextEvent = new EventEmitter<void>();  // Event to handle Next
    @Output() previousEvent = new EventEmitter<void>();  // Event to handle Previous
    @Output() pauseEvent = new EventEmitter<void>();  // Event to handle Previous
    @Input() isMusicPlay!: boolean; // This is the prop received from the parent

// musicSourceArrayIndex = 0
//   currentTime: number = 0;
//   duration: number = 0;
//   volume: number = 1; // Initial volume level (100%)
  nextMusic(): void {
    console.log('next music');
    // this.musicSourceArrayIndex++
    // console.log(this.musicSourceArrayIndex);
    // this.playMusic()
    this.nextEvent.emit()
  }
  previousMusic(): void {
    // console.log('previous music');
    // this.musicSourceArrayIndex--
    // console.log(this.musicSourceArrayIndex);
    // this.playMusic()
    this.previousEvent.emit();
  }
  playMusic(): void {
    this.playEvent.emit();
    // const audio = this.audioPlayerRef.nativeElement;
    // const musicSource = this.musicSourceRef.nativeElement
    // musicSource.src = this.musicSourceArray[this.musicSourceArrayIndex]
    // audio.load();
    // audio.play().then((e)=>{
    //   console.log('then');
    //   // console.log(e);
    //   this.isMusicPlay = false
    // }).catch((e)=>{
    //   console.log('catch');
    //   console.log(e);
      
      
    // })
    // console.log('playSong music');
    // console.log(audio);
  }
  pauseMusic(): void {
    // const audio = this.audioPlayerRef.nativeElement;
    // audio.pause()
    // console.log(audio);
    this.pauseEvent.emit()
    // console.log('pauseSong music');
  }

  // onTimeUpdate(event: Event) {
  //   const audio = this.audioPlayerRef.nativeElement;
  //   this.currentTime = audio.currentTime;
  // }

  // onMetadata(event: Event) {
  //   const audio = this.audioPlayerRef.nativeElement;
  //   this.duration = audio.duration;
  // }


    // Helper method to format time (seconds) into mm:ss format


    // formatTime(time: number): string {
    //   const minutes: number = Math.floor(time / 60);
    //   const seconds: number = Math.floor(time % 60);
    //   return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    // }
  

}
