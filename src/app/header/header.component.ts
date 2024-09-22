import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { MatIconModule } from '@angular/material/icon'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule ,MatIconModule,CommonModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  name='amir'
  inputName=""

  @Input() childData: string = '';  
  
  changeName() {
    this.name=this.inputName
    alert(this.name)
  }
}
