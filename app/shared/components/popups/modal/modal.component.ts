import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'saa-modal',
  templateUrl: 'modal.component.html'
})

export class ModalComponent {
    isOpen = false;

    toggleOpenClose() {
        if (!this.isOpen) {
            this.isOpen = true;
        } else {
            this.isOpen = false;
        }
    }

}