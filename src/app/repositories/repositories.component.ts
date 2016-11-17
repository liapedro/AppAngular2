import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})

export class RepositoriesComponent implements OnInit {

	repositories : any = [];


  	constructor() { }

  	ngOnInit() {
  		setTimeout(()=>{
	  		this.repositories = [
	  			{name: "Angular code for RC", description: "Proyecto demo de angular 2"},
	  			{name: "Bootstrap", description: "Proyecto demo de bootstrap"},
	  			{name: "PHP Ecommerce", description: "Proyecto demo de php"},
	  			{name: "Ruby code", description: "Proyecto demo de ruby"}
	  		];
  		}, 2000);

  		setTimeout(()=>{
  			this.repositories = [];
  		},5000);
  	}

}
