import { Component, OnInit, TemplateRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.scss']
})
export class NgtemplateComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    
  }
  show = false;
  EditModalBodyTemplate: any;
  EditModalFooterTemplate: any;

  addFeedback(bodyTemplate: TemplateRef<any>, footerTemplate: TemplateRef<any>) {
    this.EditModalBodyTemplate = bodyTemplate;
    this.EditModalFooterTemplate = footerTemplate;
    this.show = true;
    this.cdr.detectChanges(); // Ensure changes are applied
}

  edit(bodyTemplate: any, footerTemplate: any) {
    this.EditModalBodyTemplate = bodyTemplate;
    this.EditModalFooterTemplate = footerTemplate;
    this.show = true;
  }

  Clickhistory(bodyTemplate: any, footerTemplate: any) {
    this.EditModalBodyTemplate = bodyTemplate;
    this.EditModalFooterTemplate = footerTemplate;
    this.show = true;
  }
}