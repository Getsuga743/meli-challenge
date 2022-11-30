# Mercado libre challenge - Ivan Maier Gallardo

##  Estructura:
El repositorio contiene dos carpetas principales **server y client**.
Para arrancar el proyecto desde la carpeta principal:

> **cd server npm run dev** 

> **cd client npm run dev**

	Revisar el .env.example de cada carpeta. Definir un .env en server con el puerto donde
	el servidor de express va a escuchar. 
	En el .env del cliente, definir la url donde va a correr la api.	

## Sobre la api:

Esta hecha con express, decidí utilizar una arquitectura limpia, basada en middlewares para gestionar validaciones,(con la libreria joi), manejo de errores, además de controladores para cada endpoint, los cuales consumen MercadoLibreService.

## Sobre el front:

Como bundler utilicé webpack, pese a que ya empiezan a ver alternativas modernas, sigue siendo muy robusto.
En cuanto a estilos, decidí utilizar sass con css modules. Frente a soluciones de Css in Js, aporta rendimiento, el no tener colisiones de estilos, y todos los superpoderes que ofrece Sass.
Como router utilicé react router v5, es con el cuál estoy familiarizado.
Se implementó una estructura de componentes basada en atomic design (atoms,molecules,organisms, y pages).
Axios como librería para hacer requests.
Se implementó un archivo con distintas funciones que consumen nuestra api. Estás se usan dentro de un conjunto de customs Hooks que se encargar de fetchear y handlear la data.
Opté por utilizar context como solucion de estado global.

## Disclaimers:
No seguí ningun flujo de git específico. de tener que utilizar uno hubiera optado por feature branching, que es con el cual estoy familiarizado.
Dado a limitaciones de tiempo, no llegué a implementar tests, pero los dos proyectos cuentan con jest como test runner, ademas de react testing library para el front, y super test para el back.
Pese a implementar webpack, no implementé una configuración de ssr, consideré que para el objetivo del challenge era mucho overload. Pero creo que hubiera sido un gran add-on para la experiencia de usuario. Tambíen me faltó afinar detalles referentes al loading de los componentes y el manejo de las urls a la hora de paginar.

No estoy contento con la estructura final de los endpoints, eso es algo que me gustaría revisar en mayor profundidad. Opté por dividir las request en el flujo de /profile , tratando de cargar los datos del user + nivel primero, para así con los datos del user poder obtener el listado de compras, y las restricciones.
Para el detalle de la compra, opté por hacer una sola request.

