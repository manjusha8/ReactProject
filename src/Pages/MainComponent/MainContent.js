import React , {Component} from 'react';
import {MainContentWrapper , LatestRecipes,LeftWrapper,RightWrapper,SearchWrapper,AuthorWrapper ,Tables, CardWrapper, Cards,BreakThrough ,Buttons, GridButton , ListButton} from './MainStyle';
import GridCard from '../GridComponent/GridCard';
import ListCard from '../ListComponent/ListCard';
import SearchBox from '../SearchComponent/SearchBox';
import AuthorBox from '../AuthorComponent/AuthorBox';

class MainContent extends Component{
    state ={
        cards: [
            { id: '0', imgUrl: require('../../assests/images/recipeThumb-01.jpg'), ratings: 5,servings: 5, prepTime: '30 mins', author: 'SANDRA FORTIN',recipe: 'Mexican Grilled Corn Recipe'},
            { id: '1', imgUrl: require('../../assests/images/recipeThumb-02.jpg'), ratings: 4,servings: 4, prepTime: '1 Hr 30 mins', author: 'BY SANDRA FORTIN',recipe: 'Chocolate Cake With Green Tea' },
            { id: '2', imgUrl: require('../../assests/images/recipeThumb-03.jpg'), ratings: 5,servings: 5, prepTime: '45 mins', author: 'BY SANDRA FORTIN',recipe: 'Thai Yellow Curry Chicken' },
            { id: '3', imgUrl: require('../../assests/images/recipeThumb-04.jpg'), ratings: 4,servings: 4,prepTime: '15 mins', author: 'BY SANDRA FORTIN',recipe: 'Avocado Melon Salad With Lime Vinaigrette'},
            { id: '4', imgUrl: require('../../assests/images/recipeThumb-05.jpg'), ratings: 5,servings: 5,prepTime: '45 mins', author: 'BY SANDRA FORTIN',recipe: 'Sweet Chilli And Lime Chicken Wings'},
            { id: '5', imgUrl: require('../../assests/images/recipeThumb-06.jpg'), ratings: 4,servings: 4, prepTime: '30 mins', author: 'BY SANDRA FORTIN',recipe: 'Pollo Borracho With Homemade Tortillas'},
            { id: '6', imgUrl: require('../../assests/images/recipeThumb-07.jpg'), ratings: 5,servings: 5, prepTime: '1 Hr 20 mins', author: 'BY SANDRA FORTIN',recipe: 'Roast Chicken With Lemon Gravy'},
            { id: '7', imgUrl: require('../../assests/images/recipeThumb-08.jpg'), ratings: 5,servings: 5, prepTime: '2 Hr 30 mins', author: 'BY SANDRA FORTIN',recipe: 'Chunky Beef Stew'},
            { id: '8', imgUrl: require('../../assests/images/recipeThumb-09.jpg'), ratings: 4,servings: 4, prepTime: '1 Hr 30 mins', author: 'BY SANDRA FORTIN',recipe: 'Farmhouse Vegetable And Barely Soup'}

        ],
        hover : false,
        grid : true,
        list : false
    }


     onHover = () => (
        this.setState({hover : true})
     );

     listHandler = () => (
        this.setState({
            list : !this.state.list,
            grid : !this.state.grid
        })

     );

     gridHandler = () => (
        this.setState({
            grid : !this.state.grid,
            list : !this.state.list
        })

     );

    render ()
    {
        return (
            <div>
                <MainContentWrapper>
                    <LeftWrapper>
                        <Tables>
                            <LatestRecipes>Latest Recipes </LatestRecipes>
                            <span style={{width:'515px' , display: 'inline-block'}}><BreakThrough/></span>
                        </Tables>
                        <CardWrapper>
                            <Buttons>
                                <ListButton onClick = {this.listHandler} state = {this.state.list}>List</ListButton>
                                <GridButton onClick = {this.gridHandler}  state = {this.state.grid}>Grid</GridButton>
                            </Buttons>
                            <Cards>
                                { this.state.list ? <ListCard value = {this.state.cards} /> : null}
                                {this.state.grid ? <GridCard value ={this.state.cards} /> : null}
                            </Cards>
                        </CardWrapper>
                    </LeftWrapper>
                    <RightWrapper>
                        <SearchWrapper>
                            <SearchBox/>
                        </SearchWrapper>
                        <AuthorWrapper>
                            <AuthorBox author = {this.state.cards}/>
                        </AuthorWrapper>
                    </RightWrapper>
                </MainContentWrapper>

            </div>
        );
    }
}

export default MainContent;