import { Component,Output,Input, EventEmitter,OnChanges } from '@angular/core';
import { stringify } from 'querystring';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../../services/rgbaColor.service';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  constructor(private dataService: DataService) {}

  @Input() currentTimeLenth!: number; // This is the prop received from the parent
  @Input() durationLenth!: number; // This is the prop received from the parent
  @Output() seekCurrenTimeEvent = new EventEmitter<number>();  // Event to handle Play
  // EventEmitter<string> = new EventEmitter<string>();
  progerssBarWidth:number = 0
  rgbColor: string = 'rgba(0, 0, 255,.5)'; // Default to blue
  index = 0
   calcProgerssBarWidth() {
    // this.progerssBarWidth = ((Math.round(this.currentTimeLenth)/Math.round(this.durationLenth))*100).toString() + "%"
    // console.log(Math.round(this.currentTimeLenth)/Math.round(this.durationLenth));
    // console.log(' this.progerssBarWidth', this.progerssBarWidth);
    this.progerssBarWidth = (Math.round(this.currentTimeLenth)/Math.round(this.durationLenth))*100
    // console.log(Math.round(this.currentTimeLenth)/Math.round(this.durationLenth));
    // console.log(' this.progerssBarWidth', this.progerssBarWidth);


     this.rgbColor = this.calculateRGB(this.progerssBarWidth);
     
     this.dataService.changeData(this.rgbColor);
  }
  ngOnChanges(currentTimeLenth:number) {
    this.calcProgerssBarWidth()
}


// setInterval(() => {
//   this.index++
//   this.rgbColor = this.calculateRGB(this.index)
// }, 1000);

onSeek(event: any): void {
  this.seekCurrenTimeEvent.emit(event.target.value)
console.log(event.target.value);

  // const audio = this.audioPlayer.nativeElement;
  // const seekTime =event.target.value
  // audio.currentTime = seekTime;
}

calculateRGB(progress: number): string {
  // Convert progress percentage (0-100) to RGB values
  const red = Math.floor(( progress / 200) * 255); // Red increases with progress
  const blue = Math.floor(((100 -  progress) / 100) * 255); // Green decreases with progress
  const green = Math.floor(( progress / 50) * 255); // Blue increases in first 50%, then stays constant
  return `rgba(${red}, ${green}, ${blue},.5)`;
}

}
