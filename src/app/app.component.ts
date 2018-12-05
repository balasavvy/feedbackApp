import {Component} from '@angular/core';

import { feedBackServices } from './feedback-servcies/feedback-question-services';

@Component({
  selector: 'app-root',
  template:`
  <nav class="navbar navbar-expand-sm bg-light"  style="margin-bottom:20px">

  <ul class="navbar-nav">
    <li class="nav-item"><a class="nav-link" [routerLink] = "['/respond', 1234]">Feedback</a></li>
    <li class="nav-item"><a class="nav-link" [routerLink] = "['/nostepwizard']">Feedback -No Wizards</a></li>
    <!--<li class="nav-item"><a class="nav-link" [routerLink] = "['/']">Carousel</a></li>-->
 </ul>
</nav>
   <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  
}
