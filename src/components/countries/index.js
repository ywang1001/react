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
            countrys: [...new Set([...this.state.countrys, this.state.country])]
        }, () => {
            this.setState({country: ""})
        })
    }

    handleSelect = (e) => {
        this.setState({selectcountry: e.target.value});
    }

    handleBack = (e) => {
        this.props.history.push('/')
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
                <nav className = 'navbar navbar-default' role = 'navigation'>
                    <div className = 'container-fluid'>
                         <div className = 'navbar-header'>
                            <a className = 'navbar-brand'>cnt</a>
                         </div>
                         <div className = 'nav navbar-nav'>
                               <div className = 'dropdown'>
                                   <button className = 'btn btn-secondary dropdown-toggle' type='button' id = 'dropdownMenuButton' data-toggle = 'dropdown' aria-haspopup='true' aria-expanded = 'false'>cit</button>
                                   <div className = 'dropdown-menu' aria-labelledby='dropdownMenuButton'>
                                       <a>zhw</a>
                                       <a>hjy</a>
                                       <a>kxl</a>
                                   </div>
                               </div>
                         </div>
                    </div>
                </nav>
                <button onClick = {this.handleBack}>Home</button>
            </div>
        )
    }
}

export default Country;