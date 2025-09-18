import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-student',
    imports: [],
    templateUrl: './student.html',
    styleUrl: './student.css',
})
export class Student {
    @Input() name: string = ''
}
