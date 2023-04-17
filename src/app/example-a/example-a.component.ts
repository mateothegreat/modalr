import { ApplicationRef, Component, createComponent, Injector, ViewContainerRef } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ChildComponent } from './child/child.component';

@Component({
    standalone: true,
    selector: 'app-example-a',
    templateUrl: './example-a.component.html',
    styleUrls: [ './example-a.component.scss' ],
    imports: [ ChildComponent ]
})
export class ExampleAComponent {
    public constructor(private viewContainerRef: ViewContainerRef,
                       private readonly injector: Injector,
                       private readonly applicationRef: ApplicationRef) {
        const host = document.getElementById('body');

        bootstrapApplication(ExampleAComponent).then((ref) => {
            //
            // recursive loop here
            //
            console.log(ref);
            const componentRef = createComponent(ChildComponent, {
                // @ts-ignore
                host,
                environmentInjector: applicationRef.injector
            });
            // applicationRef.attachView(componentRef.hostView);
        });
    }
}
