import { AfterViewInit, ApplicationRef, Component, createComponent, Injector, ViewContainerRef } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
    standalone: true,
    selector: 'app-example-a',
    templateUrl: './example-a.component.html',
    styleUrls: [ './example-a.component.scss' ],
    imports: [ ChildComponent ]
})
export class ExampleAComponent implements AfterViewInit {
    public constructor(private viewContainerRef: ViewContainerRef,
                       private readonly injector: Injector,
                       private readonly applicationRef: ApplicationRef) {
    }

    public ngAfterViewInit() {
        const host = document.getElementById('foo');
        console.log(host);
        const componentRef = createComponent(ChildComponent, {
            // @ts-ignore
            host,
            environmentInjector: this.applicationRef.injector
        });
        console.log(componentRef);
        console.log(this.applicationRef);
        this.applicationRef.attachView(componentRef.hostView);
    }
}
