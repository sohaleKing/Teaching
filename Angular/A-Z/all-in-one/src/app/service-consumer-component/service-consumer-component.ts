import { Component, OnInit } from '@angular/core'
import { HttpService } from '../http-service'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-service-consumer-component',
    imports: [CommonModule],
    templateUrl: './service-consumer-component.html',
    styleUrl: './service-consumer-component.css',
})
export class ServiceConsumerComponent implements OnInit {
    result: any
    constructor(private httpService: HttpService) {}

    ngOnInit(): void {
        this.httpService.getData().subscribe((data) => {
            this.result = data
        })
    }
}
