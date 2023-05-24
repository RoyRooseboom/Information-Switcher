import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component {
  @Input() naamEnTekst: {naam: string, tekst: string} = {naam:"", tekst:""};
}
