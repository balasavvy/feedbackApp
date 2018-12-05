import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { DynamicFormQuestionComponent } from './fbform-component/fbform-component.component';
import { DynamicForm } from './form-component/form-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FeedBackComponent } from './feedback-component/feedback-component.component';
import { appRouterModule } from './app.routes';
import { RouterModule } from '@angular/router';
import { NoWizardComponentComponent } from './no-wizard-component/no-wizard-component.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DynamicForm,
    DynamicFormQuestionComponent,FeedBackComponent,NoWizardComponentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    FormsModule,
    TransferHttpCacheModule,
    ReactiveFormsModule,MatStepperModule,BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,MatButtonModule,
    appRouterModule

  ],
  providers: [],
    exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
