import { Component, QueryList, ViewChildren } from '@angular/core'
import { Student } from '../student/student'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-school',
    imports: [Student, CommonModule],
    templateUrl: './school.html',
    styleUrl: './school.css',
})
export class School {
    names: string[] = []
    @ViewChildren(Student) student!: QueryList<Student>

    listStudents() {
        this.names = this.student.map((child) => child.name)
    }
}
