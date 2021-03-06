import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from './repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})


export class RepositoriesComponent implements OnInit {

	repositories : any = [];

	repository : IRepository = {name:"",description:""};
	newRepository : IRepository = {name:"", description:""};

  	constructor(private repoService : RepositoriesService) { }

  	ngOnInit() {

  		//this.repository = {name: "Angular code for RC", description: "Proyecto demo de angular 2"};
  		
  		/*setTimeout(()=>{
	  		this.repositories = [
	  			{name: "Angular code for RC", description: "Proyecto demo de angular 2"},
	  			{name: "Bootstrap", description: "Proyecto demo de bootstrap"},
	  			{name: "PHP Ecommerce", description: "Proyecto demo de php"},
	  			{name: "Ruby code", description: "Proyecto demo de ruby"}
	  		];*/

	  		//Esta informacion se mostrara directamente en la caja de texto del formulario con el nombre "name"
	  		//this.newRepository.name = "Hola desde la funcionalidad";
  		//}, 2000);

      this.repoService.getRepos().subscribe((data) => {
        this.repositories = data.json();

        this.repository = this.repositories[0];
      })
  	}

  	setMainRepository(repository){
  		this.repository = repository;
  	}
  	addNewRepo(){
  		//Agrega al inicio de la lista de los repositorios
  		//unshift coloca el elemento al principio de un arreglo.
  		this.repositories.unshift(this.newRepository);

  		this.newRepository = {name:"", description:""};
  	}
}

interface IRepository{
	name : String;
	description : String;
}