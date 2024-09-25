import { Component } from '@angular/core';
import { MusicCardComponent } from '../music-card/music-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [MusicCardComponent,CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
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
    artist: "theory of dead man test",
    coverImage: "@/../img/song1.jpg",
    musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},
{
  id:3,
  title: "song test3",
  artist: "theory of dead man test",
  coverImage: "@/../img/song1.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},
{
  id:4,
  title: "song test4",
  artist: "theory of dead man test",
  coverImage: "@/../img/song1.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},

{
  id:5,
  title: "song test5",
  artist: "theory of dead man test",
  coverImage: "@/../img/song1.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},
{
  id:6,
  title: "song test6",
  artist: "theory of dead man test",
  coverImage: "@/../img/song1.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},
{
  id:7,
  title: "song test7",
  artist: "theory of dead man test",
  coverImage: "@/../img/song1.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},

{
  id:8,
  title: "song test8",
  artist: "theory of dead man test",
  coverImage: "@/../img/song1.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},
{
  id:9,
  title: "song test9",
  artist: "theory of dead man test",
  coverImage: "@/../img/song1.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},
{
  id:10,
  title: "song test10",
  artist: "theory of dead man test",
  coverImage: "@/../img/song1.jpg",
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
  coverImage: "@/../img/song1.jpg",
  musicSrc: "https://dl2.hitseda.com/Music/ak/nab-selections/Otnicka%20-%20Mandoline.mp3"
},
  ]

  
}
