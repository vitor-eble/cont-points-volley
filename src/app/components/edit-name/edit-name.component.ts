import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { EditNameService} from '../../services/edit-name.service';

@Component({
  selector: 'app-edit-name',
  standalone: false,
  templateUrl: './edit-name.component.html',
  styleUrl: './edit-name.component.css'
})
export class EditNameComponent implements OnInit, OnChanges {

  @Input() team!: 'team01' | 'team02';
  teamName: string = '';

  nameTeam01: string = 'time 1';
  nameTeam02: string = 'time 2';

  constructor(private editNameService: EditNameService) { }

  ngOnInit() {
    if (this.team === 'team01') {
      this.teamName = this.editNameService.nameTeam01;
    } else if (this.team === 'team02') {
      this.teamName = this.editNameService.nameTeam02;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.team === 'team01') {
      this.teamName = this.editNameService.nameTeam01;
    } else if (this.team === 'team02') {
      this.teamName = this.editNameService.nameTeam02;
    }
  }

  get showEditNameTeam01() {
    return this.editNameService.editNameTeam01
  }

  get showEditNameTeam02() {
    return this.editNameService.editNameTeam02
  }

  saveName(team: 'team01'| 'team02'){
    if(team === 'team01'){
      this.editNameService.nameTeam01 = this.teamName
      this.editNameService.editNameTeam01 = false;
    }
    if(team === 'team02'){
      this.editNameService.nameTeam02 = this.teamName
      this.editNameService.editNameTeam02 = false;
    }
    this.editNameService.saveName(this.team, this.teamName);
  }
}
