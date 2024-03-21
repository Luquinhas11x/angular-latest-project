import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Challenge } from 'src/app/modules/demo-challenge/@models/challengeModel';

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]

})
export class ChallengeCardComponent implements OnInit {

  @Input() challenge!: Challenge;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  challengeDetail(id: number) {
    this.router.navigate(['detail', id])
  }

}
