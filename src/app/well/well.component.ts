import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit, OnChanges {

  wellDetailsForm!: FormGroup;
  @Input()
  currentKey!: number;
  @Output() newWellData = new EventEmitter<string>();
  showForm = false;

  constructor(
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.formsInit();
  }

  formsInit() {
    this.wellDetailsForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],

      key: [
        { value: '', disabled: true },
        [Validators.required],
      ],
    })
  }

  submitData():void{
    if (this.wellDetailsForm.valid) {
      this.wellDetailsForm.value.key = this.currentKey;

      this.newWellData.emit(this.wellDetailsForm.value)
    }else {
      alert('Please enter all the fieds')
      const keysSignIn = Object.keys(this.wellDetailsForm.value);
      keysSignIn.forEach((val) => {
        const ctrl = this.wellDetailsForm.controls[val];
        if (!ctrl.valid) {
          ctrl.markAsTouched();
        }
      });
    }
  }
  ngOnChanges(): void {
    if (this.currentKey) {
      this.wellDetailsForm.patchValue({
        key: this.currentKey
      })
      this.showForm = true;
    }
  }
}
