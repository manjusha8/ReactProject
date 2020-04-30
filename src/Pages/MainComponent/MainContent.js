import React, { Component } from "react";
import {
  MainContentWrapper,
  LatestRecipes,
  LeftWrapper,
  RightWrapper,
  SearchWrapper,
  AuthorWrapper,
  Tables,
  CardWrapper,
  Cards,
  BreakThrough,
  Buttons,
  GridButton,
  ListButton,
} from "./MainStyle";
import GridCard from "../GridComponent/GridCard";
import ListCard from "../ListComponent/ListCard";
import SearchBox from "../SearchComponent/SearchBox";
import AuthorBox from "../AuthorComponent/AuthorBox";
import SearchValue from "../NothingFound/SearchValue";

class MainContent extends Component {
  state = {
    cards: [
      {
        id: "0",
        imgUrl: require("../../assests/images/recipeThumb-01.jpg"),
        ratings: 5,
        servings: 5,
        prepTime: "30 mins",
        author: "SANDRA FORTIN",
        recipe: "Mexican Grilled Corn Recipe",
        cooking : '2 hours',
        Calories : '632 Kcal',
        ingredients : [
            '2 pounds cubed beef stew meat',
            '3 tablespoons vegetable oil',
            '4 cubes beef bouillon, crumbled',
            '1 large onion, chopped',
            '1 teaspoon dried rosemary',
            '1/2 teaspoon ground black pepper',
            '3 large potatoes, peeled and cubed',
            '4 carrots, cut into 1 inch pieces',
            '4 stalks celery, cut into 1 inch pieces'
        ],
        directions : [
            'In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.',
            'In the fat remaining in the pot, cook the onions until softened, about 5 minutes.',
            'Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.',
            'Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.'
        ]
      },
      {
        id: "1",
        imgUrl: require("../../assests/images/recipeThumb-02.jpg"),
        ratings: 4,
        servings: 4,
        prepTime: "1 Hr 30 mins",
        author: "BY SANDRA FORTIN",
        recipe: "Chocolate Cake With Green Tea",
        cooking : '2 hours',
        Calories : '632 Kcal',
        ingredients : [
            '2 pounds cubed beef stew meat',
            '3 tablespoons vegetable oil',
            '4 cubes beef bouillon, crumbled',
            '1 large onion, chopped',
            '1 teaspoon dried rosemary',
            '1/2 teaspoon ground black pepper',
            '3 large potatoes, peeled and cubed',
            '4 carrots, cut into 1 inch pieces',
            '4 stalks celery, cut into 1 inch pieces'
        ],
        directions : [
            'In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.',
            'In the fat remaining in the pot, cook the onions until softened, about 5 minutes.',
            'Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.',
            'Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.'
        ]
      },
      {
        id: "2",
        imgUrl: require("../../assests/images/recipeThumb-03.jpg"),
        ratings: 5,
        servings: 5,
        prepTime: "45 mins",
        author: "BY SANDRA FORTIN",
        recipe: "Thai Yellow Curry Chicken",
        cooking : '2 hours',
        Calories : '632 Kcal',
        ingredients : [
            '2 pounds cubed beef stew meat',
            '3 tablespoons vegetable oil',
            '4 cubes beef bouillon, crumbled',
            '1 large onion, chopped',
            '1 teaspoon dried rosemary',
            '1/2 teaspoon ground black pepper',
            '3 large potatoes, peeled and cubed',
            '4 carrots, cut into 1 inch pieces',
            '4 stalks celery, cut into 1 inch pieces'
        ],
        directions : [
            'In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.',
            'In the fat remaining in the pot, cook the onions until softened, about 5 minutes.',
            'Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.',
            'Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.'
        ]
      },
      {
        id: "3",
        imgUrl: require("../../assests/images/recipeThumb-04.jpg"),
        ratings: 4,
        servings: 4,
        prepTime: "15 mins",
        author: "BY SANDRA FORTIN",
        recipe: "Avocado Melon Salad With Lime Vinaigrette",
        cooking : '2 hours',
        Calories : '632 Kcal',
        ingredients : [
            '2 pounds cubed beef stew meat',
            '3 tablespoons vegetable oil',
            '4 cubes beef bouillon, crumbled',
            '1 large onion, chopped',
            '1 teaspoon dried rosemary',
            '1/2 teaspoon ground black pepper',
            '3 large potatoes, peeled and cubed',
            '4 carrots, cut into 1 inch pieces',
            '4 stalks celery, cut into 1 inch pieces'
        ],
        directions : [
            'In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.',
            'In the fat remaining in the pot, cook the onions until softened, about 5 minutes.',
            'Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.',
            'Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.'
        ]
      },
      {
        id: "4",
        imgUrl: require("../../assests/images/recipeThumb-05.jpg"),
        ratings: 5,
        servings: 5,
        prepTime: "45 mins",
        author: "BY SANDRA FORTIN",
        recipe: "Sweet Chilli And Lime Chicken Wings",
        cooking : '2 hours',
        Calories : '632 Kcal',
        ingredients : [
            '2 pounds cubed beef stew meat',
            '3 tablespoons vegetable oil',
            '4 cubes beef bouillon, crumbled',
            '1 large onion, chopped',
            '1 teaspoon dried rosemary',
            '1/2 teaspoon ground black pepper',
            '3 large potatoes, peeled and cubed',
            '4 carrots, cut into 1 inch pieces',
            '4 stalks celery, cut into 1 inch pieces'
        ],
        directions : [
            'In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.',
            'In the fat remaining in the pot, cook the onions until softened, about 5 minutes.',
            'Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.',
            'Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.'
        ]
      },
      {
        id: "5",
        imgUrl: require("../../assests/images/recipeThumb-06.jpg"),
        ratings: 4,
        servings: 4,
        prepTime: "30 mins",
        author: "BY SANDRA FORTIN",
        recipe: "Pollo Borracho With Homemade Tortillas",
        cooking : '2 hours',
        Calories : '632 Kcal',
        ingredients : [
            '2 pounds cubed beef stew meat',
            '3 tablespoons vegetable oil',
            '4 cubes beef bouillon, crumbled',
            '1 large onion, chopped',
            '1 teaspoon dried rosemary',
            '1/2 teaspoon ground black pepper',
            '3 large potatoes, peeled and cubed',
            '4 carrots, cut into 1 inch pieces',
            '4 stalks celery, cut into 1 inch pieces'
        ],
        directions : [
            'In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.',
            'In the fat remaining in the pot, cook the onions until softened, about 5 minutes.',
            'Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.',
            'Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.'
        ]
      },
      {
        id: "6",
        imgUrl: require("../../assests/images/recipeThumb-07.jpg"),
        ratings: 5,
        servings: 5,
        prepTime: "1 Hr 20 mins",
        author: "BY SANDRA FORTIN",
        recipe: "Roast Chicken With Lemon Gravy",
        cooking : '2 hours',
        Calories : '632 Kcal',
        ingredients : [
            '2 pounds cubed beef stew meat',
            '3 tablespoons vegetable oil',
            '4 cubes beef bouillon, crumbled',
            '1 large onion, chopped',
            '1 teaspoon dried rosemary',
            '1/2 teaspoon ground black pepper',
            '3 large potatoes, peeled and cubed',
            '4 carrots, cut into 1 inch pieces',
            '4 stalks celery, cut into 1 inch pieces'
        ],
        directions : [
            'In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.',
            'In the fat remaining in the pot, cook the onions until softened, about 5 minutes.',
            'Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.',
            'Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.'
        ]
      },
      {
        id: "7",
        imgUrl: require("../../assests/images/recipeThumb-08.jpg"),
        ratings: 5,
        servings: 5,
        prepTime: "2 Hr 30 mins",
        author: "BY SANDRA FORTIN",
        recipe: "Chunky Beef Stew",
        cooking : '2 hours',
        Calories : '632 Kcal',
        ingredients : [
            '2 pounds cubed beef stew meat',
            '3 tablespoons vegetable oil',
            '4 cubes beef bouillon, crumbled',
            '1 large onion, chopped',
            '1 teaspoon dried rosemary',
            '1/2 teaspoon ground black pepper',
            '3 large potatoes, peeled and cubed',
            '4 carrots, cut into 1 inch pieces',
            '4 stalks celery, cut into 1 inch pieces'
        ],
        directions : [
            'In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.',
            'In the fat remaining in the pot, cook the onions until softened, about 5 minutes.',
            'Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.',
            'Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.'
        ]
      },
      {
        id: "8",
        imgUrl: require("../../assests/images/recipeThumb-09.jpg"),
        ratings: 4,
        servings: 4,
        prepTime: "1 Hr 30 mins",
        author: "BY SANDRA FORTIN",
        recipe: "Farmhouse Vegetable And Barely Soup",
        cooking : '2 hours',
        Calories : '632 Kcal',
        ingredients : [
            '2 pounds cubed beef stew meat',
            '3 tablespoons vegetable oil',
            '4 cubes beef bouillon, crumbled',
            '1 large onion, chopped',
            '1 teaspoon dried rosemary',
            '1/2 teaspoon ground black pepper',
            '3 large potatoes, peeled and cubed',
            '4 carrots, cut into 1 inch pieces',
            '4 stalks celery, cut into 1 inch pieces'
        ],
        directions : [
            'In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.',
            'In the fat remaining in the pot, cook the onions until softened, about 5 minutes.',
            'Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.',
            'Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.'
        ]
      },
    ],
    hover: false,
    grid: true,
    list: false,
    input : '',
    available: false,
    input: '',
    availableCards: []
  };

