import { Component, OnInit } from '@angular/core';
import { Table } from "src/app/table";
import { TableServiceService } from "src/app/table-service.service";

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  tables:Table[];
  constructor(private tableService:TableServiceService) { }

  ngOnInit(): void {
    this.tableService.findAll().subscribe(data => {this.tables = data;
  }
    );
}
}
