import React, { useEffect, useState } from 'react'
import "./PlansScreen.css"
import db from '../Firebase';
function PlansScreen() {
    const products = [{name:"Base",description:"720p"},{name:"Standard",description:"1080p"},{name:"Premimun",description:"4K + HDR"}];
    // useEffect(()=>{
    //     db.collection('products').where('active','==',true)
    //     .get().then((querySnapshot)=>{
    //         const products = {};
    //         querySnapshot.forEach(async productsDoc=>{
    //             products[productsDoc.id] = productsDoc.data();
    //             const priceSanp = await productsDoc.ref.collection
    //             ("price").get();
    //             priceSanp.docs.forEach(doc => {
    //                 products[productsDoc.id].prices = {
    //                     priceId: price.id,
    //                     priceData: price.data(),
    //                 }
    //             })
    //         })
    //         setProducts(products);
    //     })
    // },[]);
  return (
    <div className="plansScreen">
        <p>Renewal Date: 12/12/2012</p>
        {products.map(product => {
            return (
                <div className='planScreen_plan'>
                    <div className="planScreen_info">
                        <h1>{product.name}</h1>
                        <h6>{product.description}</h6>
                    </div>
                    <button>Subscribe</button>
                </div>
            );
        })}
    </div>
  )
}

export default PlansScreen;