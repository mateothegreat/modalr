import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './example-a/child/child.component';
import { ExampleAComponent } from './example-a/example-a.component';

@NgModule({
    declarations: [
        AppComponent,
        ChildComponent,
        ExampleAComponent
    ],
    imports: [
        BrowserModule

    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
