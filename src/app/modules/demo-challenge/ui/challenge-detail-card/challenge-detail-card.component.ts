import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Challenge } from 'src/app/modules/demo-challenge/@models/challengeModel';

@Component({
  selector: 'app-challenge-detail-card',
  templateUrl: './challenge-detail-card.component.html',
  styleUrls: ['./challenge-detail-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class ChallengeDetailCardComponent implements OnInit {

  @Input() challenge!: Challenge;

  constructor() { }

  ngOnInit(): void {
  }

}
