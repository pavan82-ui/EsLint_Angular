import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngcontainer',
  templateUrl: './ngcontainer.component.html',
  styleUrls: ['./ngcontainer.component.scss']
})
export class NgcontainerComponent implements OnInit {
  login:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
