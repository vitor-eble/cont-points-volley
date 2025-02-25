import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditNameService {

  constructor() { }

  editNameTeam01: boolean = false;
  editNameTeam02: boolean = false;

  nameTeam01: string = 'time 1';
  nameTeam02: string = 'time 2';


  showEditName(team: 'team01' | 'team02') {
    if(team === 'team01'){
      this.editNameTeam01 = true
    }
    if(team === 'team02'){
      this.editNameTeam02 = true
    }
  }

  saveName(team: 'team01' | 'team02', name: string){
    if(team === 'team01'){
      this.editNameTeam01 = false;
      this.nameTeam01 = name;
    }
    if(team === 'team02'){
      this.editNameTeam02 = false;
      this.nameTeam02 = name;
    }

  }

}
