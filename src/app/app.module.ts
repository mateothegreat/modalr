import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleAComponent } from './example-a/example-a.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ExampleAComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
