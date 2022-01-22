# COMPUNOR
La aplicacion se centrara en un eCommence para componentes de computadoras
# Tecnologia utilizada
+CSS
+JS
+HTML
# Framework adicionales
+Semantic UI React
+Material Icon
+React Bootstrap
# Clonar repositorio
+git clone *URL del Proyecto*
# Instalar dependencias
+npm install
# Ejecutar proyecto
+npm start
# BackEnd
El backend esta desarrollado en firestore, en la misma se alojan 3 tipos de archivos:
- /items: en esta direccion guardaremos un archivo con todos los 	datos del producto, con la siguiente estructura

		1. id: String(autogenerado por firestore)
		2. category: String
		3. description: String
		4. pictureUrl: String
		5. price: Number
		6. stock: Number
		7. title: String

- /orders: en esta direccion guardaremos los datos de las ordenes realizadas con la siguiente estructura

		1. id: String(autogenerado por firestore)
		2. buyer: object [mail:String, name:String, phone:String, address:String]
		3. items: ArrayProducts
		4. total: String

- /categorys: en este directorio alojaremos archivos correspondientes a las diferentes categorias de productos con la siguiente estructura:

		1. id: String
		2. description: String

# Componentes
Los componentes del aplicativo estan divididos en diferentes carpetas ubicadas en la raiz "components":
- NavBar: contiene 2 componentes "CartWidget" y el "NavBar"
- Cart: contiene 2 componentes "Cart" en el se desarrolla el carrito de compras del usuario, "ContactForm" en el se desarrolla un formulario que pido el ingreso de datos necesarios para crear la orden.
- ItemListContainer: se encarga de consultar todos los productos y pasarselos al "ItemList"
- ItemList: requiere un array de productos, se encarga de hacer un map y pasarle los datos al "Item"
- Item: este componente recibe todos los datos requeridos para renderizar un producto en pantalla (previsualizacion del producto)
- ItemDetailContainer: dado un ID de producto se encarga de obtener toda la informacion necesaria para renderizar el detalle de un producto, este componente pasa dicha informacion al componente "ItemDetail"
- ItemDetail: este componente se encarga de renderizar los datos otorgados por el "ItemDetailContainer", este componente implementa el "ItemCount"
- ItemCount: se encarga de validar stock del producto y permite contar la cantidad de productos a agregar
# Contextos
En el proyecto se realizo un contexto alojado en src/context, el cual se detallara a continuacion:

 CartContext: En este contexto guardamos los datos necesarios de los productos para realizar la orden del cliente, detallaremos a continuacion las funciones y estados exportados:
		1. cart: aca se esportara el array de productos que el cliente sumo al carrito
		2. addItem: Esta funcion nos permite agregar un item al contexto
		3. removeItem: Esta funcion nos permite remover un item especifico del carrito
		4. cleanCart: esta funcion nos borra todos los datos del contexto
		5. isInCart: con esta funcion podremos saber si un producto ya se encuentra en el carrito
		6. getCantidad: devuelve la cantidad de productos 
		7. obtenerTotal: esta funcion devuelve el precio total de la orden
				
		
# Servicios
Solo tenemos declarados un servicio alojado en src/service/firebase, en el mismo inicializamos la conexion con firebase.

The database used is:

- Firebase

### `.env`

Add an .env with the firebase data to make the app work.

## Text for example

-   REACT_APP_apiKey=AIzaSyDuBseTCwSLWUAu5cOS0tSaF83yl6PkVrc
-   REACT_APP_authDomain=proyecto-final-reactjs-e04c8.firebaseapp.com
-   REACT_APP_projectId=proyecto-final-reactjs-e04c8
-   REACT_APP_storageBucket=proyecto-final-reactjs-e04c8.appspot.com
-   REACT_APP_messagingSenderId=87023639901
-   REACT_APP_appId=1:87023639901:web:67189fd43cb8185651dcb4