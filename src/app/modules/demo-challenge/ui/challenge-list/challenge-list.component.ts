import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Challenge } from 'src/app/modules/demo-challenge/@models/challengeModel';
import { showStateTrigger } from 'src/app/animations/animations';
import { ChallengeCardComponent } from '../challenge-card/challenge-card.component';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule, ChallengeCardComponent
  ],
  animations: [
    showStateTrigger
  ]
})
export class ChallengeListComponent implements OnInit {

  @Input() challenges!: Challenge[];

  constructor() { }

  ngOnInit(): void {

  }

}
