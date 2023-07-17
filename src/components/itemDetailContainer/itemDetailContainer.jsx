import { useState, useEffect } from 'react';
import { getProductById } from '../../Products';
import ItemDetail from '../itemDetail/itemDetail';

import { useParams } from 'react-router-dom';

const itemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
};

export default itemDetailContainer