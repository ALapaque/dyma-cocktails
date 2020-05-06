import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Cocktail } from 'src/app/shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {
  public cocktailForm: FormGroup;
  public cocktail: Cocktail;

  constructor(
    private _formBuilderService: FormBuilder,
    private _cocktailService: CocktailService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      if (params.index) {
        this.cocktail = this._cocktailService.getCocktail(params.index);
        this.initForm(this.cocktail);
      } else {
        this.initForm();
      }
    })    
  }

  getFormGroup(formGroupName: string): FormGroup {
    return <FormGroup>this.cocktailForm.get(formGroupName);
  }

  initForm(cocktail: Cocktail = {name: '', img: '', description: '', ingredients: []}) {
    this.cocktailForm = this._formBuilderService.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      description: [cocktail.description],
      ingredients: this._formBuilderService.array(cocktail.ingredients.map(ingredient => this._formBuilderService.group({ name: [ingredient.name], quantity: [ingredient.quantity]})))
    })
  }
  
  addIngredient(): void {
    (<FormArray>this.cocktailForm.get('ingredients')).push(this._formBuilderService.group({
      name: [''],
      quantity: ['']
    }))
  }
  
  createCocktail(): void {
    console.log(this.cocktailForm);
    this._cocktailService.addCocktail(this.cocktailForm.value);
  }

}
