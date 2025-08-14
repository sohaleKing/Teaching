import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Family2ParentComponent } from './family2-parent-component';

describe('Family2ParentComponent', () => {
  let component: Family2ParentComponent;
  let fixture: ComponentFixture<Family2ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Family2ParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Family2ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
