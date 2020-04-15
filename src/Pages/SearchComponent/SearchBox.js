import React , {Component} from 'react';
import { FaSearch } from 'react-icons/fa';

class SearchBox extends Component {
    state = {
        input : ''
    }


    handleInputChange = (e) =>{
        this.setState({
            input: e.target.value
          })
        console.log(this.state.input);
    }


    render ()
    {
        return (
            <div style = {{display : 'flex'}}>
                <div>
                <input type = "text" placeholder = "Search For Recipes"  onChange={this.handleInputChange} style = {{display : 'inline-block',padding : '12px 15px'}}/>
                </div>
                <div style = {{backgroundColor : '#8dc63f' , width : '44px',display : 'inline-block',cursor: 'pointer',height: '44px'}}>
                <FaSearch color = 'white'  padding-top = '15px'/>
                </div>
                
            </div>
        );
    }
}
export default SearchBox;