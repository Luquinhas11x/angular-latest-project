import { Component, OnInit } from '@angular/core';
import { ChallengeService } from 'src/app/modules/demo-challenge/data-access/challengeService/challenge.service';
import { catchError, combineLatest, delay, EMPTY, ignoreElements, of, startWith, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { showStateTrigger } from 'src/app/animations/animations';
import { ChallengeDetailCardComponent } from '../../ui/challenge-detail-card/challenge-detail-card.component';
import { SkeletonDetailLoadingComponent } from '../../ui/skeleton-detail-loading/skeleton-detail-loading.component';
import { ErrorComponent } from "../../ui/error/error.component";
import { Location } from '@angular/common';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.scss'],
  standalone: true,
  animations: [
    showStateTrigger
  ],
  imports: [
    ChallengeDetailCardComponent,
    SkeletonDetailLoadingComponent,
    CommonModule,
    ErrorComponent
  ]
})
export class ChallengeDetailComponent implements OnInit {

  challengesById$ = this.route.paramMap.pipe(
    switchMap(params => this.challengeService.getChallengeById(+params?.get('id')! || 0))
  )

  challengesError$ = this.challengesById$.pipe(
    ignoreElements(),
    startWith(null),
    catchError(err => of(err))
  )

  vm$ = combineLatest({
    challenges: this.challengesById$.pipe(
      delay(800),
      startWith(null),
      catchError(() => EMPTY)
    ),
    challengesError: this.challengesError$,
  })

  constructor(private challengeService: ChallengeService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
  }

  back() {
    this.location.back()
  }

}
