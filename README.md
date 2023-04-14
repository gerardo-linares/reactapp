# ECOMMERCE APP

Esta es una aplicación de comercio electrónico desarrollada con **React** y **Firebase**. Permite a los usuarios ver una lista de productos, agregarlos al carrito de compras, agregar sus datos y realizar compras.

## INSTALACIÓN

Para utilizar esta aplicación, sigue los siguientes pasos:

1. Clona este repositorio en tu máquina local usando `git clone`.
2. En la raíz del proyecto, ejecuta `npm install` para instalar todas las dependencias.
3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias para la conexión con Firebase. Deberás incluir las siguientes variables:
   - **REACT_APP_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx**
   - **REACT_APP_AUTH_DOMAIN=xxxxxxxxxxxxx.firebaseapp.com**
   - **REACT_APP_DATABASE_URL=https://xxxxxxxxxxxxx.firebaseio.com**
   - **REACT_APP_PROJECT_ID=xxxxxxxxxxxxx**
   - **REACT_APP_STORAGE_BUCKET=xxxxxxxxxxxxx.appspot.com**
   - **REACT_APP_MESSAGING_SENDER_ID=xxxxxxxxxxxxx**
   - **REACT_APP_APP_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx**

   Puedes encontrar estos valores en la consola de Firebase en la sección Configuración de proyecto > General.
   
4. Ejecuta `npm start` para iniciar la aplicación.

## FUNCIONALIDADES

- **Lista de productos:** los usuarios pueden ver una lista de productos,con todos sus detalles.
- **Stock:** los usuarios pueden visualizar el stock real al momento de realizar el pedido.
- **Carrito de compras:** los usuarios pueden agregar productos a su carrito de compras.
- **Generar Orden:** los usuarios pueden registrarse en la aplicación proporcionando su nombre, número telefónico y correo electrónico.
- **Realizar compras:** los usuarios podran realizar una orden de compra para uno o más productos.

## TECNOLOGÍAS UTILIZADAS

- **React:** librería de JavaScript para la construcción de interfaces de usuario.
- **Firebase:** plataforma de desarrollo de aplicaciones móviles y web de Google que proporciona herramientas y servicios para la construcción de aplicaciones.
- **TailwindCSS:** framework de diseño web que proporciona componentes y estilos CSS predefinidos para la construcción de aplicaciones web.
