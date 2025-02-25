import { Component } from '@angular/core';

import { EditNameService} from '../../services/edit-name.service';

@Component({
  selector: 'app-edit-name',
  standalone: false,
  templateUrl: './edit-name.component.html',
  styleUrl: './edit-name.component.css'
})
export class EditNameComponent {

  nameTeam01: string = 'Team 1';

  constructor(private editNameService: EditNameService) { }

  get showEditNameTeam01() {
    return this.editNameService.editNameTeam01
  }

  get showEditNameTeam02() {
    return this.editNameService.editNameTeam02
  }

  saveName(team: 'team01'| 'team02'){
    if(team === 'team01'){
      this.editNameService.editNameTeam01 = false;
    }
    if(team === 'team02'){
      this.editNameService.editNameTeam02 = false;
    }
  }
}
