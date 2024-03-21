import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, delay } from 'rxjs';
import { Challenge } from '../../@models/challengeModel';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  private baseURL = "http://localhost:3000/challenge";

  constructor(private http: HttpClient) { }

  challenges$: Observable<Challenge[]> = this.http.get<Challenge[]>(this.baseURL).pipe(
    shareReplay(1),
  )

  getChallengeById(id: number): Observable<Challenge> {
    return this.http.get<Challenge>(`${this.baseURL}/${id}`)
  }

}
