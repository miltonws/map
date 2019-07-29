import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent,
    MapComponent
} from './components';
import { StatModule } from '../../shared';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        DashboardRoutingModule,
        StatModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDCL8j_esC-CaEeY87Zf7oucR5o71MNUB8'
        })
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        MapComponent
    ]
})
export class DashboardModule {}
