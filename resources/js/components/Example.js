import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import "../../../public/css/react.css"
function Example() {
    const [first, setFirst] = useState("");
    const [email, setEmail] = useState("");

    const handleChange = async (e) => {
        await setFirst(e.target.value)
    }

    const handleEmail = async (e) => {
        await setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', first)
        formData.append('email', email)
        /**"/Data" is from the ReactController to send data to the DB */
        axios.post("/send", formData)
            .then(Response => console.log(Response.data))
            .catch(error => console.log(error))
        setFirst(" ")
        setEmail(" ")
    }

    return (


        <div className="card-body">
            <h1>Laravel React JS Axios Post </h1>
            <section className="items">

                <form onSubmit={handleSubmit}>
                    <div className="call">
                        <label>
                            name
                        </label>
                        <input type="text" name="name" id="name" value={first} onChange={handleChange} />
                    </div>
                    <div className="call">
                        <label>
                            email
                        </label>
                        <input type="text" name="email" id="email" value={email} onChange={handleEmail} />
                    </div>
                    <div className="btn">
                        <button type="Submit">click</button>
                    </div>
                </form>
            </section>
        </div>

    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
