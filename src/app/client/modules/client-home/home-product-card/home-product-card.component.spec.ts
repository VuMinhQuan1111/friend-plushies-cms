import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductCardComponent } from './home-product-card.component';

describe('HomeProductCardComponent', () => {
  let component: HomeProductCardComponent;
  let fixture: ComponentFixture<HomeProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
