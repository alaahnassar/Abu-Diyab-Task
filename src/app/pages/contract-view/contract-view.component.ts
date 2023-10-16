import { Component } from '@angular/core';

@Component({
  selector: 'app-contract-view',
  templateUrl: './contract-view.component.html',
  styleUrls: ['./contract-view.component.scss'],
})
export class ContractViewComponent {
  active = 2;
  data = [
    {
      date: '17-12-2022',
      type: 'تحت الحساب',
      value: '500',
      paidType: 'شيكات',
      employee: '1012',
    },
  ];

  accordionData = [
    {
      sectionTitle: 'Section 1',
      sectionContent: [
        { name: 'Item 1', description: 'Description for Item 1' },
        { name: 'Item 2', description: 'Description for Item 2' },
      ],
    },
    {
      sectionTitle: 'Section 2',
      sectionContent: [
        { name: 'Item 3', description: 'Description for Item 3' },
        { name: 'Item 4', description: 'Description for Item 4' },
      ],
    },
  ];
}
