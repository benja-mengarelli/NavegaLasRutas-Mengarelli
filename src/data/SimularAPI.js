import productos from './Productos'

function getMockAPIData() {
    const promiseProducts = new Promise((resolve) => {
        setTimeout(() => {
            console.log("Resolviendo getMockAPIData... con productos", productos)
            resolve(productos)
        }, 200)
    })

    return promiseProducts;
}

export function getProductById(idRequested) {
    const reqItem = productos.find((item) => item.id === Number(idRequested))

    const promiseProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Devolviendo item...", reqItem)
            // * Rechazar la promesa si no se encuentra el producto
            if (reqItem) {
                resolve(reqItem)
                console.log("Item devuelto... ", reqItem)
            }
            else {
                reject("Item no encontrado")
            }
        }, 200)
    })
    return promiseProduct
}

export function getProductsByCateg(categRequested) {
    const productsFilter = productos.filter(item => item.categoria === categRequested);
    console.log("Productos filtrados por categoría...", productsFilter)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productsFilter.length >= 1) {
                console.log("Productos devueltos...", productsFilter)
                resolve(productsFilter)
            }
            else {
                console.log("No se encontraron items" /* item.category */ /* categRequested */)
                reject("No encontramos items para esa categoría")
            }
        }, 200)
    })
}

export default getMockAPIData;