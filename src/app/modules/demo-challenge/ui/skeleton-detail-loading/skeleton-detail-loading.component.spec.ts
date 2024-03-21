import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonDetailLoadingComponent } from './skeleton-detail-loading.component';

describe('SkeletonDetailLoadingComponent', () => {
  let component: SkeletonDetailLoadingComponent;
  let fixture: ComponentFixture<SkeletonDetailLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonDetailLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonDetailLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
