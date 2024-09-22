
import { ControllerButtonComponent } from './components/controller-button/controller-button.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ControllerPreviewComponent } from './components/controller-preview/controller-preview.component';
import { MusicTimeComponent } from './components/music-time/music-time.component';
import { Component, ViewChild, ElementRef, viewChild, Output,EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { title } from 'process';

@Component({
  selector: 'app-music-controller',
  standalone: true,
  imports: [ControllerButtonComponent,ControllerPreviewComponent,ProgressBarComponent,MusicTimeComponent],
  templateUrl: './music-controller.component.html',
  styleUrl: './music-controller.component.scss'
})
export class MusicControllerComponent {
  isMusicPlay = false;

@ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;
@ViewChild('musicSource') musicSourceRef!: ElementRef<HTMLSourceElement>;  // Correct type for <source> element

musicSourceArray = [
  {
    title:'song1',
    artist:'theory of dead man',
    coverImage:'../../../img/song1.jpg',
    musicSrc:'https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3',
  },
  {
    title:'song2',
    artist:'theory of dead man',
    coverImage:'../../../img/song1.jpg',
    musicSrc:'https://dl2.hitseda.com/Music/ak/funk/Viliam%20Lane%20-%20Particles%20%28Slowed%29.mp3',
  },
  {
    title:'song3',
    artist:'theory of dead man',
    coverImage:'../../../img/song1.jpg',
    musicSrc:'https://dl2.hitseda.com/dl1/bm/bikalam/light/CD02.Chris.Spheeris.The.Best.Of.Chris.Spheeris.1990.2000_p30download.com/01.%20The%20Arrow.mp3',
  },
]
@Output() sendMusicDetailEvent = new EventEmitter<Object>();  // Event to handle Play

musicSourceArrayIndex = 0
  currentTime:  string = '00:00';
  duration: string = '--:--';
  currentTimeLenth:  number = 0;
  durationLenth: number = 1;
  volume: number = 1; // Initial volume level (100%)

  sendMusicInforamtion(){
console.log('send');

  this.sendMusicDetailEvent.emit(this.musicSourceArray[this.musicSourceArrayIndex])

  }
  ngOnInit(): void {
    // Called once the component is initialized
    this.sendMusicInforamtion()
    console.log('Component Initialized');
  }

  nextMusic(): void {
    const audio = this.audioPlayerRef.nativeElement;
    console.log('next music');
    if (this.musicSourceArrayIndex >= this.musicSourceArray.length-1 ) {
      console.log(this.musicSourceArrayIndex,this.musicSourceArray.length );
      
      this.musicSourceArrayIndex = 0
    }else{
      this.musicSourceArrayIndex++
    }

    console.log(this.musicSourceArrayIndex);
    audio.load();
    this.playMusic()
   
  }
  previousMusic(): void {
    const audio = this.audioPlayerRef.nativeElement;
    console.log('previous music');
    if (this.musicSourceArrayIndex <= 0 ) {
      this.musicSourceArrayIndex = this.musicSourceArray.length-1
    }else{
      this.musicSourceArrayIndex--
    }

    console.log(this.musicSourceArrayIndex);
    audio.load();
    this.playMusic()
   
  }
  playMusic(): void {
    const audio = this.audioPlayerRef.nativeElement;
    const musicSource = this.musicSourceRef.nativeElement
    musicSource.src = this.musicSourceArray[this.musicSourceArrayIndex].musicSrc
    this.sendMusicInforamtion()
    console.log('Component play');
   if (this.currentTimeLenth == 0) {
    audio.load();
   }
    audio.play().then((e)=>{
      console.log('then');
      // console.log(e);
      this.isMusicPlay = true
    }).catch((e)=>{
      console.log('catch');
      console.log(e);
      
      
    })
    console.log('playSong music');
    console.log(audio);
  }
  pauseMusic(): void {
    const audio = this.audioPlayerRef.nativeElement;
    audio.pause()
    console.log(audio);
    this.isMusicPlay = false
    console.log('pauseSong music');
  }

  onTimeUpdate() {
    const audio = this.audioPlayerRef.nativeElement;
    this.currentTime = this.formatTime(audio.currentTime);
 this.currentTimeLenth = audio.currentTime;
  }

   onMetadata(event: Event) {
  
    const audio = this.audioPlayerRef.nativeElement;
    this.duration = this.formatTime(audio.duration);
    this.durationLenth = audio.duration;


  }

    // Helper method to format time (seconds) into mm:ss format
    formatTime(time: number): string {
      const minutes: number = Math.floor(time / 60);
      const seconds: number = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    seekCurrenTime(time:any){
      //  this.playMusic()
      const audio = this.audioPlayerRef.nativeElement;
      console.log(time);
      audio.currentTime = audio.duration*(time/100)
      this.onTimeUpdate()
    }
}
