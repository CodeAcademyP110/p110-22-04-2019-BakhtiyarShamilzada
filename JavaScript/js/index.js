"use strict";

window.onload = function()
{
    if(localStorage.getItem('basket') === null)
    {
        localStorage.setItem('basket', JSON.stringify([]));
    }

    updateBasketIcon();

    const productButtons = document.querySelectorAll('button');
    [...productButtons].forEach(btn =>
        {
            btn.onclick = function()
            {
                const productId = this.parentElement.getAttribute('data-id');
                const productImage = this.parentElement.previousElementSibling;
                const productImageSrc = productImage.getAttribute('src');
                const productName = this.previousElementSibling.innerText;

                const basket = JSON.parse(localStorage.getItem('basket'));
                const basketElemet = basket.find(el =>
                    {
                        return el.id === productId;
                    })

                if(basketElemet === undefined)
                {
                    basket.push(
                        {
                            id: productId,
                            count: 1,
                            src: productImageSrc,
                            name: productName
                        }
                    )
                }
                else
                {
                    basketElemet.count++;
                }
                localStorage.setItem('basket', JSON.stringify(basket));
                updateBasketIcon();
            }
        })
}

function updateBasketIcon()
{
    const basket = JSON.parse(localStorage.getItem('basket'));
    if(basket !== null)
    {
        if(basket.length > 0)
        {
            document.querySelector('.badge-pill').innerText = basket.reduce((t, p) => t + p.count, 0);

        }
    }
}