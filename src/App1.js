import React, {Component} from 'react';

class App1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sort: 0
        }
    }

    componentWillMount(){
        this.data = [
            {
               name: 'Alex',
               birth: '02/09/1891'
            },
            {
                name: 'Jlex',
                birth: '12/01/1982'
            },
            {
                name: 'Plex',
                birth: '01/16/1992'
            },
            {
                name: 'Clex',
                birth: '09/16/1992'
            },
            {
                name: 'Dlex',
                birth: '10/31/1999'
            }
        ];
    }

    handleOri = () => {
        this.setState({
            ...this.state,
            sort: 0
        })
    }

    handleName = () => {
        this.setState({
            ...this.state,
            sort: 1
        },()=>{
            this.data.sort((a,b)=> {
                console.log(a);
                let fa = a.name.split('');
                console.log(fa);
                let sa = b.name.split('');
                for(let i = 0; i < Math.min(fa.length, sa.length); ++i) {
                    if(fa[i] === sa[i]) {
                        continue;
                    }else {
                        return fa[i]<sa[i] ? -1 : 1
                    }
                }
                return 0;
            })
        })
    }

    handleBirth = () => {
        this.setState({
            ...this.state,
            sort: 2
        }, ()=>{
            this.data.sort((a,b)=> {
                let arr1 = a.birth.split('/');
                let arr2 = b.birth.split('/');
                for(let i = 2; i >= 0; --i) {
                    if(arr1[i] === arr2[i]) {
                        continue;
                    }else {
                        return arr1[i] < arr2[i] ? -1: 1
                    }
                }
                return 0;
            })
        })
    }

    render(){
     /*   const data = [
            {
               name: 'Alex',
               birth: '02/09/1891'
            },
            {
                name: 'Jlex',
                birth: '12/01/1982'
            },
            {
                name: 'Plex',
                birth: '01/16/1992'
            },
            {
                name: 'Clex',
                birth: '09/16/1992'
            },
            {
                name: 'Dlex',
                birth: '10/31/1999'
            }
        ]*/
        console.log('data, ', this.data, 'sort, ', this.state.sort);
        return (
            <div>hi
                <div>
                    <button onClick = {this.handleOri}>ori</button>
                    <button onClick = {this.handleName}>sortByName</button>
                    <button onClick = {this.handleBirth}>sortByBirth</button>
                </div>
                  <div>
                    <table>
                        <thead>
                           <tr>
                               <th>Name</th>
                               <th>BirthDay</th>
                           </tr>
                        </thead>
                        <tbody>
                             {this.data.map((user,index) => {
                                 return(
                                     <tr key = {index}>
                                         <td>{user.name}</td>
                                         <td>{user.birth}</td>
                                     </tr>
                                 )
                             })}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default App1;