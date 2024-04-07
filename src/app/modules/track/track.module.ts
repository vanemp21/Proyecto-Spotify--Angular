import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackRoutingModule } from './track-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TrackPageComponent } from './pages/track-page/track-page.component';



@NgModule({
  declarations: [
  TrackPageComponent
  ],
  imports: [
    CommonModule,
    TrackRoutingModule,
    SharedModule
  ]
})
export class TrackModule { }
