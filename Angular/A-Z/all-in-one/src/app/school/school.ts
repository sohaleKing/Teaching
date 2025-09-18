import { Component } from '@angular/core'
import { Student } from '../student/student'

@Component({
    selector: 'app-school',
    imports: [Student],
    templateUrl: './school.html',
    styleUrl: './school.css',
})
export class School {}
