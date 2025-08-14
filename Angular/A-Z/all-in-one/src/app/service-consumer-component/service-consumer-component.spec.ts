import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceConsumerComponent } from './service-consumer-component';

describe('ServiceConsumerComponent', () => {
  let component: ServiceConsumerComponent;
  let fixture: ComponentFixture<ServiceConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceConsumerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
