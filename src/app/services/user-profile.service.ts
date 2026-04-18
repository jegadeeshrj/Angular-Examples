import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor() { }

  getUserProfile() {
    const users = [
      {
        initials: 'RJ',
        name: 'Jegadeeshwaran',
        role: 'Frontend Developer',
        status: 'Active'
      },
      {
        initials: 'J',
        name: 'Rahul Jain',
        role: 'Backend Developer',
        status: 'Inactive'
      }
    ];

    return users[Math.floor(Math.random() * users.length)];
  }
}