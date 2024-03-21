import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { catchError, empty, ignoreElements, of, startWith } from 'rxjs';
import { ChallengeService } from '../../data-access/challengeService/challenge.service';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  imports: [
    CommonModule
  ],
  standalone: true
})
export class ErrorComponent implements OnInit {
  @Input() challengeError!: string;

  constructor() { }
  ngOnInit(): void {
  }
}
