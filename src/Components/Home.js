import React from 'react';
import { Link, Routes,Route } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Ma Page Acceuil</h1>
            <Link to="/produitA"> Voir Produit A</Link>
            <Link to="/produitB">Voir Produit B</Link>
        </div>
    );
}

export default Home;
