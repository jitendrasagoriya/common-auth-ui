import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupWithHeaderFooterComponent } from './signup-with-header-footer.component';

describe('SignupWithHeaderFooterComponent', () => {
  let component: SignupWithHeaderFooterComponent;
  let fixture: ComponentFixture<SignupWithHeaderFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupWithHeaderFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupWithHeaderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
