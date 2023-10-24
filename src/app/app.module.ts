import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    StructuralDirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
