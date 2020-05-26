import React, { Component } from "react";
import BannerImage from "../BannerImageComponent/BannerImage";
import BannerButtons from "../ReceipeButtons/BannerButtons";
import MainContent from "../../Pages/MainComponent/MainContent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

class ChangeBannerItem extends Component {
  state = {
    recipeItem: [
      { id: "0", recipe: "Mexican Grilled Corn Recipe" },
      { id: "1", recipe: "Roast Chicken With Lemon Gravy" },
      { id: "2", recipe: "Avocado Melon Salad With Lime Vinaigrette" },
      { id: "3", recipe: "Chunky Beef Stew" },
    ],
    bannerItem: [
      {
        id: "0",
        imgUrl: require("../../assests/images/sliderA_01.jpg"),
        title: "BAKING",
        ratings: 5,
        servings: 4,
        prepTime: "30 mins",
        author: "BY SANDRA FORTIN",
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
        imgUrl: require("../../assests/images/sliderA_02.jpg"),
        title: "CURRY",
        ratings: 4,
        servings: 4,
        prepTime: "1 Hr 30 mins",
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
        id: "2",
        imgUrl: require("../../assests/images/sliderA_03.jpg"),
        title: "SALADS",
        ratings: 3,
        servings: 2,
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
        id: "3",
        imgUrl: require("../../assests/images/sliderA_04.jpg"),
        title: "BEEF",
        ratings: 4,
        servings: 1,
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
    ],
    selectedBanneritem: {
      id: "0",
      imgUrl: require("../../assests/images/sliderA_01.jpg"),
      title: "BAKING",
      ratings: 5,
      servings: 4,
      prepTime: "30 mins",
      author: "BY SANDRA FORTIN",
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

    activestate: [true, false, false, false],
  };
  
  clickHandler = (id) => {
    let oldState = [...this.state.activestate];
    const index = oldState.findIndex((oldState) => oldState === true);
    oldState[index] = !oldState[index];
    oldState[id] = true;
    console.log(oldState);
    this.setState({
      selectedBanneritem: {
        id: this.state.bannerItem[id].id,
        imgUrl: this.state.bannerItem[id].imgUrl,
        title: this.state.bannerItem[id].title,
        ratings: this.state.bannerItem[id].ratings,
        prepTime: this.state.bannerItem[id].prepTime,
        servings: this.state.bannerItem[id].servings,
        author: this.state.bannerItem[id].author,
        recipe: this.state.bannerItem[id].recipe,
        cooking : this.state.bannerItem[id].cooking,
        Calories : this.state.bannerItem[id].Calories,
        ingredients : this.state.bannerItem[id].ingredients,
        directions : this.state.bannerItem[id].directions
      },
      activestate: oldState,
    });
  };


  render() {
    return (
      <div>
        <HeaderComponent/>
        <div>
          <BannerImage  selectedBannerItem={this.state.selectedBanneritem} />
          <BannerButtons
            recipeItem={this.state.recipeItem}
            clicked={this.clickHandler}
            active={this.state.activestate}
          />
        </div>
        <div>
          <MainContent />
        </div>
      </div>
    );
  }
}
export default ChangeBannerItem;
