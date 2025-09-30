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
        }
        else {
            getMockAPIData()
                .then((productList) => {
                    setProducts(productList);
                })
                .catch((error) => {
                    alert("Ocurrió un error: " + error)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }, [categParam])


    return (
        <>
            <div className="item-list-container">
                <h2>{args.titulo}</h2>
                {isLoading
                    ? <div className="item-list-container__loading"><p>Cargando 🤘</p></div>
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
                                category={item.categoria}
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