import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @ViewChild('sidebar') sidebar!: ElementRef;
  isSidebarOpen = true;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    if (this.isSidebarOpen) {
      this.sidebar.nativeElement.classList.add('open');
    } else {
      this.sidebar.nativeElement.classList.remove('open');
    }
  }
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
}
