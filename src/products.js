

const products =[
    {id:1,title:'Amd Ryzen 7 3800XT 4.7 Ghz',description:'Microprocesador AMD de 8 Nucleos',price:47500,pictureURL:'/images/Procesador Amd Ryzen 7 3800XT 4.7 Ghz.jpeg',stock:9},
    {id:2,title:'Amd Ryzen 7 5800X 4.7 Ghz',description:'Microprocesador AMD de 8 Nucleos',price:57500,pictureURL:'/images/procesador Amd Ryzen 7 5700G 4.6 Ghz.jpeg',stock:10},
    {id:3,title:'Msi A320M PRO VH',description:'Placa Madre MSI para micros AMD',price:6200,pictureURL:'/images/Msi A320M PRO VH.jpeg',stock:5}
]

export const getProducts =() =>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}