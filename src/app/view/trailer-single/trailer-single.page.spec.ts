import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrailerSinglePage } from './trailer-single.page';

describe('TrailerSinglePage', () => {
  let component: TrailerSinglePage;
  let fixture: ComponentFixture<TrailerSinglePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerSinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
