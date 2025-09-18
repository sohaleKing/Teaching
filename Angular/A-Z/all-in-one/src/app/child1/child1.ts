import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-child1',
    imports: [],
    templateUrl: './child1.html',
    styleUrl: './child1.css',
})
export class Child1 {
    @Input() childVar: string = ''
}
