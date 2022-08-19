import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHelpsComponent } from './edit-helps.component';

describe('EditHelpsComponent', () => {
  let component: EditHelpsComponent;
  let fixture: ComponentFixture<EditHelpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHelpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHelpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
