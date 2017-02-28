/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TmGridComponent } from './tm-grid.component';

describe('TmGridComponent', () => {
  let component: TmGridComponent;
  let fixture: ComponentFixture<TmGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
