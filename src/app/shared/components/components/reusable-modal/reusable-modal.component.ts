import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reusable-modal',
  templateUrl: './reusable-modal.component.html',
  styleUrls: ['./reusable-modal.component.scss']
})
export class ReusableModalComponent{

  @Output() modalClose = new EventEmitter();

  closeModal() {
    this.modalClose.emit();
  }
}
