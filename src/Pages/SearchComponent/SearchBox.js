import React , {Component} from 'react';
import {InputBox,Search, SearchIcon} from './SearchStyle';
import { FaSearch } from 'react-icons/fa';

class SearchBox extends Component {
   
    render ()
    {
        return (
            <div style = {{display : 'flex'}}>
                <div>
                <InputBox type = "text" placeholder = "Search For Recipes"  onChange={this.props.changeHandler} value= {this.props.inputValue}/>
                </div>
                <SearchIcon>
                <Search><FaSearch color = 'white' padding = '12px'/></Search>
                </SearchIcon>
                
            </div>
        );
    }
}
export default SearchBox;