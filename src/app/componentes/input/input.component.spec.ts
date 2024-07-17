import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOverviewExample } from './input.component';

describe('InputOverviewExample', () => {
  let component: InputOverviewExample;
  let fixture: ComponentFixture<InputOverviewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOverviewExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
