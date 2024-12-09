import { Component, Input, OnInit } from '@angular/core';
import { ShareAComponent } from '../share-a/share-a.component';
import { ShareBComponent } from '../share-b/share-b.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @Input() title: any
  components: any[] = [
    { component: ShareAComponent },
    { component: ShareBComponent },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
