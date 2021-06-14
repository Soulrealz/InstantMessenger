import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './chat-sidenav.component.html',
  styleUrls: ['./chat-sidenav.component.scss']
})
export class ChatSidenavComponent implements OnInit {

  @Input() contentRef: TemplateRef<any>;
  @Input() width: string = '100%';

  constructor() {
  }

  ngOnInit(): void {
  }

  onCollapse() {
  }
}
