import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Family2ChildComponent } from './family2-child-component';

describe('Family2ChildComponent', () => {
  let component: Family2ChildComponent;
  let fixture: ComponentFixture<Family2ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Family2ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Family2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
