import React,{Component} from 'react';
import StarComponent from '../StarComponent/StarComponent';
import {Wrapper,Folded,Header,ImageWrapper,Banner,InfoWrapper,Infomartion,Heading,Detail,LeftDiv,Print,RightButton,IngredientsWrapper,Ingredients,IngredientsContent,ListWrapper,Lists,CheckBox,LabelList,BasicContent} from './CheckOutStyle';
import {DirectionsWrapper,DirectionsContent,Directions,Box,DirectionList} from './CheckOutStyle';
import{Title,Ratings,Reviews} from './CheckOutStyle';
import AuthorBox from '../AuthorComponent/AuthorBox';
class CheckOut extends Component {
    state ={
        cards: [
            { id: '0', imgUrl: require('../../assests/images/recipeThumb-01.jpg'), ratings: 5,servings: 5, prepTime: '30 mins', author: 'SANDRA FORTIN',recipe: 'Mexican Grilled Corn Recipe'},
            { id: '1', imgUrl: require('../../assests/images/recipeThumb-02.jpg'), ratings: 4,servings: 4, prepTime: '1 Hr 30 mins', author: 'BY SANDRA FORTIN',recipe: 'Chocolate Cake With Green Tea' },
            { id: '2', imgUrl: require('../../assests/images/recipeThumb-03.jpg'), ratings: 5,servings: 5, prepTime: '45 mins', author: 'BY SANDRA FORTIN',recipe: 'Thai Yellow Curry Chicken' },
            { id: '3', imgUrl: require('../../assests/images/recipeThumb-04.jpg'), ratings: 4,servings: 4,prepTime: '15 mins', author: 'BY SANDRA FORTIN',recipe: 'Avocado Melon Salad With Lime Vinaigrette'},
            { id: '4', imgUrl: require('../../assests/images/recipeThumb-05.jpg'), ratings: 5,servings: 5,prepTime: '45 mins', author: 'BY SANDRA FORTIN',recipe: 'Sweet Chilli And Lime Chicken Wings'},
            { id: '5', imgUrl: require('../../assests/images/recipeThumb-06.jpg'), ratings: 4,servings: 4, prepTime: '30 mins', author: 'BY SANDRA FORTIN',recipe: 'Pollo Borracho With Homemade Tortillas'},
            { id: '6', imgUrl: require('../../assests/images/recipeThumb-07.jpg'), ratings: 5,servings: 5, prepTime: '1 Hr 20 mins', author: 'BY SANDRA FORTIN',recipe: 'Roast Chicken With Lemon Gravy'},
            { id: '7', imgUrl: require('../../assests/images/sliderA_01.jpg'), ratings: 5,servings: 5, prepTime: '2 Hr 30 mins', author: 'BY SANDRA FORTIN',recipe: 'Chunky Beef Stew',cooking : '2 hours',Calories : '632 Kcal'},
            { id: '8', imgUrl: require('../../assests/images/recipeThumb-09.jpg'), ratings: 4,servings: 4, prepTime: '1 Hr 30 mins', author: 'BY SANDRA FORTIN',recipe: 'Farmhouse Vegetable And Barely Soup'}

        ],
        ingredients : [
            {id : '0' ,items : '2 pounds cubed beef stew meat'},
            {id : '1' ,items :'3 tablespoons vegetable oil'},
            {id : '2' ,items :'4 cubes beef bouillon, crumbled'},
            {id : '3' ,items :'1 large onion, chopped'},
            {id : '4' ,items :'1 teaspoon dried rosemary'},
            {id : '5' ,items :'1/2 teaspoon ground black pepper'},
            {id : '6' ,items :'3 large potatoes, peeled and cubed'},
            {id : '7' ,items :'4 carrots, cut into 1 inch pieces'},
            {id : '8' ,items :'4 stalks celery, cut into 1 inch pieces'}
        ],

        directions : [
            {id : '1' , use : 'In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.'},
            {id : '2' , use : 'In the fat remaining in the pot, cook the onions until softened, about 5 minutes.'},
            {id : '3' , use : 'Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.'},
            {id : '4' , use : 'Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.'}
        ],
        // checked : false
        checked : [false,false,false,false,false,false,false,false,false]
    }

    handleCheck = (id) =>
    {
        let newChecked = this.state.checked
        newChecked[id] = !newChecked[id]
        this.setState ({
            checked : newChecked
        })
    }

    render()
    {
        return(
            <Wrapper>
                <Folded>
                </Folded>
                <div>
                    <Header>
                        <Title>{this.state.cards[7].recipe}</Title>
                        <div>
                            <Ratings><StarComponent starValue = {this.state.cards[7].ratings}/></Ratings>
                            <Reviews>({this.state.cards[7].ratings}  reviews)</Reviews>
                        </div>
                    </Header>
                    <ImageWrapper>
                        <img src = {this.state.cards[7].imgUrl} alt = "image" style = {{width : '100%',height : '100%'}} />
                    </ImageWrapper>
                    <InfoWrapper>
                        <LeftDiv>
                        <Infomartion>
                            <Heading>serves :</Heading>
                            <Detail>{this.state.cards[7].servings} people</Detail>
                        </Infomartion>
                        <Infomartion>
                            <Heading>Prep Time :</Heading>
                            <Detail>{this.state.cards[7].prepTime}</Detail>
                        </Infomartion>
                        <Infomartion>
                            <Heading>Cooking :</Heading>
                            <Detail>{this.state.cards[7].cooking}</Detail>
                        </Infomartion>
                        <Infomartion style ={{borderRight : 'none ! important'}}>
                            <Heading>Calories :</Heading>
                            <Detail>{this.state.cards[7].Calories}</Detail>
                        </Infomartion>
                        </LeftDiv>
                        <RightButton>
                            <Print>print</Print>
                        </RightButton>
                    </InfoWrapper>
                </div>
                <BasicContent>
                This is a very basic beef stew. It’s easy, delicious and inexpensive to make. While there are hundreds of variations of this traditional recipe, it’s hard to improve on this version’s savory and comforting goodness.
                </BasicContent>

                <IngredientsWrapper>
                    <Ingredients>Ingredients</Ingredients>
                    <IngredientsContent>
                    {/* <label><input type="checkbox" name="car[]" value="ferrari" /> Ferrari</label> */}
                        <ListWrapper>
                            {this.state.ingredients.map(
                                value =>(
                                    <Lists> 
                                        <CheckBox type="checkbox" onChange={() => this.handleCheck(value.id)} name="ingredients" checked={this.state.checked[value.id]} />
                                        <LabelList checked = {this.state.checked[value.id]}> {value.items} </LabelList>
                                    </Lists>
                                )
                            )}
                        </ListWrapper>
                    </IngredientsContent>
                </IngredientsWrapper>
                <DirectionsWrapper>
                    <Directions>Directions</Directions>
                    <DirectionsContent>
                    <div>
                            {this.state.directions.map(
                                value =>(
                                    <div style = {{marginBottom : '20px',display : 'flex'}}> 
                                        {/* <input type="checkbox" name="ingredients" value={value.id} /> */}
                                        <Box>{value.id}</Box>
                                        <DirectionList>{value.use} </DirectionList>
                                    </div>
                                )
                            )}
                        </div>
                    </DirectionsContent>
                </DirectionsWrapper>
                <div>
                    {/* <AuthorBox/> */}
                </div>
            </Wrapper>
        );
    }
    
}
export default CheckOut;