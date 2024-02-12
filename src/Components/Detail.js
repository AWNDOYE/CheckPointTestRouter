import React from 'react';
import Data from './Data';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();
    console.log("test",id)

    const element = Data.find((value) =>value.id === parseInt(id, 10))

    console.log("test",element)
    return (
        <div>
            <h1>{element.name}</h1>
            <h1>{element.age}</h1>

        </div>
    );
}
export default Detail;
