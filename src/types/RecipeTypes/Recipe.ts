export interface recipeType {
  id: number;
  name?: string;
  ingredients?: string[];
  instructions?: string[];
  prepTimeMinutes?: 20;
  cookTimeMinutes?: 15;
  servings?: number;
  difficulty?: string;
  cuisine?: string;
  caloriesPerServing?: number;
  tags?: string[];
  userId?: number;
  image?: string;
  rating?: number;
  reviewCount?: number;
  mealType?: string[] | undefined;
}
export type recipeArr=recipeType[]