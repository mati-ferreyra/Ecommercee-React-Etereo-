const products = [
    {
        id: '1',
        nombre: 'Remera negra boxy fit',
        precio: 15000,
        category: 'remeras',
        img: 'https://i.ibb.co/mznbZ98/BLACK-FRONT.png',
        stock: 10,
        descripcion: 'Remera negra con corte boxy fit'
    },

    {
        id: '2',
        nombre: 'Musculosa TANK Blanca',
        precio: 10000,
        category: 'musculosas',
        img: 'https://i.ibb.co/4F1fZj6/WHITE-TANK-FRONT.png',
        stock: 10,
        descripcion: 'Musculosa blanca corte oversize'
    },

    {
        id: '3',
        nombre: 'Short Etereo Negro',
        precio: 12000,
        category: 'shorts',
        img: 'https://i.ibb.co/KWKjQz1/BLACK-WASHED-SHORTS.png',
        stock: 5,
        descripcion: 'Short Negro corte oversize'
    }


]


export const getProducts = ()  => {
    return new Promise ((resolve)  => {
        setTimeout(()  => {
            resolve(products)
        }, 500)
    })
}


export const getProductById = (productId)  => {
    return new Promise ((resolve)  => {
        setTimeout(() => {
            resolve (products.find(prod => prod.id === productId))
        }, 500)
    })
}


export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}
