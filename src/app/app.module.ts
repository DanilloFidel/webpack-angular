import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PanelComponent } from './panel/panel.component';




@NgModule({
    declarations: [ 
        AppComponent,
        HeaderComponent,
        PanelComponent
    ],
    imports: [ 
        BrowserModule,
        ReactiveFormsModule,
        HttpModule
     ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule{

}