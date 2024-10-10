import { Component,OnInit  } from '@angular/core';
import { MusicControllerComponent } from '../music-controller/music-controller.component';
import { HeaderComponent } from '../header/header.component';
import { ImageContainerComponent } from '../image-container/image-container.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-music-detail',
  standalone: true,
  imports: [MusicControllerComponent,HeaderComponent,MatIconModule,CommonModule,ImageContainerComponent],
  templateUrl: './music-detail.component.html',
  styleUrl: './music-detail.component.scss'
})
export class MusicDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  song={
    title:'Be love',
    artist:"Bishop"
  }
  isRepeat = false
  isShuffle = false
  isMute = false
//   musicData = {
//     title: "song test",
//     artist: "theory of dead man test",
//     coverImage: "@/../img/song1.jpg",
//     musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
// }
musicData= null as any

  itemList=[
    {
      id:1,
      title: "song test1",
      artist: "theory of dead man test",
      coverImage: "@/../img/song1.jpg",
      musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
  },
  {
    id:2,
    title: "song test2",
    artist: "theory of dead man",
    coverImage: "@/../img/song2.jpg",
    musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},
{
  id:3,
  title: "song test3",
  artist: "theory of dead",
  coverImage: "@/../img/song3.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},
{
  id:4,
  title: "song test4",
  artist: "theory of dead man test",
  coverImage: "@/../img/song4.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},

{
  id:5,
  title: "song test5",
  artist: "theory of dead man test",
  coverImage: "@/../img/song5.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},
{
  id:6,
  title: "song test6",
  artist: "theory of dead man test",
  coverImage: "@/../img/song6.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},
{
  id:7,
  title: "song test7",
  artist: "theory of dead man test",
  coverImage: "@/../img/song7.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},

{
  id:8,
  title: "song test8",
  artist: "theory of dead man test",
  coverImage: "@/../img/song8.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},
{
  id:9,
  title: "song test9",
  artist: "theory of dead man test",
  coverImage: "@/../img/song9.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},
{
  id:10,
  title: "song test10",
  artist: "theory of dead man test",
  coverImage: "@/../img/song10.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},
{
  id:11,
  title: "song test 11",
  artist: "theory of dead man test",
  coverImage: "@/../img/song1.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},
{
  id:12,
  title: "song test 12",
  artist: "theory of dead man test",
  coverImage: "@/../img/song2.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},
  ]

  ngOnInit() {
    // Get query params using snapshot
    // console.log(this.route.snapshot.params);
    
    const paramValue =  this.route.snapshot.params['id'];
    console.log(paramValue); // مقدار پارامتر دریافت شده

    this.musicData = this.itemList[Number(paramValue)]

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
