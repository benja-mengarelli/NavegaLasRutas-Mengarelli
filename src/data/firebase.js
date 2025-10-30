import { initializeApp } from "firebase/app";
import { doc, query, where, getDocs, getDoc, collection, addDoc, getFirestore } from "firebase/firestore";
import productos from "./Productos"

const firebaseConfig = {
    apiKey: "AIzaSyAHSXAxY6W77tguTMN_HdVoKEd3JBoMO7M",
    authDomain: "mengarelli-proy-ch.firebaseapp.com",
    projectId: "mengarelli-proy-ch",
    storageBucket: "mengarelli-proy-ch.firebasestorage.app",
    messagingSenderId: "812724497073",
    appId: "1:812724497073:web:e80e10ead81cdc5dc7d090"
};

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

const delayPantallaCarga = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getProductos() {
    try {

        // Referencia a la colección "productos"
        const refProductos = collection(dataBase, "productos")

        // Obtener los documentos de la colección y verificar si existen
        const querySnapshot = await getDocs(refProductos);

        await delayPantallaCarga(1000);

        if (querySnapshot.empty) {
            console.log("No se encontraron productos en la colección.");
            return [];
        }
        else {
            // Guardar cada documento en un array
            const Prod = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            });
            return Prod;
        }
    }
    catch (error) {
        console.log("Error al cargar los productos: ", error);
    }
}

export async function getProductById(idParam) {
    try {
        // Referencia al documento específico en la colección "productos"
        const refProducto = doc(dataBase, "productos", idParam);
        // Snapshot del documento
        const docSnap = await getDoc(refProducto);

        await delayPantallaCarga(500);

        if (docSnap.exists()) {
            const documento = docSnap.data();
            documento.id = docSnap.id;
            return documento;

            return { id: docSnap.id };
        }
        else {
            throw new Error("Producto no encontrado");
        }
    }
    catch (error) {
        console.log("Error al cargar el producto: ", error);
    }
}

export async function getProductsByCateg(categParam) {
    try {
        delayPantallaCarga();
        // Referencia a la colección "productos"
        const refProductos = collection(dataBase, "productos");

        // Crear una consulta para filtrar por categoría
        const consulta = query(refProductos, where("categoria", "==", categParam));
        const querySnapshot = await getDocs(consulta);

        await delayPantallaCarga(1200);

        if (querySnapshot.empty) {
            console.log("No se encontraron productos en la categoría solicitada.");
            return [];
        }
        else {
            const prodBuscado = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            });;
            return prodBuscado;
        }
    }
    catch (error) {
        console.log("Error al cargar los productos por categoría: ", error);
    }
}

export async function createOrder(orderData) {
    const ordersRef = collection(db, "orders");
    const newDoc = await addDoc(ordersRef, orderData)
    return newDoc;
}

/* export async function cargarProductos() {
    const refProductos = collection(dataBase, "productos")
    for (let producto of productos) {
        delete producto.id
        const doc = await addDoc(refProductos, producto)
        console.log("Producto creado con ID: ", doc.id);
    }
 
} */
export default app