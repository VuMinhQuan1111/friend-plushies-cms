import { Component } from '@angular/core';
import {NbCardModule} from '@nebular/theme';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NbCardModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
