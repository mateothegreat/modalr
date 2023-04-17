import { ApplicationRef, Component, createComponent, Injector } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
    selector: 'app-example-a',
    templateUrl: './example-a.component.html',
    styleUrls: [ './example-a.component.scss' ]
})
export class ExampleAComponent {
    public constructor(private readonly injector: Injector,
                       private readonly applicationRef: ApplicationRef) {
        const host = document.querySelector('body')!;
        const child = document.createElement('div');
        host.append(child);
        const componentRef = createComponent(ChildComponent, {
            hostElement: child,
            environmentInjector: this.applicationRef.injector
        });
        this.applicationRef.attachView(componentRef.hostView);
    }
}
