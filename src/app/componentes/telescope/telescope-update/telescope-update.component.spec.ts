import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelescopeUpdateComponent } from './telescope-update.component';

describe('TelescopeUpdateComponent', () => {
  let component: TelescopeUpdateComponent;
  let fixture: ComponentFixture<TelescopeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelescopeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelescopeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
