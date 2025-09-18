import { Component } from '@angular/core'
import { Child1 } from '../child1/child1'

@Component({
    selector: 'app-parent',
    imports: [Child1],
    templateUrl: './parent.html',
    styleUrl: './parent.css',
})
export class Parent {
    parentVar: string = 'Hi from Parent'
}
