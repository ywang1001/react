import React, {Component} from 'react';

class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
           country: "",
           countrys: [],
           selectcountry: ""
        }
    }

    handleCountry = (e) => {
        this.setState({country: e.target.value})
    }

    handleAdd = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            countrys: [...this.state.countrys, this.state.country]
        }, () => {
            this.setState({country: ""})
        })
    }

    handleSelect = (e) => {
        this.setState({selectcountry: e.target.value});
    }

    render(){
        console.log(this.state.country, this.state.countrys);
        return(
            <div>
                <h1>{this.state.selectcountry}</h1>
                <div className = 'addCountry'>
                     <form onSubmit = {this.handleAdd}>
                         <label>
                             <input type = "text"
                                    onChange = {this.handleCountry}
                                    value = {this.state.country}/>
                         </label>

                         <label>
                             <input type = 'submit' value = 'Add'/>
                         </label>
                     </form>
                </div>
                <div className = 'countryBox'>
                      <select onChange = {this.handleSelect}>
                         {
                             this.state.countrys.map((country, index) => {
                                 return(
                                     <option key = {index}>{country}</option>
                                 )
                             })
                         }
                      </select>
                </div>
            </div>
        )
    }
}

export default Country;