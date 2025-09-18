import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-user',
    imports: [],
    templateUrl: './user.html',
    styleUrl: './user.css',
})
export class User implements OnInit {
    userId: string = ''
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.userId = this.route.snapshot.paramMap.get('id') || ''
    }
}
