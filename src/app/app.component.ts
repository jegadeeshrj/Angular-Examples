import { Component } from '@angular/core';
import { UserStatusCardComponent } from './user-status-card/user-status-card.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UserStatusCardComponent,
    TodoListComponent,
    UserProfileComponent,
    SignupComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task';
}