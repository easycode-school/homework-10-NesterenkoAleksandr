import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  /** Пользователь, данные которого просматриваются */
  private user: User;

  /** Идентификатор пользователя данные которого необходимо отобразить */
  private userId: string;

  /** Текущая вкладка */
  private activeTab = 'selfies';

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userId = this.activeRoute.snapshot.params.id;

    this.userService.getUserInfo(this.userId).subscribe((data: User) => {
      this.user = data;
    });
  }
}
