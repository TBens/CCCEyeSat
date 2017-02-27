/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TmPacketsComponent } from './tm-packets.component';

describe('TmPacketsComponent', () => {
  let component: TmPacketsComponent;
  let fixture: ComponentFixture<TmPacketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmPacketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmPacketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
