import React from 'react'
import img from '../Image/img1.jpg'
import useFetch from "./useFetch";

export default function ResultProduct(props) {


    var data = useFetch(`http://localhost:8000/category?productName=${props.data}`);
    return (
        <div>
            <div className="result">
                {data.map(e => {
                    return (
                        <div className="wrapper" key={e.id}>
                            <div className="header">
                                <div className="title">
                                    What is {e.productName}
                                </div>
                            </div>
                            <div className="card_body">
                                <div className="image">
                                    <img src={e.image} alt="ProductImage" />
                                </div>
                                <div className="description">
                                    <p>
                                        {e.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}


                <div className="similar">
                    <div className="card">
                        <div className="head">
                            <div className="title">
                                Similar Product
                            </div>
                        </div>

                        <div className="body">
                            <ul>
                                <li>Rice</li>
                                <li>Wheat</li>
                                <li>Dal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
