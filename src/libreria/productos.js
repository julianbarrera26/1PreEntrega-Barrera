
const products = [
    {
        id:1,
        title:"clipper wahl ",
        categoria: "Maquinas",
        precio: 20000,
        descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga harum hic assumenda exercitationem iusto dolore quae accusantium sed corporis.",
        img:"https://wahlargentina.vteximg.com.br/arquivos/ids/155426-1000-1000/magic-clip-cordless-08148-048-clipper.jpg?v=637947190977630000",
        stock:5

},
{
    id:2,
    title:"clipper wahl ",
    categoria: "Maquinas",
    precio: 20000,
    descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga harum hic assumenda exercitationem iusto dolore quae accusantium sed corporis.",
    img:"https://wahlargentina.vteximg.com.br/arquivos/ids/155426-1000-1000/magic-clip-cordless-08148-048-clipper.jpg?v=637947190977630000",
    stock:5,

},
{
    id:3,
    title:"clipper wahl ",
    categoria: "Maquinas",
    precio: 20000,
    descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga harum hic assumenda exercitationem iusto dolore quae accusantium sed corporis.م",
    img:"https://wahlargentina.vteximg.com.br/arquivos/ids/155426-1000-1000/magic-clip-cordless-08148-048-clipper.jpg?v=637947190977630000",
    stock:5,

},
{
    id:4,
    title:"clipper wahl ",
    categoria: "Maquinas",
    precio: 20000,
    descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga harum hic assumenda exercitationem iusto dolore quae accusantium sed corporis.",  
    img:"https://wahlargentina.vteximg.com.br/arquivos/ids/155426-1000-1000/magic-clip-cordless-08148-048-clipper.jpg?v=637947190977630000",
    stock:5,

},
{
    id:5,
    title:"tijera de corte ",
    categoria: "Tijeras",
    precio: 2000,
    descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga harum hic assumenda exercitationem iusto dolore quae accusantium sed corporis.",  
    img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/758/494/products/tijera-profesional-55-jaguar-pre-style-relax-slice1-639c68b0f9f0cf645e16847678490540-640-0.webp",
    stock:3,

},
{
    id:6,
    title:"tijera de corte ",
    categoria: "Tijeras",
    precio: 2000,
    descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga harum hic assumenda exercitationem iusto dolore quae accusantium sed corporis.",  
    img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/758/494/products/tijera-profesional-55-jaguar-pre-style-relax-slice1-639c68b0f9f0cf645e16847678490540-640-0.webp",
    stock:5,

},
{
    id:7,
    title:"tijera de corte ",
    categoria: "Tijeras",
    precio: 2000,
    descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga harum hic assumenda exercitationem iusto dolore quae accusantium sed corporis.",  
    img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/758/494/products/tijera-profesional-55-jaguar-pre-style-relax-slice1-639c68b0f9f0cf645e16847678490540-640-0.webp",
    stock:5,

},
{
    id:9,
    title:"tijera de corte ",
    categoria: "Tijeras",
    precio: 2000,
    descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga harum hic assumenda exercitationem iusto dolore quae accusantium sed corporis.",  
    img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/758/494/products/tijera-profesional-55-jaguar-pre-style-relax-slice1-639c68b0f9f0cf645e16847678490540-640-0.webp",
    stock:5,

},
];

export const getProducts = (id) => {
    const _products = id
    ? products.filter((product) => product.categoria.toLowerCase() === id)
    :products;

    return new Promise((res)=>{
        setTimeout(()=> {
            res(_products);

        },500);
    });
};

export const getProduct = (id) => {
    const product = products.filter((product) => product.id === id) [0];
    
    return new Promise((res)=>{
        setTimeout(()=> {
            res(product);

        },1000);
    });
};