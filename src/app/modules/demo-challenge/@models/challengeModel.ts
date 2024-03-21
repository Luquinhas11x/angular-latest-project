import { Comments } from "./commentModel";
import { PizzaCategory } from "./pizzaCategoryModel";

export interface Challenge {
    id: number;
    image: string;
    title: string;
    instructions: string;
    pizzaCategory: PizzaCategory;
    learningObjectives: string;
    acceptanceCriteria: string;
    requiredSkills: string;
    link: string;
    comments: Comments[];
}