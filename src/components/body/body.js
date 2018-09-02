import React from 'react';
import Table from '../table/table';
import SignUp from '../sign-up-form/sign-up-form';
import { BrowserRouter as Router, Link, Routes } from 'react-router-dom';

const Body = (props) => {
    return (
        <Router>
            <div className="body-background">
        <section className="dispatch-control">
            <div className="card1">
                <h1>DISPATCH CONTROL</h1>
                <article>
                    <Table />
                </article>
            </div>
        </section>
        </div>
        </Router>
    )
}

export default Body;