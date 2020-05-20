import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png'),
    new Recipe('Second Recipe', 'This is Second test', 'https://cdn.pixabay.com/photo/2017/04/08/14/37/kitchen-2213422_1280.jpg'),
    new Recipe('Third Recipe', 'This is Third test', 'https://c.pxhere.com/photos/b0/e6/food_snacks_cooking_pork_meat_seasoning_wine_side_dishes_republic_of_korea-1410325.jpg!d')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
