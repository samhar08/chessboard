function creatBox() {
    let inp1 = document.getElementById('inp1').value;
    let inp2 = document.getElementById('inp2').value;
    let table = document.getElementById('table');
    table.style.display = 'block'
    table.innerHTML = '';
    for(let i = 0;i < inp1;i++){
        let tr = document.createElement('tr');
        table.appendChild(tr)
        for(let j = 0;j < inp2;j++){
            let td = document.createElement('td');
            tr.appendChild(td)
            td.onclick = f ;
            if ((i + j) % 2 == 0) {
                td.style.backgroundColor = 'red';
            }
            function f (event) {
                let r ,g ,b;
                r = Math.floor(Math.random() * 255);
                g = Math.floor(Math.random() * 255);
                b = Math.floor(Math.random() * 255);
                event.target.style.backgroundColor = "rgb" + "(" +r + "," + g + "," + b +")"
            }
            table.appendChild(tr)
        }
    }
}