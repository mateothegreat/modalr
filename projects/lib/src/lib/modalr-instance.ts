import { Type } from '@angular/core';

export class ModalrConfig<T> {
    public name: string;
    public component: Type<T>;
    public target?: string;
}
