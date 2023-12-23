import React from 'react';
import Card from "./../component/card/card";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import axios from "axios";

interface Data {
    id: number,
    title: string,
    body: string
}



class Home extends React.Component<any, any> {

    state = {
        data: []
    }

    componentDidMount(): void {
        this.fetchData();
    }

    /**
     * fetch article data
     */
    fetchData = (): void => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(result => {
        //         console.log(result);
        //         this.setState({ data: result });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

        axios.get('https://jsonplaceholder.typicode.com/posts').then(result =>{
            console.log(result.data);
        }).catch(err =>{
            console.log(err);
        })
    }






    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return (
            <section>
                <div
                    className={'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto'}>

                    {
                        this.state.data.map((r: Data, index: number) => {
                            return <Card title={r.title} content={r.body}/>
                        })
                    }

                </div>
            </section>
        );
    }

}

export default Home;