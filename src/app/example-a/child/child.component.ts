import { Component, OnDestroy } from '@angular/core';

@Component({
    // standalone: true,
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: [ './child.component.scss' ]
})
export class ChildComponent implements OnDestroy {
    public constructor() {
        console.log('child');
    }

    public ngOnDestroy() {
        console.log('child destroyed');
    }
}
