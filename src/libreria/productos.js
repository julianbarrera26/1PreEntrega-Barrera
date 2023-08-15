
const products = [
    {
        title:"clipper wahl ",
        categoria: "maquinas",
        precio: 20000,
        descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga harum hic assumenda exercitationem iusto dolore quae accusantium sed corporis.",
        img:"https://wahlargentina.vteximg.com.br/arquivos/ids/155426-1000-1000/magic-clip-cordless-08148-048-clipper.jpg?v=637947190977630000",
        stock:5

},
{
    title:"clipper wahl ",
    categoria: "maquinas",
    precio: 20000,
    descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga harum hic assumenda exercitationem iusto dolore quae accusantium sed corporis.",
    img:"https://wahlargentina.vteximg.com.br/arquivos/ids/155426-1000-1000/magic-clip-cordless-08148-048-clipper.jpg?v=637947190977630000",
    stock:5,

},
{
    title:"clipper wahl ",
    categoria: "maquinas",
    precio: 20000,
    descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga harum hic assumenda exercitationem iusto dolore quae accusantium sed corporis.م",
    img:"https://wahlargentina.vteximg.com.br/arquivos/ids/155426-1000-1000/magic-clip-cordless-08148-048-clipper.jpg?v=637947190977630000",
    stock:5,

},
{
    title:"clipper wahl ",
    categoria: "maquinas",
    precio: 20000,
    descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga harum hic assumenda exercitationem iusto dolore quae accusantium sed corporis.",  
    img:"https://wahlargentina.vteximg.com.br/arquivos/ids/155426-1000-1000/magic-clip-cordless-08148-048-clipper.jpg?v=637947190977630000",
    stock:5,

},
{
    title:"tijera de corte ",
    categoria: "tijeras",
    precio: 2000,
    descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga harum hic assumenda exercitationem iusto dolore quae accusantium sed corporis.",  
    img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/758/494/products/tijera-profesional-55-jaguar-pre-style-relax-slice1-639c68b0f9f0cf645e16847678490540-640-0.webp",
    stock:3,

},
{
    title:"tijera de corte ",
    categoria: "tijeras",
    precio: 2000,
    descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga harum hic assumenda exercitationem iusto dolore quae accusantium sed corporis.",  
    img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/758/494/products/tijera-profesional-55-jaguar-pre-style-relax-slice1-639c68b0f9f0cf645e16847678490540-640-0.webp",
    stock:5,

},
{
    title:"tijera de corte ",
    categoria: "tijeras",
    precio: 2000,
    descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga harum hic assumenda exercitationem iusto dolore quae accusantium sed corporis.",  
    img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/758/494/products/tijera-profesional-55-jaguar-pre-style-relax-slice1-639c68b0f9f0cf645e16847678490540-640-0.webp",
    stock:5,

},
{
    title:"tijera de corte ",
    categoria: "tijeras",
    precio: 2000,
    descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga harum hic assumenda exercitationem iusto dolore quae accusantium sed corporis.",  
    img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/758/494/products/tijera-profesional-55-jaguar-pre-style-relax-slice1-639c68b0f9f0cf645e16847678490540-640-0.webp",
    stock:5,

},
];

import { collection, doc, getDocs, getDoc,addDoc, where, query } from "firebase/firestore";
import { db } from "./config";

const productsRef = collection(db, "items");


export const getProducts = async (categoria) => {
    const q  = categoria
    ? query(productsRef, where('categoria','==', categoria))
    :productsRef;
    
    let products = [];
    const querySnapshop = await getDocs (q);
    querySnapshop.forEach((doc)=> {
    products =  [...products, {...doc.data(), id: doc.id}];
    });
    return products;
};

export const getProduct = async (id) => {
    const document = doc(db, "items", id);
    const docSnap = await getDoc(document);

    if(docSnap.exists()) return {id: docSnap.id, ...docSnap.data()} ;

    return null;
};

export const cargarData = async () => {
    products.forEach(async(product)=>{
        await addDoc(productsRef,product)
    })
}