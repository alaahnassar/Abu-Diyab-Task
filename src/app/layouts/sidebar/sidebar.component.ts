import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isSidebarOpen: boolean = true;
  menu = [
    {
      name: 'الرئيسية',
      icon: 'fa-solid fa-house',
    },
    {
      name: 'الملفات الرئيسية',
      icon: 'fa-regular fa-folder',
    },
    {
      name: 'ملفات الأرقام',
      icon: 'fa-regular fa-file-lines',
    },
    {
      name: 'الأستعلامات',
      icon: 'fa-solid fa-question',
    },
    {
      name: 'التقارير',
      icon: 'fa-solid fa-share-nodes',
    },
    {
      name: 'النظام',
      icon: 'fa-solid fa-desktop',
    },
  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
