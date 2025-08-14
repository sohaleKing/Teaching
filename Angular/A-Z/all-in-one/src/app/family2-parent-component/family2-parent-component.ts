import { Component } from '@angular/core'
import { Family2ChildComponent } from '../family2-child-component/family2-child-component'

@Component({
    selector: 'app-family2-parent-component',
    imports: [Family2ChildComponent],
    templateUrl: './family2-parent-component.html',
    styleUrl: './family2-parent-component.css',
})
export class Family2ParentComponent {
    msgToChild: string = 'papa2 says hi'
    msgFromChild: string = ''
}
