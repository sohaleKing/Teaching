import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ServiceConsumerComponent } from './service-consumer-component/service-consumer-component'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ServiceConsumerComponent],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {
    protected title = 'all-in-one'
}
