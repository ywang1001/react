import React, {Component} from 'react';

class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:"",
            todo:[]
        }
    }

    handleInput = (e) => {
       this.setState({
           ...this.state,
           text: e.target.value
       })
    }

    handleSubmit = (e) => {
       e.preventDefault();
       let tpA = this.state.todo;
       tpA.unshift(this.state.text);
       this.setState({
           ...this.state,
           todo: tpA,
           text: ""
       })
    }

    render(){
        return(
            <div>
                 <div>
                      <form onSubmit = {this.handleSubmit}>
                          <label>
                            <input onChange = {this.handleInput} value = {this.state.text}/>   
                          </label> 
                          <label>
                              <input type = 'submit' value = 'add'/>
                          </label>
                      </form>
                 </div>

                 <div>
                    {this.state.todo.map(
                    (todo, index) => {
                        return(
                            <tr key = {index} >
                                <td>
                                {todo}
                                <button onClick = {()=>{
                                    let tpt = this.state.todo.filter((to) => {
                                        return to !== todo
                                    })
                                    this.setState({
                                        ...this.state,
                                        todo:tpt
                                    })
                                }}>x</button>
                                </td>
                            </tr>
                        )
                    }
                    )}
                 </div>
            </div>
        )
    }
}

export default App3;