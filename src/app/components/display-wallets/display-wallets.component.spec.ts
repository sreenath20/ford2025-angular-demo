import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWalletsComponent } from './display-wallets.component';

describe('DisplayWalletsComponent', () => {
  let component: DisplayWalletsComponent;
  let fixture: ComponentFixture<DisplayWalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayWalletsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
