import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxsearchComponent } from './rxsearch.component';

describe('RxsearchComponent', () => {
  let component: RxsearchComponent;
  let fixture: ComponentFixture<RxsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxsearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
