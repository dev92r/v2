import { trigger, state, style, animate, transition } from '@angular/animations';

export function fadeInOut() {
    return trigger('fadeInOut', [
        state('*', style({
            opacity: 1
        })),
        transition(':enter', [
            style({
                opacity:0
            }), animate('500ms ease-in')
        ]),

    ])
}