import { Component } from '@angular/core'
import { Child1 } from '../child1/child1'
import { Child2 } from '../child2/child2'

@Component({
    selector: 'app-parent',
    imports: [Child1, Child2],
    templateUrl: './parent.html',
    styleUrl: './parent.css',
})
export class Parent {
    parentMsg: string = 'Hi from Dady!'
    kid2Msg: string = ''

    receiveMsg(message: string) {
        this.kid2Msg = message
    }
}
