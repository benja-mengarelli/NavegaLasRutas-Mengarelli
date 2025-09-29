import Item from '../Cards/Card';
import getMockAPIData, { getProductsByCateg } from '../../data/SimularAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './ItemListContainer.css';


export default function ItemListContainer(args) {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const { categParam } = useParams();

    useEffect(() => {
        setIsLoading(true)

        if (categParam) {
            getProductsByCateg(categParam)
                .then(productsByCateg => setProducts(productsByCateg))
                .catch(error => alert(error + " - No se pudo cargar la categoría solicitada", categParam))
                .finally(() => setIsLoading(false))
                console.log("parametro de categoría: ", categParam)
        }
        else {
            getMockAPIData()
                .then((productList) => {
                    console.log("Datos recibidos en ItemListContainer", productList);
                    setProducts(productList);
                })
                .catch((error) => {
                    console.log("Error solicitando los datos", error);
                    alert("Algo salió mal buscando los productos")
                })
                .finally(() => {
                    console.log("GetMockAPIData finalizada")
                    setIsLoading(false)
                })
        }

    }, [categParam])


    return (
        <>
            <div className="item-list-container">
                <h2>{args.titulo}</h2>
                {isLoading
                    ? <p className="item-list-container__loading">Cargando...</p>
                    : ""}
                <div>
                    <h4>Nuestros productos</h4>
                    <div className="item-list">
                        {products.map(item => (
                            <Item
                                key={item.id}
                                id={item.id}
                                title={item.nombre}
                                imgURL={item.imagenURL}
                                price={item.precio}
                            />
                        ))}

                    </div>
                </div>
            </div><div>
                <h1></h1>
            </div>
        </>
    )
}