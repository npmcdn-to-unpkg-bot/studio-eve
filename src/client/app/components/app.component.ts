import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {WorkListService} from '../shared/index';
import {HomeComponent} from '../+home/index';
import {AboutComponent} from '../+about/index';
import { WorkDetailComponent } from '../+work/index';

@Component({
  selector: 'sd-app',
  viewProviders: [WorkListService],
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  },
  {
    path: '/work/:slug',
    name: 'WorkDetail',
    component: WorkDetailComponent
  }
])
export class AppComponent {}
