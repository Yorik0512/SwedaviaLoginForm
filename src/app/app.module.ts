// Core imports.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular material imports.
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Application imports.
import { AppComponent } from './app.component';
import { ShowErrorsComponent } from './components/show-errors/show-errors.component';
import { DialogDataComponent } from './components/dialog-data/dialog-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowErrorsComponent,
    DialogDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
    DialogDataComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
