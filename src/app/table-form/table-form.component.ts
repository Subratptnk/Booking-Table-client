import { Component, OnInit } from '@angular/core';
import { Table } from "src/app/table";
import { ActivatedRoute, Router } from '@angular/router';
import { TableServiceService } from "src/app/table-service.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit {
  table:Table;
  diningTypeList: string[] = ["Lunch","Dinner","Breakfast","Brunch"];
  
  form = new FormGroup({
    diningType : new FormControl('',Validators.required)
  });

  get f(){
    return this.form.controls;
  }

  constructor( private route: ActivatedRoute, private router: Router, private tableService: TableServiceService) {
        this.table = new Table(); { }
  }
  ngOnInit(): void {
    // alert(JSON.parse(this.form.value))
  }
  onSubmit() {
    // for (let i = 0; i < this.diningTypeList.length; i++) {
    //   if(this.diningTypeList[i].includes("Lunch")){
    //     this.table.diningType = this.diningTypeList[0];
    //     break;
    //   }
    //   if(this.diningTypeList[i].includes("BF")){
    //     this.table.diningType = this.diningTypeList[2];
    //     break;
    //   }
    //   if(this.diningTypeList[i].includes("Dinner")){
    //     this.table.diningType = this.diningTypeList[1];
    //     break;
    //   }
    
    
    console.log(this.form.value)
    var check = JSON.stringify(this.form.value);
    if(check.match("Dinner")){
      this.table.diningType = "Dinner";
    }
    else if(check.match("Lunch")){
      this.table.diningType = "Lunch";
    }
    else if(check.match("Breakfast")){
      this.table.diningType = "Breakfast";
    }
    else if(check.match("Brunch")){
      this.table.diningType = "Brunch";
    }
    //  this.table.diningType = JSON.stringify(this.form.value);
    this.tableService.save(this.table).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/allBooking']);
  }

}
