


import { Component, Input, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/rgbaColor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'image-container',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent implements OnInit, OnDestroy {
  @Input() imageSrc!: string;
  rgbColor: string = 'rgba(0, 0, 255, .5)';
  private dataSubscription: Subscription | undefined;


  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // this.dataService.currentData.subscribe((newData) => this.rgbChanger = newData);

    this.dataSubscription = this.dataService.currentData.subscribe((newData) => {
      this.rgbColor = newData;
      this.cdr.markForCheck(); // Trigger change detection
    });
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
