import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MapComponent } from './map/map.component';
import { ContactoComponent } from './contacto/contacto.component';
import {RedSocialComponent} from './red-social/red-social.component';
import {ConfiguracionTwitterComponent} from './configuracion-twitter/configuracion-twitter.component'




@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent,
    CarouselComponent,
    MapComponent,
    ContactoComponent,
    RedSocialComponent,
    ConfiguracionTwitterComponent,
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent,
    CarouselComponent,
    MapComponent,
    ContactoComponent,
    RedSocialComponent,
    ConfiguracionTwitterComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({apiKey: "AIzaSyDUPotZFtIcWjO3DQC6sYPDJ5rRAJ7ToXs"}),

  ]
})

export class ComponentsModule { }
