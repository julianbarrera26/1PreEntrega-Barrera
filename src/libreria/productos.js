import { LoremIpsum, loremIpsum } from "lorem-ipsum"
import { ListGroupItem } from "react-bootstrap"

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
    img:"./assets/magic-clip-cordless.webp",
    stock:5,

},
{
    id:3,
    title:"clipper wahl ",
    categoria: "Maquinas",
    precio: 20000,
    descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga harum hic assumenda exercitationem iusto dolore quae accusantium sed corporis.م",
    img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fteklife.mx%2Fproducts%2Fmaquina-cortadora-profesional-wahl-legend-cordless&psig=AOvVaw0IrJWfh2DlbVEx9SST6y8A&ust=1689814197808000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIigpsrGmYADFQAAAAAdAAAAABAF",
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
];

export const getProducts = (id) => {
    const _products = id
    ? products.filter((product) => product.categoria.toLowerCase() === id)
    :products;

    return new Promise((res)=>{
        setTimeout(()=> {
            res(products)

        },2000)
    });
};

export const getProduct = (id) => {
    const product = products.filter((product) => product.id === id) [0];
    
    return new Promise((res)=>{
        setTimeout(()=> {
            res(products[0])

        },1000)
    });
};