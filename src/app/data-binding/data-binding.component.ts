import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  items: any = [{colspan:1,name:'item 1'}, {colspan:3,name:'item 2'}];
  displayedColumns: any[] = ['position', 'name', 'weight', 'symbol'];
  tableData:any[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', colspan: null },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', colspan: null },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', colspan: 2 },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', colspan: null },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', colspan: null },
  ];

  headerEvent(column: string) {
    console.log(`Header clicked: ${column}`);
  }
  data = [
    {
      id: 1,
      name: 'Abc',
      email: 'abc@mail.com',
      isExpand: false,
      address: [
        {
          add1: 'Delhi',
          add2: 'Bangalore',
        }
      ]
    },
    {
      id: 2,
      name: 'Xyz',
      email: 'xyz@mail.com',
      isExpand: false,
      address: [
        {
          add1: 'Mumbai',
          add2: 'Pune',
        }
      ]
    },
    {
      id: 3,
      name: 'ijk',
      email: 'ijk@mail.com',
      isExpand: false,
      address: [
        {
          add1: 'Chennai',
          add2: 'Bangalore',
        }
      ]
    },
    {
      id: 4,
      name: 'def',
      email: 'def@mail.com',
      isExpand: false,
      address: [
        {
          add1: 'Kolkata',
          add2: 'Hyderabad',
        }
      ]
    }
  ];

  dataitem = [
    {
      versionNo: '1',
      issuedOn: '07/Jul/2021 11:15',
      
    },
    {
      versionNo: '2',
      issuedOn: '07/Jul/2021 11:15',
     
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.shiftKey && event.key === 'T') {
      alert('Shift + T pressed!');
      // Add your logic here
    }
  }
  

}
