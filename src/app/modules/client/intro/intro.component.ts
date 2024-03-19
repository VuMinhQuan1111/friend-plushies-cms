import { Component } from '@angular/core';
import {NbCardModule} from '@nebular/theme';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [
    NbCardModule,
  ],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {

}
