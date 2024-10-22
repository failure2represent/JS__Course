function generateTable(rows, cols){
    let table = '<table>';

    for(let i = 1; i <= rows; i++){
        table += '<tr>';
        for(let j = 1; j <= cols; j++){
            table += `<td>${i*j}</td>`
        }
        table += '</tr>'
    }
    
    table += '</table>'
    return table
}

const rows = +prompt("Enter number of rows");
const cols = +prompt("Enter number of cols")

document.querySelector('#table_container').innerHTML = generateTable(rows, cols)