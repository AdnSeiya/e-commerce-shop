import React from 'react';

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
               <div className="col-10 mx-auto col-lg-2">
                   <p className="text-uppercase">Hunde</p>
               </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Name des Produkts</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Preis</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Anzahl</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Löschen</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Total</p>
                </div>
          </div>   
        </div>
    )
}
