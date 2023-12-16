import React from 'react';
import Card from "./component/card/card";
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";
import Home from "./views/home";

interface Props{

}

interface State{
    count: number;
}

class App extends React.Component<Props, State> {

    // state = {
    //     count: 0
    // }

    constructor(props: Props) {
        super(props);
        this.state = {count: 0}
        console.log('Constructor  1');
    }

    static getDerivedStateFromProps(Props , State){
        console.log('getDerivedStateFromProps  2');
        return null;
    }

    componentDidMount(): void {
        console.log('componentDidMount  3');
    }

    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
        console.log('Should componentDidUpdate  4');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): any {
        console.log('Snap Shot  5');
        return null;
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
        console.log('Component Did Update  6');
    }

    up = () => {
        this.setState({count: this.state.count + 1})
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return (
            <div>

                <Header/>

                {/*<Home/>*/}

                <div className={'text-center m-5'}>
                    <div className={'text-2xl font-bold'}>{this.state.count}</div>
                    <br/>
                    <button className={'bg-green-600 text-white p-5'} onClick={this.up}>Click</button>
                </div>

                <Footer/>

            </div>
        );
    }

}

export default App