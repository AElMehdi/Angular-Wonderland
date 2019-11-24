import { Component, OnInit, ViewChild } from '@angular/core';
import { TextSelectEvent } from '../../directive/text-selection.directive';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface SelectionContainer {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface IngredientGroup {
  letter: string;
  names: string[];
}

export const aFilter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};


@Component({
  selector: 'app-text-highlighting',
  templateUrl: './text-selection.component.html',
  styleUrls: ['./text-selection.component.css']
})

export class TextSelectionComponent implements OnInit {

  ingredientForm: FormGroup = this.aFormBuilder.group({
    ingredientGroup: '',
  });


  ingredients: IngredientGroup[] = [{
    letter: 'A',
    names: ['Apricot']
  }, {
    letter: 'O',
    names: ['olive oil', 'onions']
  }, {
    letter: 'G',
    names: ['garlic']
  }, {
    letter: 'C',
    names: ['carrots', 'coriander', 'cinnamon', 'chickpeas']
  }, {
    letter: 'P',
    names: ['potato russet ', 'potato sweet', 'parsley leaves']
  }, {
    letter: 'S',
    names: ['Salt']
  }, {
    letter: 'H',
    names: ['Harissa']
  }, {
    letter: 'T',
    names: ['turmeric', 'tomatoes']
  }, {
    letter: 'L',
    names: ['Lemon']
  }];

  ingredientsGroupOptions: Observable<IngredientGroup[]>;


  @ViewChild('sideNav') sideNav;
  private hostRectangle: SelectionContainer;
  private selectedText: string;

  constructor(private aFormBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.ingredientsGroupOptions = this.ingredientForm.get('ingredientGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  private _filterGroup(value: string): IngredientGroup[] {
    if (value) {
      return this.ingredients
        .map(group => ({letter: group.letter, names: aFilter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.ingredients;
  }

  toggleSideNav() {
    console.log('toggle side nav');
    this.sideNav.toggle();
  }

  showActionsContainer(event: TextSelectEvent) {
    // console.log('I am working too?', event.text);
    // console.group('Text Select Event');
    // console.log('Text:', event.text);
    // console.log('Viewport Rectangle:', event.viewportRectangle);
    // console.log('Host Rectangle:', event.hostRectangle);
    // console.groupEnd();

    console.log('I am working too?', event.hostRectangle);

    if (event.hostRectangle) {
      this.hostRectangle = event.hostRectangle;
      this.selectedText = event.text;
    } else {
      this.hostRectangle = null;
      this.selectedText = '';
    }
  }
}
