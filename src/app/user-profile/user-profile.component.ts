import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    this.user = this.userProfileService.getUserProfile();
  }
}