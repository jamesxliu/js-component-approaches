import React, {Component} from 'react';

const TableHeader = ({data}) => (
    <thead>
        <tr>
            {
                Object.keys(data[0]).map((key, idx) => (
                    <th key={`${key}_${idx}`}>
                        {key}
                    </th>
                ))
            }
        </tr>
    </thead>
);

const TableBody = ({data}) => (
    <tbody>
    {
        data.map((datum) => (
            <tr>
                {
                    Object.values(datum).map((value) => (
                        <td>{value}</td>
                    ))
                }
            </tr>
        ))
    }
    </tbody>
);

const Table = ({data, classNames}) => (
    <table className={classNames}>
        <TableHeader data={data}/>
        <TableBody data={data}/>
    </table>
);

export default Table;