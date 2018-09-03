import React from 'react';
import Add from '@material-ui/icons/Add';
import Edit from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    }
  });

const table = (props) => {
    const { classes } = props;
    return (

        <table>
        <thead>
            <tr>
                <th>Well</th>
                <th>On hand</th>
                <th>Pulled</th>
                <th>Remaining</th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd-row">
                <td className="well-site">
                    <a href="#">
                        <IconButton className={classes.button} aria-label="Edit">
                            <Edit></Edit>
                        </IconButton>
                    </a>Well
                </td>
                <td className="barrel-load">
                    <a href="#">
                    </a>16200
                </td>
                <td className="barrel-load">
                    <a href="#">
                        <IconButton className={classes.button} aria-label="Add">
                            <Add />
                        </IconButton>
                    </a>500
                </td>
                <td style={{color: "red"}}className="barrel-load">15700</td>
            </tr>
            <tr className="even-row">
                <td className="well-site">
                    <a href="#">
                        <IconButton className={classes.button} aria-label="Edit">
                            <Edit></Edit>
                        </IconButton>
                    </a>Well
                </td>
                <td className="barrel-load">
                    <a href="#">
                    </a>16200
                </td>
                <td className="barrel-load">
                    <a href="#">
                        <IconButton className={classes.button} aria-label="Add">
                            <Add />
                        </IconButton>
                    </a>16000
                </td>
                <td style={{color: "green"}} className="barrel-load"><a href="#"></a>200</td>
            </tr>
            <tr className="odd-row">
                <td className="well-site">
                    <a href="#">
                        <IconButton className={classes.button} aria-label="Edit">
                            <Edit></Edit>
                        </IconButton>
                    </a>Well
                </td>
                <td className="barrel-load">
                    <a href="#">
                    </a>16200
                </td>
                <td className="barrel-load">
                    <a href="#">
                        <IconButton className={classes.button} aria-label="Add">
                            <Add />
                        </IconButton>
                    </a>500
                </td>
                <td className="barrel-load"><a href="#"></a>15700</td>
            </tr>
            <tr className="even-row">
                <td className="well-site">
                    <a href="#">
                        <IconButton className={classes.button} aria-label="Edit">
                            <Edit></Edit>
                        </IconButton>
                    </a>Well
                </td>
                <td className="barrel-load">
                    <a href="#">
                    </a>16200
                </td>
                <td className="barrel-load">
                    <a href="#">
                        <IconButton className={classes.button} aria-label="Add">
                            <Add />
                        </IconButton>
                    </a>500
                </td>
                <td className="barrel-load"><a href="#"></a>15700</td>
            </tr>
            <tr className="odd-row">
                <td className="well-site">
                    <a href="#">
                        <IconButton className={classes.button} aria-label="Edit">
                            <Edit></Edit>
                        </IconButton>
                    </a>Well
                </td>
                <td className="barrel-load">
                    <a href="#">
                    </a>16200
                </td>
                <td className="barrel-load">
                    <a href="#">
                        <IconButton className={classes.button} aria-label="Add">
                            <Add />
                        </IconButton>
                    </a>500
                </td>
                <td className="barrel-load"><a href="#"></a>15700</td>
            </tr>
            <tr className="even-row">
                <td className="well-site">
                    <a href="#">
                        <IconButton className={classes.button} aria-label="Edit">
                            <Edit></Edit>
                        </IconButton>
                    </a>Well
                </td>
                <td className="barrel-load">
                    <div>
                        16200
                    </div>
                </td>
                <td className="barrel-load">
                    <a href="#">
                        <IconButton className={classes.button} aria-label="Add">
                            <Add />
                        </IconButton>
                    </a>500
                </td>
                <td className="barrel-load"><a href="#"></a>15700</td>
            </tr>
        </tbody>
    </table>
    )
}

export default withStyles(styles)(table);