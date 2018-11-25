import { Component, OnInit, Input } from '@angular/core';
import { SitraPartner } from '../models/sitra-partner.model';
import { DataGroup } from '../models/data-group.model';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.css']
})
export class PartnerPageComponent implements OnInit {
  @Input() partner: SitraPartner;
  dataAvailable: Array<DataGroup> = [
    {
      id: "1",
      logo: "credit_card",
      description: "Your bank information"
    },
    {
      id: "2",
      logo: "store",
      description: "Partner shops' data such as products, sales, location, bank information"
    },
    {
      id: "3",
      logo: "location_on",
      description: "Your location history"
    },
    {
      id: "4",
      logo: "my_location",
      description: "Your actual location"
    },
    {
      id: "5",
      logo: "date_range",
      description: "Your habits"
    },
    {
      id: "6",
      logo: "face",
      description: "Gallery of pictures used for facial recognition"
    },
    {
      id: "7",
      logo: "commute",
      description: "Your transportation preferences"
    },
    {
      id: "8",
      logo: "translate",
      description: "Your languages preferences"
    },
    {
      id: "9",
      logo: "loyalty",
      description: "Your buying interests"
    },
    {
      id: "10",
      logo: "pets",
      description: "Your pets' details"
    },
    {
      id: "11",
      logo: "record_voice_over",
      description: "Real-time speech-to-text"
    },
    {
      id: "12",
      logo: "settings_voice",
      description: "Sound samples used for voice recognition"
    },
    {
      id: "13",
      logo: "star_rate",
      description: "Your general interests"
    },
    {
      id: "14",
      logo: "theaters",
      description: "Your movies preferences"
    },
    {
      id: "15",
      logo: "timeline",
      description: "Your events history"
    }
  ];
  dataRequired: Array<DataGroup>;
  dataUsed: Array<DataGroup>;

  constructor() {}

  ngOnInit() {
    this.dataRequired = this.dataAvailable.filter(d => this.partner.dataRequired.indexOf(d.id) != -1);
    this.dataUsed = this.dataAvailable.filter(d => this.partner.dataUsed.indexOf(d.id) != -1);
  }

}
