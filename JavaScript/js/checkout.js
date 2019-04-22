'use strict';

window.onload = function()
{
    const basket = JSON.parse(localStorage.getItem('basket'));
    
    if(basket !== null)
    {
        if(basket.length)
        {
            document.querySelector('.products-table').classList.remove('d-none');
            basket.forEach(product =>
                {
                    const tbody = document.querySelector('tbody');
                    const tr = document.createElement('tr');

                    const imageTd = document.createElement('td');
                    const img = document.createElement('img');
                    img.src = product.src;
                    imageTd.appendChild(img);
                
                    const nameTd = document.createElement('td');
                    nameTd.innerText = product.name

                    const countTd = document.createElement('td');
                    countTd.innerText = product.count;

                    const deleteTd = document.createElement('i');
                    deleteTd.className = 'far fa-trash-alt';
                   
                    tr.appendChild(imageTd);
                    tr.appendChild(nameTd);
                    tr.appendChild(countTd);
                    tr.appendChild(deleteTd);
                    tbody.appendChild(tr);
                    deleteTd.onclick = function()
                    {
                        // Delete Code
                    }
                })
                document.querySelector('.clear-all').onclick = function()
                {
                    localStorage.removeItem('basket');
                    document.querySelector('.products-table').classList.add('d-none');
                    document.querySelector('.badge-pill').innerText = '';
                }
                document.querySelector('.badge-pill').innerText = basket.reduce((t, p) => t + p.count, 0);
        }
       
    }
}