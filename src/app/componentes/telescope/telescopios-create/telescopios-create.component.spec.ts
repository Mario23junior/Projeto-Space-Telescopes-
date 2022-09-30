import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelescopiosCreateComponent } from './telescopios-create.component';

describe('TelescopiosCreateComponent', () => {
  let component: TelescopiosCreateComponent;
  let fixture: ComponentFixture<TelescopiosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelescopiosCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelescopiosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
