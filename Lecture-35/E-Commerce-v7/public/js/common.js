const allLikeButton = document.querySelectorAll('.like-button');


async function likeButton(productid,btn) {
   
    try {
        const response = await axios({
            method: 'post',
            url: `/product/${productid}/like`,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
        });

        if (btn.children[0].classList.contains('fas')) {
            btn.children[0].classList.remove('fas');
            btn.children[0].classList.add('far');
        } else {
            btn.children[0].classList.add('fas');
            btn.children[0].classList.remove('far');
        }
    
       
    }
    catch (e) {

        // used to redirect the browser using js
        window.location.replace('/login');
        console.log(e.message);
    }    
}


for (let btn of allLikeButton) {
    btn.addEventListener('click', () => {
       const productid = btn.getAttribute('product-id')
        likeButton(productid,btn);
    })
}