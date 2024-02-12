import React from 'react';
import Detail from './Detail';
import { Link } from 'react-router-dom';
import Data from './Data'
const ProduitB = () => {
    console.log(Detail)
    return (
        <div>
            <h1>Produit B</h1>
            <p> test test test test test test</p>
            {Data.map((value)=> (
                <div>
                <p>{value.name}</p>
                <Link to={`/produitB/${value.id}`}>voir Détails</Link>
                </div>
            )

            )}
        </div>
    );
}

export default ProduitB;
