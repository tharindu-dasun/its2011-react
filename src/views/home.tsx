import React, {useEffect, useState} from 'react';
import Card from "./../component/card/card";
import axios from "axios";

interface Data {
    id: number,
    title: string,
    body: string
}

function Home()  {

    const[data, setData] = useState<Data[]>([]);

    /**
     * fetch article data
     */
    const fetchData = (): void => {
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
            // console.log(response.data);
            setData(response.data);
        }).catch(err =>{
            console.log(err);
        })
    }

    // componentDidMount(): void {
    //     this.fetchData();
    // }

    useEffect(() => {
        fetchData();
        console.log("Called");
    }, []);

        return (
            <section>
                <div
                    className={'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto'}>

                    {
                        data.map((r: Data, index: number) =>{
                        return <Card title={r.title} content={r.body}/>
                        })
                    }

                </div>
            </section>
        );
}

export default Home;