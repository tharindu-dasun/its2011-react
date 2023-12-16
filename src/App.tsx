import React from 'react';
import Card from "./component/card/card";
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";
import Home from "./views/home";
import Login from "./views/login";


interface Props {
}

interface State {
    count: number
}

class App extends React.Component<Props, State> {

    state = {
        count: 0
    }

    up = () => {
        this.setState({count: this.state.count + 1})
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return (
            <div>

                <Header/>

                {/*<Home/>*/}

                {/*<div className={'text-center m-5'}>*/}
                {/*    <div className={'text-2xl font-bold'}>{this.state.count}</div>*/}
                {/*    <br/>*/}
                {/*    <button className={'bg-green-600 text-white p-5'} onClick={this.up}>Click</button>*/}
                {/*</div>*/}

                {/*{*/}
                {/*    this.state.count > 0 ? null : <Card title={"hi"} content={"hhhhhhhhhhhhhhhhhhhh"}/>*/}
                {/*}*/}

                <Login/>


                <Footer/>

            </div>
        );
    }

}

export default App