import { ComponentRef } from '@angular/core';
import { ModalrConfig } from './modalr-instance';

export class ModalrInstance<T> {
    public config: ModalrConfig<T>;
    public componentRef: ComponentRef<T>;
    public host: HTMLElement;
    public child: HTMLElement;

    public constructor(config: ModalrConfig<T>) {
        Object.assign(this, config);
    }
}