  onHover = () => this.setState({ hover: true });

  listHandler = () =>
    this.setState({
      list: !this.state.list,
      grid: !this.state.grid,
    });

  gridHandler = () =>
    this.setState({
      grid: !this.state.grid,
      list: !this.state.list,
    });

    handleInputChange = (event) =>{
      
      let input= event.target.value
      this.setState({
        input: input
      })
        console.log("input: ",input)
        // if(input!== null)
        // {
        //   this.state.cards.map(value => {
        //     if(value.recipe.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
        //     {
        //       this.setState({
        //         cards: value
        //       })
        //       console.log("the available card recipes : ",value)
        //     }
        //   })
        
        // }
        // else {
        //   console.log("should display list and grid cards")
        //   this.setState({
        //     available : false
        //   })
        //   console.log("available list and grid cards:",this.state.available)
        // }
      
  }

  

  render() {
    return (
      <div>
        <MainContentWrapper>
          <LeftWrapper>
            <Tables>
              <LatestRecipes>Latest Recipes </LatestRecipes>
              <span style={{ width: "515px", display: "inline-block" }}>
                <BreakThrough />
              </span>
            </Tables>
            <CardWrapper>
              <Buttons>
                <ListButton onClick={this.listHandler} state={this.state.list}>
                  List
                </ListButton>
                <GridButton onClick={this.gridHandler} state={this.state.grid}>
                  Grid
                </GridButton>
              </Buttons>

              
              <Cards>
                {this.state.list ? <ListCard value={this.state.cards}/> : null}
                {this.state.grid ? <GridCard value={this.state.cards}   input= {this.state.input} /> : null}
              </Cards> 
            
            </CardWrapper>
          </LeftWrapper> 
          
          <RightWrapper>
            <SearchWrapper>
              <SearchBox keyPress= {this.keyPressHandler} changeHandler= {this.handleInputChange} />
            </SearchWrapper>
            <AuthorWrapper>
              <AuthorBox />
            </AuthorWrapper>
          </RightWrapper>
        </MainContentWrapper>
      </div>
    );
  }
}

export default MainContent;
