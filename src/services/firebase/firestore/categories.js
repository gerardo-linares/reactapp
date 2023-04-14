
import { db } from "../firebaseConfig"
import { collection, query, getDocs, orderBy} from 'firebase/firestore'



//navBar//
export const getCategoriesRef = () =>{

    return new Promise((resolve, reject) =>{
    
        const categoriesRef = query(collection(db, 'categories'), orderBy('order'))
        
        getDocs(categoriesRef)
        .then(snapshot =>{
            const categoriesAdapted = snapshot.docs.map(doc =>{
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            resolve(categoriesAdapted)
        })
        .catch(error => {
            reject(error)
        })
    })
    
    } 