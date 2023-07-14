import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  exports: [
    MenuModule,
    ButtonModule,
    MenubarModule,
    CardModule,
    PanelModule,
    FieldsetModule,
    ToolbarModule,
    SplitButtonModule,
    TableModule,
  ],
})
export class PrimengModule {}
