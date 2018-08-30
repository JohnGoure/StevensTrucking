import React from "react";

const Body = () => {
    return (
        <section className="dispatch-control">
            <h1>Dispatch Control</h1>
            <article>
                <table>
                    <thead>
                    <tr>
                        <th>Well</th>
                        <th>Current Load</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="well-site"><a href="#">Roys huge well</a></td>
                        <td className="barrel-load">162 barrels</td>
                    </tr>
                    <tr>
                        <td className="well-site"><a href="#">Johns well</a></td>
                        <td className="barrel-load">2300 barrels</td>
                    </tr>
                    </tbody>
                </table>
            </article>
        </section>
    )
}

export default Body;