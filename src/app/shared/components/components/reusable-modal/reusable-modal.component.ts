import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reusable-modal',
  templateUrl: './reusable-modal.component.html',
  styleUrls: ['./reusable-modal.component.scss']
})
export class ReusableModalComponent{

  @Output() onModalCloseEvent = new EventEmitter();

  closeModal() {
    this.onModalCloseEvent.emit();
  }
}
