import { Component } from '@angular/core'
import { Child1Component } from '../child1-component/child1-component'
import { Child2Component } from '../child2-component/child2-component'

@Component({
    selector: 'app-parent-component',
    imports: [Child1Component, Child2Component],
    templateUrl: './parent-component.html',
    styleUrl: './parent-component.css',
})
export class ParentComponent {
    parentData: string = 'PAPA says Hi'
    count: number = 0
}
