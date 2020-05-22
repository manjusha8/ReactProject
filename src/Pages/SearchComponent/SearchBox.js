import React , {Component} from 'react';
import {InputBox,Search} from './SearchStyle';
import { FaSearch } from 'react-icons/fa';
import NotAvailable from '../NothingFound/NotAvailable';

class SearchBox extends Component {
   


    


    render ()
    {
        return (
            <div style = {{display : 'flex'}}>
                <div>
                <InputBox type = "text" placeholder = "Search For Recipes"  onChange={this.props.changeHandler} value= {this.props.inputValue}/>
                </div>
                <div style = {{backgroundColor : '#8dc63f' , width : '44px',display : 'inline-block',cursor: 'pointer',height: '44px'}}>
                <Search><FaSearch color = 'white' padding = '12px'/></Search>
                </div>
                
            </div>
        );
    }
}
export default SearchBox;