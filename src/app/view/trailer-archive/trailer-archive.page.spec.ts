import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrailerArchivePage } from './trailer-archive.page';

describe('TrailerArchivePage', () => {
  let component: TrailerArchivePage;
  let fixture: ComponentFixture<TrailerArchivePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerArchivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
