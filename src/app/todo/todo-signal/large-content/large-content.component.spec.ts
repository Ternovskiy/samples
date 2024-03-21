import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeContentComponent } from './large-content.component';

describe('LargeContentComponent', () => {
  let component: LargeContentComponent;
  let fixture: ComponentFixture<LargeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
