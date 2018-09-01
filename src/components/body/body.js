import React from 'react';
import Table from '../table/table';
import SignUp from '../sign-up-form/sign-up-form';
import { BrowserRouter as Router, Link, Routes } from 'react-router-dom';

const Body = (props) => {
    return (
        <Router>
        <section className="dispatch-control">
            {/*<h1>DISPATCH CONTROL</h1>*/}
            <article>
                <Table />
            </article>
        </section>
        </Router>
    )
}

export default Body;