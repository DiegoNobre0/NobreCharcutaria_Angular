import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCustomerTypeComponent } from './delete-customer-type.component';

describe('DeleteCustomerTypeComponent', () => {
  let component: DeleteCustomerTypeComponent;
  let fixture: ComponentFixture<DeleteCustomerTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCustomerTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCustomerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
