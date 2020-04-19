import React from 'react';

const storeContext = React.createContext(0);

export default class A extends React.Component{
    state = {
        count: 1
    }
    test1 = () => {
        this.setState(state => ({
            count: state.count+1
        }))
    }

    add = () => {
        this.setState({
            ...this.state,
            count: this.state.count+1
        })
    }

    render(){
        return(
            <div>
                <button onClick = {this.add}>click</button>
                <h1>{this.state.count + 'in root component'}</h1>
                <storeContext.Provider value = {this.state.count}
                                       setvalue = {this.add}>
                   <B/>
                </storeContext.Provider>
            </div>
        )
    }
}

function B(){
    return(
        <div>
            <C/>
            <D/>
        </div>
    )
}

function C(){
  return(
      <storeContext.Consumer>
        {
            count => <h1>{count}</h1>
        }
        
      </storeContext.Consumer>
  )
}

class D extends React.Component{
    static contextType = storeContext;
    //定义静态contextType属性，值是Context对象
    //this.context的值就是Context对象中的value值
    render(){
      return <h1>{this.context}</h1>    
    }
}

