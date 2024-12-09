import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-a',
  templateUrl: './share-a.component.html',
  styleUrls: ['./share-a.component.scss']
})
export class ShareAComponent implements OnInit {
  @Input() data: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
