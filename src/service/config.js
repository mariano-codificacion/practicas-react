import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
//Vamos a importar estas dos funciones de la librería Firebase. 
//initializeApp = esta función la utilizo para INICIAR LA CONEXIÓN CON FIREBASE. 
//getFirestore = se utiliza para obtener una instancia de Firestore. 


//Estamos trabajando con un objeto con toda nuestra información de la cuenta. Acá se incluye la Key personal de acceso a la BD. 
const firebaseConfig = {
  apiKey: "AIzaSyAb6WujJFu1IvpbYm-1R0MG9OLI0Lcqfk8",
  authDomain: "coderhouse-cb09b.firebaseapp.com",
  projectId: "coderhouse-cb09b",
  storageBucket: "coderhouse-cb09b.appspot.com",
  messagingSenderId: "900013485643",
  appId: "1:900013485643:web:d1ed9deb28650f471c67ce"
};


//Inicializamos Firebase y se pasa la configuración como argumento. Esto devuelve una instancia de Firebase. 
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 
//Exportamos esta referencia para que este disponible en toda nuestra aplicación. 