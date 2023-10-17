import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContractViewComponent } from './contract-view/contract-view.component';
import {
  NgbAccordionModule,
  NgbCollapseModule,
  NgbNavModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';

@NgModule({
  declarations: [ContractViewComponent, InvoiceSummaryComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbNavModule,
    NgbAccordionModule,
    NgbCollapseModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
