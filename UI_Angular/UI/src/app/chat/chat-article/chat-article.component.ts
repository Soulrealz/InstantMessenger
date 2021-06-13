import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SocketService } from 'src/app/services/socket.service';
import { Message } from 'src/models/message';
import { InputComponent } from '../forms/input/input.component';
import { MessageComponent, MessageSourceType } from '../message/message.component';

@Component({
  selector: 'app-chat-article',
  templateUrl: './chat-article.component.html',
  styleUrls: ['./chat-article.component.scss']
})
export class ChatArticleComponent implements OnInit, OnDestroy {

  @ViewChild('messageContainer', { read: ViewContainerRef }) messageContainer: ViewContainerRef;
  @ViewChild(InputComponent) input: InputComponent;

  readonly USER: string = "Jorkata";
  messageControl: FormControl;

  constructor(private _socketService: SocketService, private _resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.messageControl = new FormControl(null);

    this._socketService.listenFor('load-history').subscribe((messages: Message[]) => {
    });

    this._socketService.listenFor('message-created').subscribe((message: Message) => {
      this.appendMessage({
        content: message.content,
        author: message.author,
        sentAt: message.sentAt
      }, MessageSourceType.Receiver);
    });
  }
  
  ngOnDestroy() {
    this.messageContainer.clear();
  }

  private appendMessage(message: Message, sourceType: MessageSourceType = MessageSourceType.Sender) {
    const factory: ComponentFactory<MessageComponent> = this._resolver.resolveComponentFactory(MessageComponent);
    const componentRef: ComponentRef<MessageComponent> = this.messageContainer.createComponent(factory);
    componentRef.instance.message = message;
    componentRef.instance.sourceType = sourceType;
  }

  onSendMessage(event: Event) {
    event.preventDefault();
    const text = event!.target[0].value;

    this.input.value = text;

    const message: Message = {
      content: text,
      author: this.USER,
      sentAt: Date.now()
    };

    this._socketService.emit('message', message);
    this.appendMessage(message);
    this.messageControl.reset();
  }
}
