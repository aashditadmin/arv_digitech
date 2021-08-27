import React from "react";

export default function Category() {
    return (
        <div>
            <div className="card mt-4">
            <table className="table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Product Name</th>
                        <th>Website</th>
                        <th>Offers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Staples</td>
                        <td>Rice</td>
                        <td>Amazon</td>
                        <td>
                            Lorem ipsum dolor sit amet adipiscing elit, sed do incididunt ut.
                        </td>
                    </tr>
                    <tr>
                        <td>Staple</td>
                        <td>Dal</td>
                        <td>Bigbasket</td>
                        <td>
                            Lorem ipsum dolor sit amet adipiscing elit, sed do incididunt ut.
                        </td>
                    </tr>
                    <tr>
                        <td>Staple</td>
                        <td>Wheat</td>
                        <td>Flipkart</td>
                        <td>Lorem ipsum dolor sit amet, adipiscing elit,.</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
}
