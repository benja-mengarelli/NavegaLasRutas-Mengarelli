import productos from './Productos'

function getMockAPIData() {
    const promiseProducts = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })

    return promiseProducts;
}

export function getProductById(idRequested) {
    const reqItem = productos.find((item) => item.id === Number(idRequested))

    const promiseProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (reqItem) {
                resolve(reqItem)
                console.log("Item devuelto... ", reqItem)
            }
            else {
                reject("Item no encontrado")
            }
        }, 500)
    })
    return promiseProduct
}

export function getProductsByCateg(categRequested) {
    const productsFilter = productos.filter(item => item.categoria === categRequested);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productsFilter.length >= 1) {
                resolve(productsFilter)
            }
            else {
                console.log("No se encontraron items" /* item.category */ /* categRequested */)
                reject("No encontramos items para esa categoría")
            }
        },1200)
    })
}

export default getMockAPIData;