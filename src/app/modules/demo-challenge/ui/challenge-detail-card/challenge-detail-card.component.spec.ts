import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeDetailCardComponent } from './challenge-detail-card.component';

describe('ChallengeDetailCardComponent', () => {
  let component: ChallengeDetailCardComponent;
  let fixture: ComponentFixture<ChallengeDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeDetailCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
