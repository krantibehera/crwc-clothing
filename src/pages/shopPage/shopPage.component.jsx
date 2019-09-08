import React from 'react';
import SHOP_DATA from './shop.data'
import {CollectionPreview} from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
    constructor(){
        super();
      this.state= {
          collection: SHOP_DATA,
      }
    }

    render(){
        return(
           <div className='shop-page'>
           {
            this.state.collection.map(({ id, ...otherCollectionProperties })=>(
                 <CollectionPreview key={id} {...otherCollectionProperties} />
            ))}
           </div>
        )
    }
}

export default ShopPage;