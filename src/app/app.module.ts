import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PanelComponent } from './panel/panelcomponent';



@NgModule({
    declarations: [ 
        AppComponent,
        HeaderComponent,
        PanelComponent
    ],
    imports: [ BrowserModule ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule{

}