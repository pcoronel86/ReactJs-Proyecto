const products =[
    {id:1,title:'Amd Ryzen 7 3800XT 4.7 Ghz',description:'Microprocesador AMD de 8 Nucleos',category: 'microprocesadores', price:47500,pictureURL:'/images/Procesador Amd Ryzen 7 3800XT 4.7 Ghz.jpeg',stock:9},
    {id:2,title:'Amd Ryzen 7 5800X 4.7 Ghz',description:'Microprocesador AMD de 8 Nucleos',category: 'microprocesadores', price:57500,pictureURL:'/images/procesador Amd Ryzen 7 5700G 4.6 Ghz.jpeg',stock:10},
    {id:3,title:'Msi A320M PRO VH',description:'Placa Madre MSI para micros AMD',category: 'mothers', price:6200,pictureURL:'/images/Msi A320M PRO VH.jpeg',stock:5}
]
const categories = [
    {id:'microprocesadores',description:'Microprocesadores'},
    {id:'placas de video',description:'Placas de video'},
    {id:'mothers',description:'Mothers'},
    {id:'memorias Ram',description:'Memorias Ram'}
]

export const getCategories = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)        
    })
}

export const getProducts =(category) =>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
           category ? resolve(products.filter(product => product.category === category )) : resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 1000)
    })
}

export const getItem = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products[1])
        }, 1000)
    })
}