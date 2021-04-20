import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import "../../../public/css/react.css";
import axios from "axios";
const Search = () => {
    const [customerName, setCustomerName] = useState("");
    const [dog, setDog] = useState();
    const handleSearch = (e) => {

        if (e.target.value != " "  && e.target.value != "" ) {
            let formData = new FormData();
            formData.append('customerName', e.target.value);
             setCustomerName(e.target.value)
            axios.post("search/find", formData)
                .then(res => setDog(res.data))
                .catch(error => console.log(error))
         }else {
             setCustomerName(e.target.value)
             setDog([])
         }
        
    }


    const handleSubmit = (e) => {

        // e.preventDefault();
        // if (customerName !== " ") {
        //     let formData = new FormData();
        //     formData.append('customerName', customerName);
        //     axios.post("search/find", formData)
        //         .then(res => setDog(res.data))
        //         .catch(error => console.log(error))
        // }

        // setCustomerName(" ")
    }

    console.log(dog)
    return (
        <div className="Crest">
            <section className="engine">
                <h1>The Law Crest</h1>
                <form onSubmit={handleSubmit}>
                    <aside className="history">
                        <input type="text" name="customerName" id="customerName" onChange={handleSearch} value={customerName} required />
                        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </aside>
                </form>
            </section>
            {dog ?
                <table>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>CustomerName</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>PostalCode</th>
                            <th>relevance</th>
                            <th></th>
                        </tr>
                    </thead>

                    {dog.map((item, index) => {
                        const { id, CustomerName, Address, Gender, City, Country, PostalCode, relevance } = item
                        return <tbody key={index}>
                            <tr>
                                <td key={id}>{id}</td>
                                <td>{CustomerName}</td>
                                <td>{Address}</td>
                                <td>{Gender}</td>
                                <td>{City}</td>
                                <td>{Country}</td>
                                <td>{PostalCode}</td>
                                <td>{relevance}</td>
                            </tr>

                        </tbody>

                    })}

                </table>

                : []}
        </div>

    )
}

export default Search;
if (document.getElementById("search")) {
    ReactDOM.render(<Search />, document.getElementById("search"))
}