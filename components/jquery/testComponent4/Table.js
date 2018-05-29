const TableHeadTpl = (data) => (`
    <thead>
        <tr>
            ${Object.keys(data[0]).map((key) => (`
                <th>${key}</th>`)).join('')
            }
        </tr>
    </thead>
`);

const TableRowTpl = (data) => (`
    ${data.map((datum) => (`
        <tr>
            ${Object.values(datum).map((value) => (`
                <td>${value}</td>  
             `)).join('')}
        </tr>
    `)).join('')}
`);

const TableTpl = (data) => (`
    <table>
        ${TableHeadTpl(data)}
        <tbody>${TableRowTpl(data)}</tbody>
    </table>
`);

export default TableTpl;