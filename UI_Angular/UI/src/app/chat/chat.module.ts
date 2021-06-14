import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { ChatSidenavComponent } from './chat-sidenav/chat-sidenav.component';
import { CommonModule } from '@angular/common';
import { InputComponent } from './forms/input/input.component';
import { ChatArticleComponent } from './chat-article/chat-article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { IsSenderPipe } from './message/is-sender.pipe';

@NgModule({
    imports: [ CommonModule, ReactiveFormsModule ],
    exports: [ 
        ChatComponent, 
        ChatSidenavComponent,
        IsSenderPipe
    ],
    declarations: [ 
        ChatComponent, 
        ChatSidenavComponent, 
        InputComponent,
        ChatArticleComponent,
        MessageComponent,
        IsSenderPipe
    ],
    providers: [],
})
export class ChatModule { }
