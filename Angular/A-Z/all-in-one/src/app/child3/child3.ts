import { Component } from '@angular/core'

@Component({
    selector: 'app-child3',
    imports: [],
    templateUrl: './child3.html',
    styleUrl: './child3.css',
})
export class Child3 {
    sayHello() {
        alert('Hi from child3')
    }
}
