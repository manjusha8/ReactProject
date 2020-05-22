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
import axios from 'axios';


class MainContent extends Component {
  state = {
    cards: [],
    tempCards: [],
    hover: false,
    grid: true,
    list: false,
    input : '',
    availableCards: [],
    loading: true
  };

  onHover = () => this.setState({ hover: true });

  componentDidMount()
    {
        axios.get('https://react-my-recipe-page.firebaseio.com/.json')
        .then(
          response => 
          this.setState({
            loading: false,
            cards: response.data
          })
        )
        .catch(err => console.log("no response from mock: ",err))
    }

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
      let temp= []
      let available= false

      if (input.length === 0) {
        this.setState({
          tempCards: []
        });
      } else {
        let cards = [...this.state.cards];
        cards.filter(card=> {
          if (card.recipe.toLocaleLowerCase().includes(input.toLowerCase())) {
            available= false
            temp.push(card);
          }
        });
      }

        this.setState({
          tempCards: temp
        })
        console.log("available: ",this.state.available)
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
              {this.state.cards!== null ?

              <Cards>
                {this.state.list ? <ListCard value={this.state.cards} tempValue= {this.state.tempCards}/> : null}
                {this.state.grid ? <GridCard value={this.state.cards} tempValue= {this.state.tempCards}/> : null}
              </Cards> 

              : null }
            </CardWrapper>
          </LeftWrapper> 
          
          <RightWrapper>
            <SearchWrapper>
              <SearchBox changeHandler= {this.handleInputChange} inputValue= {this.state.input}/>
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
