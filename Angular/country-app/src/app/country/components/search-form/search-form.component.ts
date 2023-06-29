import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  search: string = '';
  @Input() placeholder: string = 'Buscar país...';
  @Input() initialValue: string = '';
  @Output() onSubmit: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  debouncerSubscription?: Subscription;

  ngOnInit(): void {
    this.search = this.initialValue;
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.onDebounce.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  submitHandler() {
    this.onSubmit.emit(this.search);
  }

  pressKey() {
    this.debouncer.next(this.search);
  }
}
