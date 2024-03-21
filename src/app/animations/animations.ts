import { animate, style, transition, trigger } from "@angular/animations";

export const showStateTrigger = trigger('showState', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(1000)
    ])
]);