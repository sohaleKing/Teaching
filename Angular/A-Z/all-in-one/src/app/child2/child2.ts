import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'app-child2',
    imports: [],
    templateUrl: './child2.html',
    styleUrl: './child2.css',
})
export class Child2 {
    @Output() msgToParent: any = new EventEmitter()

    sendMsgToDady() {
        this.msgToParent.emit('Dady I am calling you!')
    }
}
