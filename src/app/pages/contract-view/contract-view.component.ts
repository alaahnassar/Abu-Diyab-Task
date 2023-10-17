import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contract-view',
  templateUrl: './contract-view.component.html',
  styleUrls: ['./contract-view.component.scss'],
})
export class ContractViewComponent {
  active = 2;
  isCollapsed = true;
  generalIsCollapsed = true;
  costsIsCollapsed = true;
  invoiceIsCollapsed = true;
  invoiceSummaryIsCollapsed = false;
  data = [
    {
      id: 1,
      date: '17-12-2022',
      type: 'تحت الحساب',
      description: '---',
      value: '500',
      paidType: 'شيكات',
      branch: 'الفرع الرئيسي',
      processType: 'شبكة',
      machine: '301247',
      num1: '1479',
      num2: '5019698',
      employee: '1012',
      isCollapsed: true,
    },
    {
      id: 2,
      date: '17-12-2022',
      type: 'تحت الحساب',
      description: '---',
      value: '500',
      paidType: 'شيكات',
      branch: 'الفرع الرئيسي',
      processType: 'شبكة',
      machine: '301247',
      num1: '1479',
      num2: '5019698',
      employee: '1012',
      isCollapsed: true,
    },
    {
      id: 3,
      date: '17-12-2022',
      type: 'تحت الحساب',
      description: '---',
      value: '500',
      paidType: 'شيكات',
      branch: 'الفرع الرئيسي',
      processType: 'شبكة',
      machine: '301247',
      num1: '1479',
      num2: '5019698',
      employee: '1012',
      isCollapsed: true,
    },
    {
      id: 4,
      date: '17-12-2022',
      type: 'تحت الحساب',
      description: '---',
      value: '500',
      paidType: 'شيكات',
      branch: 'الفرع الرئيسي',
      processType: 'شبكة',
      machine: '301247',
      num1: '1479',
      num2: '5019698',
      employee: '1012',
      isCollapsed: true,
    },
  ];

  forms: FormGroup[] = [];

  constructor(private fb: FormBuilder) {
    // Create a form for each item in the data array
    this.data.forEach((item) => {
      const form = this.fb.group({
        date: [item.date],
        type: [item.type],
        description: [item.description],
        value: [item.value],
        paidType: [item.paidType],
        branch: [item.branch],
        processType: [item.processType],
        machine: [item.machine],
        num1: [item.num1],
        num2: [item.num2],
        employee: [item.employee],
        isCollapsed: [item.isCollapsed],
      });

      this.forms.push(form);
    });
  }

  addNewPayment() {
    // Generate a new item with default values
    const newItem = {
      id: this.data.length + 1,
      date: '',
      type: '',
      description: '',
      value: '',
      paidType: '',
      branch: '',
      processType: '',
      machine: '',
      num1: '',
      num2: '',
      employee: '',
      isCollapsed: false,
    };

    this.data.push(newItem);

    // Create a form for the new item
    const newForm = this.fb.group({
      date: [newItem.date],
      type: [newItem.type],
      description: [newItem.description],
      value: [newItem.value],
      paidType: [newItem.paidType],
      branch: [newItem.branch],
      processType: [newItem.processType],
      machine: [newItem.machine],
      num1: [newItem.num1],
      num2: [newItem.num2],
      employee: [newItem.employee],
      isCollapsed: [newItem.isCollapsed],
    });

    this.forms.push(newForm);
  }
}
