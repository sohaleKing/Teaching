import { Component, OnInit } from '@angular/core'
import { ApiService } from '../api-service'
import { JsonPipe } from '@angular/common'
import { Router, RouterLink } from '@angular/router'

@Component({
    selector: 'app-home-component',
    imports: [JsonPipe, RouterLink],
    templateUrl: './home-component.html',
    styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit {
    data: any
    constructor(private api: ApiService, private router: Router) {}

    ngOnInit(): void {
        this.api
            .getData('https://jsonplaceholder.typicode.com/todos/1')
            .subscribe((res) => (this.data = res))
    }

    goSchool() {
        this.router.navigate(['/school'])
    }
}
