export interface CategoryResults {
  categories: Category[];
}

export interface Category {
  idCategory:             string;
  strCategory:            string;
  strCategoryThumb:       string;
  strCategoryDescription: string;
}

export interface CategoryMapped {
  id: string;
  name: string;
  image: string;
  description: string;
}
