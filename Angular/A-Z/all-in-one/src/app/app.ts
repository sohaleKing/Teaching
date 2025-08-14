import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ServiceConsumerComponent } from './service-consumer-component/service-consumer-component'
import { ParentComponent } from './parent-component/parent-component'
import { Family2ParentComponent } from './family2-parent-component/family2-parent-component'

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        ServiceConsumerComponent,
        ParentComponent,
        Family2ParentComponent,
    ],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {
    protected title = 'all-in-one'
}
