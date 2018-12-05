import {Routes, RouterModule} from '@angular/router';
import { FeedBackComponent } from './feedback-component/feedback-component.component';
import { NoWizardComponentComponent } from './no-wizard-component/no-wizard-component.component';
export const ROUTES: Routes = [
    {
        path: 'respond/:data',
        component: FeedBackComponent,
        pathMatch: 'full'
    },
    {
        path: 'nostepwizard',
        component: NoWizardComponentComponent
    },

    {path: '', component: FeedBackComponent, pathMatch: 'full'},
];

export const appRouterModule = RouterModule.forRoot(ROUTES);
