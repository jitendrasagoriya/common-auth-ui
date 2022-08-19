import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninWithHeaderFooterComponent } from './signin-with-header-footer.component';

describe('SigninWithHeaderFooterComponent', () => {
  let component: SigninWithHeaderFooterComponent;
  let fixture: ComponentFixture<SigninWithHeaderFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninWithHeaderFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninWithHeaderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
