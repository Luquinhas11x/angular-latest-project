import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/modules/demo-challenge/data-access/categoryService/category.service';
import { ChallengeService } from 'src/app/modules/demo-challenge/data-access/challengeService/challenge.service';
import { BehaviorSubject, catchError, combineLatest, debounceTime, delay, distinctUntilChanged, EMPTY, ignoreElements, map, of, startWith, Subject, timeout } from 'rxjs';
import { showStateTrigger } from 'src/app/animations/animations';
import { Router } from '@angular/router';
import { ChallengeListComponent } from '../../ui/challenge-list/challenge-list.component';
import { SkeletonLoadingComponent } from '../../ui/skeleton-loading/skeleton-loading.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from "../../ui/error/error.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  animations: [
    showStateTrigger
  ],
  imports: [
    ChallengeListComponent,
    SkeletonLoadingComponent,
    CommonModule,
    FormsModule,
    ErrorComponent
  ]
})
export class HomeComponent implements OnInit {

  searchValue = '';

  searchSubject$ = new BehaviorSubject<string | null>(null);

  challenges$ = combineLatest([
    this.challengeService.challenges$.pipe(
      delay(800),
      startWith(null),
      catchError(() => EMPTY)
    ),
    this.searchSubject$.pipe(
      distinctUntilChanged(),
      debounceTime(500)
    )
  ]).pipe(
    map(([challenges, searchedChallenge]) => {
      if (searchedChallenge) {
        challenges = challenges?.filter(challenge => challenge.title.toLowerCase().includes(searchedChallenge.toLowerCase()))!;
      }
      return challenges
    })
  )

  challengesError$ = this.challengeService.challenges$.pipe(
    ignoreElements(),
    startWith(null),
    catchError(err => of(err))
  )

  categoriesError$ = this.categoryService.categories$.pipe(
    ignoreElements(),
    startWith(null),
    catchError(err => of(err))
  )

  categories$ = this.categoryService.categories$.pipe(
    startWith(null),
    catchError(() => EMPTY)
  );

  vm$ = combineLatest({
    challenges: this.challenges$,
    categories: this.categories$,
    challengesError: this.challengesError$,
    categoriesError: this.categoriesError$
  })

  constructor(private challengeService: ChallengeService,
    private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit(): void {

  }

  challengeDetail(id: number) {
    this.router.navigate(['user/pizza', id])
  }

  searchChallenge(name: string) {
    this.searchSubject$.next(name)
  }

}
