import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GridCard from './GridCard';
import StarComponent from '../StarComponent/StarComponent';

configure({adapter: new Adapter()})

describe( '<StarComponent/>', ()=> {
    it('should retuen the ratings in cards : <StarComponent/>', ()=> {
        const wrapper= shallow(<GridCard value= {[]} tempValue= {[]} />)
        expect(wrapper.find(StarComponent)).toHaveLength(0);
    });
});

describe( '<StarComponent/>', ()=> {
    let card= [
        {
            "Calories": "632 Kcal",
            "author": "SANDRA FORTIN",
            "cooking": "2 hours",
            "directions": [
              "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
              "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
              "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
              "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender."
            ],
            "id": "0",
            "ingredients": [
              "2 pounds cubed beef stew meat",
              "3 tablespoons vegetable oil",
              "4 cubes beef bouillon, crumbled",
              "1 large onion, chopped",
              "1 teaspoon dried rosemary",
              "1/2 teaspoon ground black pepper",
              "3 large potatoes, peeled and cubed",
              "4 carrots, cut into 1 inch pieces",
              "4 stalks celery, cut into 1 inch pieces"
            ],
            "prepTime": "30 mins",
            "ratings": 5,
            "recipe": "Mexican Grilled Corn Recipe",
            "servings": 5
          }
    ]
    it('should retuen the ratings in cards : <StarComponent/>', ()=> {
        const wrapper= shallow(<GridCard value= {card} tempValue= {[]} />)
        expect(wrapper.find(StarComponent)).toHaveLength(0);
    });
});