import React, { Component } from "react";
import { Forms, Text, TitleInput, UploadButton } from "./RecipeFormStyle";
import axios from 'axios';

class RecipeForm extends Component {
  state = {
    recipe: "",
    description: "",
    ingredients: "",
    directions: "",
    servings: "",
    prepTime: "",
    calories: "",
    cooking: "",
    ratings: 3,
    author: "SANDRA FORTIN",
  };

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  onSubmitHandler= (event)=> {
      event.preventDefault();
      let recipes= []
      recipes.push({
          recipe: this.state.recipe,
          description: this.state.description,
          servings: this.state.servings,
          prepTime: this.state.prepTime,
          cooking: this.state.cooking,
          directions: this.state.directions,
          author: this.state.author,
          ratings: this.state.ratings,
          calories: this.state.calories
      })
      axios.post("https://react-my-recipe-page.firebaseio.com/.json", recipes)
        .then(response=> {
            console.log("response sent", response)
        })
        .catch(err => 
          console.log("no response from mock: ",err),
          this.props.history.push('*')
          )

    console.log("forms submitted: ", recipes)
  }

  render() {
    return (
      <div>
        <Forms onSubmit= {this.onSubmitHandler}>
          <Text>Recipe</Text>
          <TitleInput
            name="recipe"
            value={this.state.recipe}
            onChange={this.handleChange}
          />
          <Text>Description</Text>
          <TitleInput
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <Text>ingredients</Text>
          <TitleInput
            name="ingredients"
            value={this.state.ingredients}
            onChange={this.handleChange}
          />
          <Text>Directions</Text>
          <TitleInput
            name="directions"
            value={this.state.directions}
            onChange={this.handleChange}
          />
          <Text>servings</Text>
          <TitleInput
            name="servings"
            value={this.state.servings}
            onChange={this.handleChange}
          />
          <Text>Calories</Text>
          <TitleInput
            name="calories"
            value={this.state.calories}
            onChange={this.handleChange}
          />
          <Text>Cooking</Text>
          <TitleInput
            name="cooking"
            value={this.state.cooking}
            onChange={this.handleChange}
          />
          <UploadButton type="submit">Submit Recipe</UploadButton>
        </Forms>
      </div>
    );
  }
}

export default RecipeForm;
