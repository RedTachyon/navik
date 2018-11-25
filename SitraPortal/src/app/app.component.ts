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
      shortDescription: "I'll have the usual",
      description: "Make your life easier by facilitating your regular purchases",
      dataRequired: [
        "1",
        "2",
        "4",
        "6",
        "11"
      ],
      dataUsed: [
        "3",
        "5",
        "7",
        "8",
        "9",
        "13",
        "15"
      ]
    },
    {
      id: "2",
      name: "Novink",
      logo: "https://i.ibb.co/TkVWKVN/novink.jpg",
      shortDescription: "Knowledge *you* care about",
      description: "Get the latest news stories and articles that are actually relevant to you",
      dataRequired: [
        "8"
      ],
      dataUsed: [
        "1",
        "10",
        "13",
        "14"
      ]
    },
    {
      id: "3",
      name: "Nazdring",
      logo: "https://i.ibb.co/M2N0Vgj/nazdring.jpg",
      shortDescription: "Effortless health boost",
      description: "Get valuable health advice that falls in line with your life",
      dataRequired: [
        "2",
        "5",
        "9"
      ],
      dataUsed: [
        "1",
        "7"
      ]
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
