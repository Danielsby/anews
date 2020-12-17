import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NblockComponent } from './nblock.component';

describe('NblockComponent', () => {
  let component: NblockComponent;
  let fixture: ComponentFixture<NblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
