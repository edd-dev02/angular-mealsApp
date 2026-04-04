export interface MealDetail {
  meals: { [key: string]: null | string }[];
}

export interface MealDetailModel {
  id: string;
  name: string;
  category: string;
  area: string;
  instructions: string;
  image: string;
  ingredients: {
    name: string;
    measure: string;
  }[];
}
