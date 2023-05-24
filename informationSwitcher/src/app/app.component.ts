import { Component, OnInit } from '@angular/core';
import { Switcher } from './switcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Switcher]
})
export class AppComponent implements OnInit{
  title = 'informationSwitcher';

  linksOfRechts: boolean = true;

  infoLinks: {naam: string, tekst: string} = {naam: "", tekst: ""};
  infoRechts: {naam: string, tekst: string} = {naam: "", tekst: ""};

  constructor(private switcher: Switcher){}

  ngOnInit()
  {
    this.infoLinks = this.switcher.section1;
  }

  switchInformatie()
  {
    this.switcher.VerplaatsInformatie(this.linksOfRechts = !this.linksOfRechts);

    this.infoLinks = this.switcher.section1;
    this.infoRechts = this.switcher.section2;
  }
}
