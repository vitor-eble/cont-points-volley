import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditNameService {

  constructor() { }

  editName: boolean = false;
  editNameTeam01: boolean = false;
  editNameTeam02: boolean = false;


  showEditName(team: 'team01' | 'team02') {
    this.editName = true;
    if(team === 'team01'){
      this.editNameTeam01 = true
    }
    if(team === 'team02'){
      this.editNameTeam02 = true
    }
  }
}
