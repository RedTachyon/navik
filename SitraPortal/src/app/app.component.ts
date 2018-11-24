import { Component } from '@angular/core';
import { SitraPartner } from './models/sitra-partner.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SitraPortal';
  language = 'EN';
  search = '';
  partners: Array<SitraPartner> = [
    {
      id: "1",
      name: "Navik",
      logo: "https://preview.ibb.co/f5QecA/navik-logo-Recovered.jpg",
      shortDescription: "Take it easy",
      description: "We help you get more by doing less"
    },
    {
      id: "2",
      name: "Life",
      logo: "https://fr.freelogodesign.org/Content/img/slide-logo-3.png",
      shortDescription: "Eat healthy",
      description: "We help you eat more healthy without the need to change your habits"
    },
    {
      id: "3",
      name: "StopTheHunt",
      logo: "https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F22%2F04%2F07%2F21%2F9757e437-5ec1-4378-804f-ca0f9567c110%2F380048_Widakk.png?auto=format&ch=Width%2CDPR&w=250&h=250",
      shortDescription: "Hunt the hunter",
      description: "If you are an animal lover, you will also love this app who tries to protect our beloved companions from evil hunters."
    }
  ];
  selectedPartner: SitraPartner;

  choseALanguage(language: string)
  {
    this.language = language;
  }

  selectPartner(id: string)
  {
    this.selectedPartner = this.partners.find(p => p.id === id);
  }

  unselectPartner()
  {
    this.selectedPartner = undefined;
  }
}
