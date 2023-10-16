import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContractViewComponent } from './contract-view/contract-view.component';
import { NgbAccordionModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ContractViewComponent],
  imports: [CommonModule, PagesRoutingModule, NgbNavModule, NgbAccordionModule],
})
export class PagesModule {}