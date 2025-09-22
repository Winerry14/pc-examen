* PC Examen

Este proyecto fue hecho en React como parte del examen de Programación de Componentes en IPLACEX.  
La idea fue ir resolviendo 3 ejercicios que combinan React con Firebase y Bootstrap, y finalmente dejar la aplicación funcionando en línea.

* Ejercicio 1
Primero trabajé con componentes en React. Creé un componente padre que maneja la lista de productos y un componente hijo que muestra cada producto con su botón.  
Usé `map()` para renderizar los productos y la comunicación entre padre e hijo se resolvió con props y callbacks.  
Además, agregué un carrito que se actualiza usando el estado (`state`).

* Ejercicio 2
Después me enfoqué en un formulario. Lo armé con React y le agregué validaciones usando la librería **react-simple-validator**.  
El formulario quedó conectado a **Firebase Firestore**, de manera que los datos que se completan quedan guardados en la base de datos en la nube.

* Ejercicio 3
En la última parte, le di estilo a todo con **Bootstrap** para que se viera más ordenado.  
También implementé **Firebase Auth** para el login y registro de usuarios, y **Firebase Storage** para subir archivos.  
El proyecto quedó desplegado en **Netlify**, por lo que se puede probar online.

* Tecnologías utilizadas
- React  
- Firebase (Auth, Firestore, Storage)  
- Bootstrap  
- Netlify  

* Cómo probar el proyecto en local
1. Clonar el repositorio:  
   ```bash
   git clone https://github.com/Winerry14/pc-examen

2. Instalar dependencias
   ```bash
   npm install
3. Ejecutar el servidor
   ```bash
   npm start
