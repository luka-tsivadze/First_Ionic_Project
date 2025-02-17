import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailedInfoPage } from './detailed-info.page';

describe('DetailedInfoPage', () => {
  let component: DetailedInfoPage;
  let fixture: ComponentFixture<DetailedInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
