// Import necessary Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import Angular Material modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// import { AngularIconComponent } from './app/angular-icon/angular-icon.component';
// Import your app's components
 import { AppComponent } from './app.component';

 bootstrapApplication(AppComponent, {
    providers: [
      provideAnimations(),
      importProvidersFrom(MatIconModule),
    ],
  }).catch(err => console.error(err));

@NgModule({
  declarations: [
    // Declare components, directives, and pipes used in this module
  //  AppComponent,

  ],
  imports: [
    // Import Angular and third-party modules
    AppRoutingModule,
    BrowserModule,              // Necessary for web applications
    BrowserAnimationsModule,     // Enables animations in the app (required by Angular Material)
    FormsModule,                 // Template-driven forms
    HttpClientModule,            // For making HTTP requests
    MatIconModule,               // Angular Material icon module
    MatButtonModule,             // Angular Material button module
    MatToolbarModule,            // Angular Material toolbar module
    MatCardModule,             // Angular Material card module
    AppComponent,
    
  ],
  providers: [],
  
 // bootstrap: [AppComponent]  // The root component that Angular creates and inserts into the index.html
})
export class AppModule { }
