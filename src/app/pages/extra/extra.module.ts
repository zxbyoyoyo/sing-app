import 'fullcalendar/dist/fullcalendar.js';
import 'jquery-ui/ui/draggable.js';
import 'magnific-popup/dist/jquery.magnific-popup.min.js';
import 'shufflejs/dist/shuffle.js';
import 'moment/moment.js';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule, TooltipModule,
  ButtonsModule, BsDropdownModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { CalendarComponent } from './calendar/calendar.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { GalleryComponent } from './gallery/gallery.component';

import { AgmCoreModule } from '@agm/core';

export const routes = [
  {path: '', redirectTo: 'calendar', pathMatch: 'full'},
  {path: 'calendar', component: CalendarComponent},
  {path: 'invoice', component: InvoiceComponent},
  {path: 'search', component: SearchResultsComponent},
  {path: 'timeline', component: TimeLineComponent},
  {path: 'gallery', component: GalleryComponent}
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    CalendarComponent,
    InvoiceComponent,
    SearchResultsComponent,
    TimeLineComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
    })
  ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ExtraModule {
  static routes = routes;
}
