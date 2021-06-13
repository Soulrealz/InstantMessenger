import { Component, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  
  private _onChange: Function = (value: String) => {};
  private _onTouch: Function = () => {};
  private _disabled: boolean = false;
  private _value: string;
  private _invalid: boolean = false;

  constructor() { }

  clear() {
    this.input.nativeElement.value = null;
    this._onChange(null);
    this._onTouch();
  }

  set invalid(isInvalid: boolean) {
    this._invalid = isInvalid;
  }

  get invalid(): boolean {
    return this._invalid
  }

  set value(value: string) {
    this._value = value;
    this._onChange(value);
    this._onTouch();
  }

  get disabled(): boolean {
    return this._disabled;
  }

  writeValue(value: string): void {
    this.value = value;
  }
  
  registerOnChange(callback: (value: string) => {}): void {
    this._onChange = callback;
  }

  registerOnTouched(callback: () => {}): void {
    this._onTouch = callback;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }
}
