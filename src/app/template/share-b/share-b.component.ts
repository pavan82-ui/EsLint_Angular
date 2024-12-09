import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-b',
  templateUrl: './share-b.component.html',
  styleUrls: ['./share-b.component.scss']
})
export class ShareBComponent implements OnInit {
  @Input() data: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
