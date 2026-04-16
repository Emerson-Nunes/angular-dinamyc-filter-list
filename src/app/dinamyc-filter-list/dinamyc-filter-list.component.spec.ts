import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamycFilterListComponent } from './dinamyc-filter-list.component';

describe('DinamycFilterListComponent', () => {
  let component: DinamycFilterListComponent;
  let fixture: ComponentFixture<DinamycFilterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinamycFilterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinamycFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
