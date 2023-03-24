

const products =[
    {
        id: '1',
        name: ' Cuadro de Tiburones',
        price: 1300,
        category: 'Hogar',
        img:'https://i.postimg.cc/c4Ccrv2L/deco-sharks.jpg',
        stock:'10',
        description:'Cuadro impreso en 3D, Material PLA, 200mm x 200mm - Disponible en varios colores',

    },
    {
        id: '2',
        name: 'Cuadro de Montañas',
        price: 1300,
        category: 'Hogar',
        img:'https://i.postimg.cc/RFPHBRMQ/deco-mountains.jpg',
        stock:'11',
        description:'Cuadro impreso en 3D, Material PLA, 200mm x 200mm - Disponible en varios colores',

    },

    {
        id: '3',
        name: 'Wolverine',
        price: 2400,
        category: 'Figuras',
        img:'https://i.postimg.cc/2jM0JSwB/coleccion-wolverine.jpg',
        stock:'10',
        description:'Figura impresa en 3D, Material PLA, 6mm x 12mm - Sin pintar',

    },
    {
        id: '4',
        name: 'Spiderman',
        price: 2400,
        category: 'Figuras',
        img:'https://i.postimg.cc/0QNJc9SW/coleccion-spiderman.jpg',
        stock:'11',
        description:'Figura impresa en 3D, Material PLA, 6mm x 12mm - Sin pintar',

    },

    {
        id: '5',
        name: 'Lampara de Monos',
        price: 2900,
        category: 'Personalizados',
        img:'https://i.postimg.cc/nryMFSN7/personalizado-monkey.jpg',
        stock:'12',
        description:'Lampara impresa en 3D, Material PLA, 8mm x 16mm - Disponible en varios colores',

    },

    {
        id: '6',
        name: 'Lampara Articulada',
        price: 4200,
        category: 'Personalizados',
        img:'https://i.postimg.cc/SQJdDZ7G/personalizado-lamp.webp',
        stock:'11',
        description:'Lampara impresa en 3D, Material PLA, 6mm x 16mm - Disponible en varios colores',

    },



]
export const getProducts = ()=> {
    return new Promise(( resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 1000)

    })

}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(products => products.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(products => products.id === productId))
        }, 1000)
    })
}