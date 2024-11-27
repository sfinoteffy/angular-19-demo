import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotModuleReloadComponent } from './hot-module-reload.component';

describe('HotModuleReloadComponent', () => {
  let component: HotModuleReloadComponent;
  let fixture: ComponentFixture<HotModuleReloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotModuleReloadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotModuleReloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
