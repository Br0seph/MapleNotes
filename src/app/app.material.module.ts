import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TextFieldModule } from '@angular/cdk/text-field';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatGridListModule,
    MatInputModule,
    MatCheckboxModule,
    TextFieldModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatGridListModule,
    MatInputModule,
    MatCheckboxModule,
    TextFieldModule
  ]
})
export class AppMaterialModule { }
