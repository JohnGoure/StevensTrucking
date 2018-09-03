import React from 'react';
import Table from '../table/table';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/Add';
import MaterialSort from '@material-ui/icons/Sort';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    }
  });

const Body = (props) => {
    const { classes } = props;
    return (
        <Router>
            <div className="body-background">
        <section className="dispatch-control">
            <div className="card1">
                <h1>Customer</h1>
                <IconButton className={classes.button}>
                    <AddCircle />
                </IconButton>
                
                <input type='text' placeholder='Search'></input>
                <IconButton className={classes.button}>
                    <MaterialSort />
                </IconButton>
                <article>
                    <Table />
                </article>
            </div>
        </section>
        </div>
        </Router>
    )
}

export default withStyles(styles)(Body);