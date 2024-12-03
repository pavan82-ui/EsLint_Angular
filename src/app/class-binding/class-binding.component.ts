import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {
  classExpression = "my-class-1 my-class-2 my-class-3";
  cssStringVar: string= 'red size20';
  constructor() { }

  ngOnInit(): void {
  }

  hasError()
  {
    return false;
  }

}
