import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray,AbstractControl, ValidationErrors, ReactiveFormsModule} from '@angular/forms';
import {CheckDirective} from '../../core/directives/check.directive';
import {AttributeDirective} from '../../core/directives/attribute.directive';
import { CustomPipe } from '../../core/pipes/custom.pipe';
import { ImpurePipe } from '../../core/pipes/impure.pipe';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CheckDirective, AttributeDirective, CustomPipe, ImpurePipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
   form:FormGroup;
   private dataSubscription: Subscription | undefined;
   constructor(private fb:FormBuilder) {
     this.form = this.fb.group({
       name: ['', Validators.required],
       email: ['', Validators.required],
       items: this.fb.array([])
     });
    }
    
    ngOnInit(): void {
      
    }
    ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnChanges', changes);
    }
  
    ngDoCheck(): void {
      console.log('ngDoCheck');
    }
  
    ngAfterContentInit(): void {
      console.log('ngAfterContentInit');
    }
  
    ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked');
    }
  
    ngAfterViewInit(): void {
      console.log('ngAfterViewInit');
    }
  
    ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked');
    }
    ngOnDestroy(): void {
      if (this.dataSubscription) {
        this.dataSubscription.unsubscribe();
      }
      console.log('ngOnDestroy');
    }
    get items(): FormArray {
      return this.form.get('items') as FormArray;
    }
  
    addItem(): void {
      this.items.push(this.fb.control('', Validators.required));
    }
  
    removeItem(index: number): void {
      this.items.removeAt(index);
    }
  
    customValidator(control: AbstractControl): ValidationErrors | null {
      const value = control.value;
      if (value && value.length < 3) {
        return { customError: 'Name must be at least 3 characters long' };
      }
      return null;
    }
    onSubmit(): void {
      if (this.form.valid) {
        console.log('Form Submitted', this.form.value);
      } else {
        console.log('Form is invalid');
      }
    }
}
