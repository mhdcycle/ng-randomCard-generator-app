import { Component, OnInit, Input } from '@angular/core';
import {faEnvelope, faMapMarkedAlt, faPhone, faDatabase} from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() user;
  faEnvelope= faEnvelope;
  faMapMarkedAlt= faMapMarkedAlt;
  faPhone= faPhone;
  faDatabase= faDatabase;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  

}
