import { Component, OnInit, Input } from '@angular/core';
import { SitraPartner } from '../models/sitra-partner.model';

@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.css']
})
export class PartnerPageComponent implements OnInit {
  @Input() partner: SitraPartner;

  constructor() { }

  ngOnInit() {
  }

}
