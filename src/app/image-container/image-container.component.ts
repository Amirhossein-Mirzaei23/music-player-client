import { Component, Input ,OnInit,AfterViewInit, OnDestroy} from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'image-container',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.scss'
})
export class ImageContainerComponent  {
  constructor() {}
  @Input() imageSrc !: string ;  
  rgbColor: string = 'rgba(0, 0, 255,.5)'; // Default to blue
  index:number = 0 
  rgbChanger = null as any


  intervalId = null as any;



//   ngAfterViewInit(): void {
//     // Called once the component is initialized

// setTimeout(()=>{
//   this.startCalculateRGB()
// },2000)

//   }


//   startCalculateRGB () {
//     console.log('tets');
//     this.rgbChanger = setInterval(() => {
//      this.index++
//      if (this.index > 100) {
//       this.index = 0
//      }
//     //  this.calculateRGB(this.index)
//    }, 2000);
//   }
//   ngOnDestroy() {
//     clearInterval(this.rgbChanger);
//   }
  

  calculateRGB(progress: number): string {
    // Convert progress percentage (0-100) to RGB values
    const red = Math.floor(( progress / 200) * 255); // Red increases with progress
    const blue = Math.floor(((100 -  progress) / 100) * 255); // Green decreases with progress
    const green = Math.floor(( progress / 50) * 255); // Blue increases in first 50%, then stays constant
    return `rgba(${red}, ${green}, ${blue},.5)`;
  }

}
