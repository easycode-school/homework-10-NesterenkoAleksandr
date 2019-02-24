import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { AuthGlobalService } from 'src/app/services/auth-global.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  /** Пользователь, данные которого просматриваются */
  private user: User;

  /** Текущая вкладка */
  private activeTab = 'selfies';

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params.id;

    this.userService.getUserInfo(id).subscribe((data: User) => {
      console.log(data);
      this.user = data;
    });
  }
}
