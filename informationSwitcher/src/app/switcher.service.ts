import { Injectable } from "@angular/core"

@Injectable()
export class Switcher{
    name: string = "Whatson."
    text: string = "Whatson askt his father, Thatparent, how he got his name."

    section1: {naam: string, tekst: string} = {naam: "", tekst: ""};
    section2: {naam: string, tekst: string} = {naam: "", tekst: ""};

    constructor(){
        this.section1 = {naam: this.name, tekst: this.text};
    }

    VerplaatsInformatie(sectionOne: boolean)
    {
        if(sectionOne)
        {
            this.section1 = {naam: this.name, tekst: this.text};
            this.section2 = {naam: "", tekst: ""};
        }
        else
        {
            this.section1 = {naam: "", tekst: ""};
            this.section2 = {naam: this.name, tekst: this.text};
        }
    }

}