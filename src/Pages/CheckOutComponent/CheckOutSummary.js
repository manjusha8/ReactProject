import React, { Component } from 'react';
import sliderA_01 from '../../assests/images/sliderA_01.jpg'
import CheckOut from './CheckOut';
import SearchBox from '../SearchComponent/SearchBox';
import AuthorBox from '../AuthorComponent/AuthorBox';
import { MainWrapper , LeftWrapper ,RightWrapper,AuthorWrapper} from './SummaryStyle';
import HeaderComponent from '../../CommonComponents/HeaderComponent/HeaderComponent';


class CheckOutSummary extends Component
{
    state= {
        data: null
      };
    
      componentDidMount() {
        let result= this.props.location.state;
        if (result=== null || result=== undefined || result=== '') {
          let data= 
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
            }
            this.setState({
              data: data
            })
        }
         else {
          this.setState({
            data: result.data
          });
        }
      }
    render()
    {
        return  this.state.data!== null ?( 
            <div>
                <HeaderComponent />
                <div style = {{maxHeight: '250px',overflow: 'hidden',opacity:'0.5'}}>
                    <img src={sliderA_01} alt = "checkout card" style={{zIndex : '-1',height:'100%',width:'100%'}} />
                </div>
                <MainWrapper>
                <LeftWrapper>
                    <CheckOut data= {this.state.data}/>
              </LeftWrapper>

              <RightWrapper>
                    <div>
                      <SearchBox/>
                    </div>
                    <AuthorWrapper>
                      <AuthorBox/>
                    </AuthorWrapper>
              </RightWrapper>
            </MainWrapper>
          </div>
        ) : null;
    }
    
}

export default CheckOutSummary;