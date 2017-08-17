import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe','This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/800px-Chicken-kathi-roll-recipe.jpg')
  ];


  constructor() { }

  ngOnInit() {
  }

}
