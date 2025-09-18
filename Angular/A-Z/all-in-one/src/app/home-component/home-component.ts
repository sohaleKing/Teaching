import { Component, OnInit } from '@angular/core'
import { ApiService } from '../api-service'
import { JsonPipe } from '@angular/common'

@Component({
    selector: 'app-home-component',
    imports: [JsonPipe],
    templateUrl: './home-component.html',
    styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit {
    data: any
    constructor(private api: ApiService) {}

    ngOnInit(): void {
        this.api
            .getData('https://jsonplaceholder.typicode.com/todos/1')
            .subscribe((res) => (this.data = res))
    }
}
