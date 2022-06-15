import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp02bComponent } from './comp02b.component';

describe('Comp02bComponent', () => {
  let component: Comp02bComponent;
  let fixture: ComponentFixture<Comp02bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp02bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp02bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
