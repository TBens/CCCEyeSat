/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TmPacketComponent } from './tm-packet.component';

describe('TmPacketComponent', () => {
  let component: TmPacketComponent;
  let fixture: ComponentFixture<TmPacketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmPacketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmPacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
