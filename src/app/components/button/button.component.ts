import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = 'CLICK';
  @Input() backgorundColor: string = 'black';

  constructor() {}
  ngOnInit(): void {}
}
