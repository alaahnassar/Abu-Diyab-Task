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

@NgModule({
  declarations: [ContractViewComponent],
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
