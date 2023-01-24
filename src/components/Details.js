import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                   const {id, name, race, img, info, price, inCart} = value.detailProduct;
                    return(
                        <div className="container py-5">
                            {/*title*/}
                            <div className="row>">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{name}</h1>
                                </div>
                            </div>
                            {/*end of title*/}
                            {/*product info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                {/*product text*/}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Name: {name}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Rasse:  <span className="text-uppercase">{race}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            Preis: {price}<span>CHF</span>
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Informationen über {name}
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/*buttons*/}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                Zurück zu Produkte
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inCart ? true : false}
                                                         onClick={() => {
                                                             value.addToCart(id);
                                                             value.openModal(id);
                                                         }}>
                                            {inCart ? "inCart" : "In den Warenkorb hinzufügen"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>


                    );
                }}
            </ProductConsumer>
        )
    }
}
