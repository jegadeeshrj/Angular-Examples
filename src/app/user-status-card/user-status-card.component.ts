import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-status-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-status-card.component.html',
  styleUrl: './user-status-card.component.css'
})
export class UserStatusCardComponent {
  user = {
    initials: 'RJ',
    name: 'Jegadeeshwaran',
    role: 'Frontend Dev',
    status: 'Active'
  };

  toggleStatus() {
    this.user.status = this.user.status === 'Active' ? 'Inactive' : 'Active';
  }
}
