import { Component } from "@angular/core";
import { UserRequestService } from "./shared/services/user-request.service";
import { Users } from "./shared/models/users.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  localData: { users: Users };
  selectedNumber : number;
  constructor(private myService: UserRequestService) {
    this.localData = this.myService.userData;
  }

  
  selectNumber(event:any){
    this.selectedNumber=event.target.value;
    this.myService.showByPage(this.selectedNumber);
  }

}
