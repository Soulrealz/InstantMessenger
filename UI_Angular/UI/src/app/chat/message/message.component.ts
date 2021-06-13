import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/models/message';

export enum MessageSourceType {
  Sender = 'Sender',
  Receiver = 'Receiver'
};

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input('message') message: Message;
  @Input('sourceType') sourceType: MessageSourceType = MessageSourceType.Sender;

  constructor() { }

  ngOnInit(): void {
  }

}
