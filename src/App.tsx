import React from 'react';
import './App.css'
class App extends React.Component<any, any>{

    state = {
        count: 0,
        visible: true
    };

    // up = (): void =>{
    //     this.setState({count: this.state.count +1})
    // }
    //
    // down = (): void =>{
    //     this.setState({count: this.state.count -1})
    // }

    update = (type: string): void =>{
        switch (type){
            case 'UP':
                this.setState({count : this.state.count +1});
                break;
            case 'DOWN':
                this.setState({count : this.state.count -1});
                break;
        }
    }

    render(){
        return(
            <div className="m-20">
                <button className="inline bg-green-600 px-10" onClick={() => this.update('UP')}>+</button>
                <div className="inline mx-5 font-bold">{this.state.count}</div>
                <button className="inline bg-red-600 px-10" onClick={() => this.update('DOWN')}>-</button>
            </div>
        );
    }
}

export default App
