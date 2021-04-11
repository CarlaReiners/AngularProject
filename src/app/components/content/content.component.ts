import { Component, OnInit } from '@angular/core';
import { DataSetService } from './../../services/data-set.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  countries;

  constructor(private dataSetService: DataSetService) { }

  ngOnInit(): void {
    this.countries = this.dataSetService.getCountries();
  }
}