import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './componentes/nav/nav.component';


// Para trabalhar com formulários no Angular 12
import { FormGroupDirective, ReactiveFormsModule } from "@angular/forms";

// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { FormGroup } from '@angular/forms';

import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'


// componentes internos

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';

import { CdkMenuModule } from '@angular/cdk/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { HomeComponent } from './componentes/home/home.component';
import { TelescopiosListComponent } from './componentes/telescope/telescopios-list/telescopios-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { TelescopiosCreateComponent } from './componentes/telescope/telescopios-create/telescopios-create.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TelescopeListcrudComponent } from './componentes/telescope/telescope-listcrud/telescope-listcrud.component';
import {MatTableModule} from '@angular/material/table';
import { TelescopeUpdateComponent } from './componentes/telescope/telescope-update/telescope-update.component';
import { TelescopeDeleteComponent } from './componentes/telescope/telescope-delete/telescope-delete.component';


// Componentes do projeto

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    TelescopiosListComponent,
    TelescopiosCreateComponent,
    TelescopeListcrudComponent,
    TelescopeUpdateComponent,
    TelescopeDeleteComponent,
    
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSortModule,
    MatGridListModule,
    FormsModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatChipsModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
