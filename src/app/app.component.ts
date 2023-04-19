import { Component } from '@angular/core';
import { ModalrService } from '../../projects/lib/src/lib/modalr.service';
import { ChildComponent } from './example-a/child/child.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
    public constructor(private readonly modalrService: ModalrService) {
        const instance = this.modalrService.open({
            name: 'child',
            component: ChildComponent
        });

        console.log(instance);

        setTimeout(() => {
            this.modalrService.close('child');
        }, 2000);
    }
}
