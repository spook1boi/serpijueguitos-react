import React from 'react';
import Cards from './Cards'

const ItemListContainer = () => {
  return (
    <main className="container mx-auto py-4">

            <h2 className="text-xl font-semibold mb-2">Catalogo</h2>
            <Cards title='Card 1' src='.//img/elden.jpg' />
            <Cards title='Card 2' src='.//img/mw2.jpg' />
            <Cards title='Card 3' src='.//img/tloz-totk.jpg' />

    </main>
  );
};


export default ItemListContainer;