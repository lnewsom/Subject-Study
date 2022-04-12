import { Component } from '@angular/core';
import { SubjectService } from './subject.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  subject$ = this.subjectService.subject$;
  replaySubject$ = this.subjectService.replaySubject$;
  behaviorSubject$ = this.subjectService.behaviorSubject$;
  nextValue = '';

  constructor(
    private readonly subjectService: SubjectService,
  ){

  }

  callNext(value: string) {
    this.subjectService.setNextValue(value);
  }
}
