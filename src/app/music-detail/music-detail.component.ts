import { Component } from '@angular/core';
import { MusicControllerComponent } from '../music-controller/music-controller.component';
import { HeaderComponent } from '../header/header.component';
import { ImageContainerComponent } from '../image-container/image-container.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-music-detail',
  standalone: true,
  imports: [MusicControllerComponent,HeaderComponent,MatIconModule,CommonModule,ImageContainerComponent],
  templateUrl: './music-detail.component.html',
  styleUrl: './music-detail.component.scss'
})
export class MusicDetailComponent {
  song={
    title:'Be love',
    artist:"Bishop"
  }
  isRepeat = false
  isShuffle = false
  isMute = false
  musicData = {
      title: "song test",
      artist: "theory of dead man test",
      coverImage: "../../../img/song1.jpg",
      musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
  }
  
  getMusicDetail(data:any){
    console.log(data);
    this.musicData.title= data.title
    this.musicData.artist= data.artist
    // this.musicData.coverImage= data.coverImage
    console.log('receid');
    
  }
  muteMusic(){
    console.log('data:',this.musicData);
    this.isMute = !this.isMute
    
  }

}
