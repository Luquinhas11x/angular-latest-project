import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/modules/demo-challenge/data-access/categoryService/category.service';
import { ChallengeService } from 'src/app/modules/demo-challenge/data-access/challengeService/challenge.service';
import { catchError, combineLatest, EMPTY, map, startWith, ignoreElements, of, delay, BehaviorSubject } from 'rxjs';
import { ChallengeListComponent } from '../../ui/challenge-list/challenge-list.component';
import { SkeletonLoadingComponent } from '../../ui/skeleton-loading/skeleton-loading.component';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from "../../ui/error/error.component";
import { showStateTrigger } from 'src/app/animations/animations';




@Component({
  selector: 'app-pizza-filter',
  templateUrl: './pizza-filter.component.html',
  styleUrls: ['./pizza-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  animations: [
    showStateTrigger
  ],
  imports: [
    ChallengeListComponent,
    SkeletonLoadingComponent,
    CommonModule,
    ErrorComponent
  ]
})
export class PizzaFilterComponent implements OnInit {

  selectedCategoryActions$ = new BehaviorSubject<string | null>(null);

  challenges$ = combineLatest([
    this.challengeService.challenges$.pipe(
      delay(800),
      startWith(null),
      catchError(() => EMPTY)
    ),
    this.selectedCategoryActions$
  ])
    .pipe(
      map(([challenges, category]) => {
        if (category) {
          return challenges?.filter(challenge => challenge.pizzaCategory.name === category)
        }
        return challenges
      })
    )
    ;

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
    categories: this.categories$,
    challenges: this.challenges$,
    challengesError: this.challengesError$,
    categoriesError: this.categoriesError$
  })

  constructor(private challengeService: ChallengeService, private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  change(category: string) {
    this.selectedCategoryActions$.next(category)
  }
}
