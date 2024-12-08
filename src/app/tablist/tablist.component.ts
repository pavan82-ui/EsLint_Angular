import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.component.html',
  styleUrls: ['./tablist.component.scss']
})
export class TablistComponent implements OnInit {
  @Input() tab: any
  constructor() { }

  ngOnInit(): void {
    console.log(this.tab);
  }

}
