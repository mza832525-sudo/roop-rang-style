const products = [
{
name:"Women's Kurti",
price:"₹999",
image:"https://via.placeholder.com/300x400?text=Product+1",
link:"#"
},
{
name:"Stylish Saree",
price:"₹1499",
image:"https://via.placeholder.com/300x400?text=Product+2",
link:"#"
},
{
name:"Western Dress",
price:"₹1299",
image:"https://via.placeholder.com/300x400?text=Product+3",
link:"#"
},
{
name:"Handbag",
price:"₹799",
image:"https://via.placeholder.com/300x400?text=Product+4",
link:"#"
}
];

const grid = document.querySelector(".product-grid");

products.forEach(product=>{

grid.innerHTML += `
<div class="card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>${product.price}</p>

<a href="${product.link}" target="_blank" class="btn">
Buy Now
</a>

</div>
`;

});
