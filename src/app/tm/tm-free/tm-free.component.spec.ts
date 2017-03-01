/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TmFreeComponent } from './tm-free.component';

describe('TmFreeComponent', () => {
  let component: TmFreeComponent;
  let fixture: ComponentFixture<TmFreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmFreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
