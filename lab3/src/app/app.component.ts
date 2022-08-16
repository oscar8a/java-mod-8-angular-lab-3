import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the best simple Angular app ever!!';
  disableNewMessage = true;
  newAthlete = {};
  newAthleteName = "";
  newAthleteSport = "";
  activeStatus = "active";
  messages = [
    {
      sender: "Ludovic",
      message: "Latest message from Ludovic"
    },
    {
      sender: "Jessica",
      message: "Latest message from Jessica"
    }
  ];
  listOfAthletes = [
    {
      name: "Bill Russel",
      sport: "NBA Basketball",
      active: false
    },
    {
      name: "Gabriela Sabatini",
      sport: "WTA Tennis",
      active: false
    },
    {
      name: "Simone Biles",
      sport: "Olympic Gymnast",
      active: true
    }
  ]
  
  constructor() {
    console.log("Iniating angular AppCompnent class");
    setTimeout(() => {
      this.disableNewMessage = !this.disableNewMessage;
    }
    , 2000)
  }

  onSendMessage() {
    let message = {
      sender: "Michael",
      message: "New message from Michael"
    }
    this.messages.push(message);
  }

  addAthlete() {
    let newAthlete = {
      name: this.newAthleteName,
      sport: this.newAthleteSport,
      active: this.isActive(this.activeStatus)
    }
    this.listOfAthletes.push(newAthlete);
  }

  isActive(active: string) {
    return active === "active" ? true : false;
  }
}
