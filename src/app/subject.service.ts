import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private readonly subject = new Subject<string>();
  private readonly replaySubject = new ReplaySubject<string>(1);
  private readonly behaviorSubject = new BehaviorSubject<string>(
    'initial value'
  );

  // Values are initialized when the service is constructed. 
  // constructor(){
  //   this.subject.next('service constructor');
  //   this.replaySubject.next('service constructor');
  //   this.behaviorSubject.next('service constructor');
  // }

  subject$ = this.subject.asObservable();
  replaySubject$ = this.replaySubject.asObservable();
  behaviorSubject$ = this.behaviorSubject.asObservable();

  setNextValue(value: string) {
    this.subject.next(value);
    this.replaySubject.next(value);
    this.behaviorSubject.next(value);
  }
}
