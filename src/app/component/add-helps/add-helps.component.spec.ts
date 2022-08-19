import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHelpsComponent } from './add-helps.component';

describe('AddHelpsComponent', () => {
  let component: AddHelpsComponent;
  let fixture: ComponentFixture<AddHelpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHelpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHelpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
