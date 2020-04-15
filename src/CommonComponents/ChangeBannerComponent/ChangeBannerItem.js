import React , {Component} from 'react';
import BannerImage from '../BannerImageComponent/BannerImage';
import BannerButtons from '../ReceipeButtons/BannerButtons';

class ChangeBannerItem extends Component{
    state = {

        recipeItem: [
            { id: '0', recipe: 'Mexican Grilled Corn Recipe' },
            { id: '1', recipe: 'Roast Chicken With Lemon Gravy' },
            { id: '2', recipe: 'Avocado Melon Salad With Lime Vinaigrette' },
            { id: '3', recipe: 'Chunky Beef Stew' },
        ],
        bannerItem: [
            { id: '0', imgUrl: require('../../assests/images/sliderA_01.jpg'), 
            title: 'BAKING', servings: 4, prepTime: '30 mins', author: 'BY SANDRA FORTIN',recipe: 'Mexican Grilled Corn Recipe'},
            { id: '1', imgUrl: require('../../assests/images/sliderA_02.jpg'), 
            title: 'CURRY', servings: 4, prepTime: '1 Hr 30 mins', author: 'BY SANDRA FORTIN',recipe: 'Roast Chicken With Lemon Gravy' },
            { id: '2', imgUrl: require('../../assests/images/sliderA_03.jpg'), 
            title: 'SALADS', servings: 2, prepTime: '15 mins', author: 'BY SANDRA FORTIN',recipe: 'Avocado Melon Salad With Lime Vinaigrette' },
            { id: '3', imgUrl: require('../../assests/images/sliderA_04.jpg'), 
            title: 'BEEF', servings: 1, prepTime: '2 Hr 30 mins', author: 'BY SANDRA FORTIN',recipe: 'Chunky Beef Stew'},
        ],
        selectedBanneritem :{
            id: '0', imgUrl: require('../../assests/images/sliderA_01.jpg'), title: 'BAKING', servings: 4, prepTime: '30 mins', author: 'BY SANDRA FORTIN' ,recipe: 'Mexican Grilled Corn Recipe'
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
            prepTime: this.state.bannerItem[id].prepTime,
            servings: this.state.bannerItem[id].servings,
            author: this.state.bannerItem[id].author,
            recipe : this.state.bannerItem[id].recipe
          },
          activestate: oldState,
        });
      };



    render()
    {
        return(
            <div>
                <BannerImage selectedBannerItem = {this.state.selectedBanneritem}/>
                <BannerButtons recipeItem={this.state.recipeItem}
                 clicked = {this.clickHandler} color = {this.state.activeColor} active = {this.state.activestate}/>
            </div>

        );
    }
}
export default ChangeBannerItem;