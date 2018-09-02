import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const table = (props) => {
    return (

        <table>
        <thead>
            <tr>
                <th>Well</th>
                <th>Barrels on hand</th>
                <th>Remaining</th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd-row">
                <td className="well-site"><a href="#">Roys huge well</a></td>
                <td className="barrel-load"><a href="#">16256 barrels</a></td>
                <td className="barrel-load"><a href="#">16256 barrels</a></td>
            </tr>
            <tr className="even-row">
                <td className="well-site"><a href="#">Johns well</a></td>
                <td className="barrel-load"><a href="#">2300 barrels</a></td>
                <td className="barrel-load"><a href="#">16256 barrels</a></td>
            </tr>
            <tr className="odd-row">
                <td><a href="#">Well</a></td>
                <td><a href="#">barrels</a></td>
                <td className="barrel-load"><a href="#">16256 barrels</a></td>
            </tr>
            <tr className="even-row">
                <td><a href="#">Well</a></td>
                <td><a href="#">barrels</a></td>
                <td className="barrel-load"><a href="#">16256 barrels</a></td>
            </tr>
            <tr className="odd-row">
                <td><a href="#">Well</a></td>
                <td><a href="#">barrels</a></td>
                <td className="barrel-load"><a href="#">16256 barrels</a></td>
            </tr>
            <tr className="even-row">
                <td><a href="#">Well</a></td>
                <td><a href="#">barrels</a></td>
                <td className="barrel-load"><a href="#">16256 barrels</a></td>
            </tr>
            <tr className="odd-row">
                <td><a href="#">Well</a></td>
                <td><a href="#">barrels</a></td>
                <td className="barrel-load"><a href="#">16256 barrels</a></td>
            </tr>
            <tr className="even-row">
                <td><a href="#">Well</a></td>
                <td><a href="#">barrels</a></td>
                <td className="barrel-load"><a href="#">16256 barrels</a></td>
            </tr>
            <tr className="even-row">
                <td><a href="#">Well</a></td>
                <td><a href="#">barrels</a></td>
                <td className="barrel-load"><a href="#">16256 barrels</a></td>
            </tr>
            <tr className="even-row">
                <td><a href="#">Well</a></td>
                <td><a href="#">barrels</a></td>
                <td className="barrel-load"><a href="#">16256 barrels</a></td>
            </tr>
            <tr className="even-row">
                <td><a href="#">Well</a></td>
                <td><a href="#">barrels</a></td>
                <td className="barrel-load"><a href="#">16256 barrels</a></td>
            </tr>
            <tr className="even-row">
                <td><a href="#">Well</a></td>
                <td><a href="#">barrels</a></td>
                <td className="barrel-load"><a href="#">16256 barrels</a></td>
            </tr>
            <tr className="even-row">
                <td><a href="#">Well</a></td>
                <td><a href="#">barrels</a></td>
                <td className="barrel-load"><a href="#">16256 barrels</a></td>
            </tr>
        </tbody>
    </table>
    )
}

export default table;