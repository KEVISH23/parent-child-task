import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { HighlightDirective } from './core/directives/highlight.directive';
import { InputDirective } from './core/directives/input.directive';
import { CustomNgIfDirective } from './core/directives/custom-ng-if.directive';
import { EmailValidatorDirective } from './core/directives/email-validator.directive';
import { CustomNgForDirective } from './core/directives/custom-ng-for.directive';
import { FilterEvenPipe } from './core/pipes/filter-even.pipe';
import { AddTwoPipe } from './core/pipes/add-two.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserManagerComponent,
    HighlightDirective,
    InputDirective,
    CustomNgIfDirective,
    EmailValidatorDirective,
    CustomNgForDirective,
    FilterEvenPipe,
    AddTwoPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
