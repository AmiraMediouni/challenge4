import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
