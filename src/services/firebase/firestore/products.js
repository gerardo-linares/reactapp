import { db } from "../firebaseConfig"
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore'
import { createAdapterProductsFromFirestore } from "../../../adapters/createAdapterProductsFromFirestore"




// ItemListContainer//
export const getProducts = (categoryId) => {

    return new Promise((resolve, reject) => {
        const productsRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(productsRef)
            .then(snapshot => {
                const productsAdapted = snapshot.docs.map(doc => {
                    return createAdapterProductsFromFirestore(doc)
                })
                resolve(productsAdapted)
            })
            .catch(error => {
                reject(error)
            })
    })
}

//itemDetailContainer//
export const getProductById = (itemId) => {

    return new Promise((resolve, reject) => {

        const productRef = doc(db, 'products', itemId)
        getDoc(productRef)
            .then(snapshot => {
                const productsAdapted = createAdapterProductsFromFirestore(snapshot)
                resolve(productsAdapted)
            })
            .catch(error => {
                reject(error)
            })
    })
}

