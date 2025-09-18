import { Component, ElementRef, ViewChild } from '@angular/core'
import { Child1 } from '../child1/child1'
import { Child2 } from '../child2/child2'
import { Child3 } from '../child3/child3'

@Component({
    selector: 'app-parent',
    imports: [Child1, Child2, Child3],
    templateUrl: './parent.html',
    styleUrl: './parent.css',
})
export class Parent {
    parentMsg: string = 'Hi from Dady!'
    kid2Msg: string = ''
    @ViewChild(Child3) child!: Child3
    @ViewChild('myInput') input!: ElementRef

    receiveMsg(message: string) {
        this.kid2Msg = message
    }

    callingChild3() {
        this.child.sayHello()
    }

    focus() {
        this.input.nativeElement.focus()
    }
}
