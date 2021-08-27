import React from 'react';
import img from '../Image/img1.jpg'
import useFetch from './useFetch';

export default function ProductCard() {



    var data = useFetch(`http://localhost:8000/category`);

    return (

        <div className="ProductCard">
            {
                data.map(element => {
                    return (
                        <div className='pcard' key={element.id}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <div className="img">
                                            <img src={element.image} alt="Avatar" />
                                        </div>
                                        <div className="name">
                                            <h3>{element.productName}</h3>
                                        </div>
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="wrapper">
                                            <h4>Review Rating</h4>
                                            <div className="star">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                            <p>{element.rating}/5</p>
                                            <div className="action">
                                                <button >Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </div>

    );
}