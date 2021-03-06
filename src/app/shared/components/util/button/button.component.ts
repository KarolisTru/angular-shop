import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent{

  @Input() text = "";
  @Input() color: 'isPrimary' | 'isDanger' | 'isAction' = 'isPrimary'

}
