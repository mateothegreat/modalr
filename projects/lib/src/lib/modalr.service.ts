import { ApplicationRef, createComponent, Injectable, Injector } from '@angular/core';
import { ModalrInstance } from './modalr-config';
import { ModalrConfig } from './modalr-instance';

@Injectable({
    providedIn: 'root'
})
export class ModalrService {
    public instances: { [name: string]: ModalrInstance<any> } = {};

    public constructor(private readonly injector: Injector,
                       private readonly applicationRef: ApplicationRef) {

    }

    public open<T>(config: ModalrConfig<T>): ModalrInstance<T> {
        const instance = new ModalrInstance(config);
        let host: HTMLElement;

        if (config.target) {
            host = document.querySelector(config.target)!;
        } else {
            host = document.querySelector('body')!;
        }

        const child = document.createElement('div');

        host.append(child);

        const componentRef = createComponent(config.component, {
            hostElement: child,
            environmentInjector: this.applicationRef.injector
        });

        instance.host = host;
        instance.child = child;
        instance.componentRef = componentRef;
        // this.applicationRef.attachView(componentRef.hostView);
        this.instances[config.name] = instance;
        return instance;
    }

    public close(name: string): void {
        this.instances[name].host.removeChild(this.instances[name].child);
        this.instances[name].componentRef.destroy();

        delete this.instances[name];
    }
}
