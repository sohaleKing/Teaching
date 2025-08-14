import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'app-family2-child-component',
    imports: [],
    templateUrl: './family2-child-component.html',
    styleUrl: './family2-child-component.css',
})
export class Family2ChildComponent {
    @Input() childProperty: string = ''
    @Output() childEvent: any = new EventEmitter()
}
