const products=[
    {
    name: 'Fuk Fuska Sask ulalga Tree',
    img_url:'../assets/product.png',
    price:1890,
    id:0
    },
    {
        name:'suk sak sick niyoga tree',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
   
    {
        name:'suej ejie lhal tree',
        img_url:"../assets/ddd.png",
        price:2002,
        id:0
    },
   
    {
        name:'d d jd  diyoga tree',
        img_url:"../assets/6016.jpg",
        price:2002,
        id:0
    },
   
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
    {
        name:'sdkkd dkd ',
        img_url:"../assets/fjjf.jpg",
        price:2002,
        id:0
    },
   
]

let cartCount=0;
let TotalSum=0;

function addToCart(price){
 console.log(price);
 cartCount++;
 TotalSum=TotalSum+price;
 document.getElementById('cardTotal').innerText=TotalSum;
document.getElementById('cartBadge').innerText=cartCount;
document.getElementById('cartCount').innerText=cartCount
}

function showProduct(){
      for(let product of products){
         
         const productCard=document.createElement('div');
         productCard.innerHTML=`
            <div class="bg-base-100 w-[300px] shadow-sm">
          <figure class="px-10 pt-10">
            <img src="${product.img_url}" alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">${product.name}</h2>
            <p>
              This tree is very special for us. this tree more beutifull for us
            </p>
            <p>$ ${product.price}</p>
            <div class="card-actions">
              <button onclick="addToCart(${product.price})" class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
         `

         document.getElementById('container').append(productCard);
      }
      document.getElementById('cardTotal').innerText=TotalSum;
      document.getElementById('cartBadge').innerText=cartCount;
      document.getElementById('cartCount').innerText=cartCount
}

showProduct();