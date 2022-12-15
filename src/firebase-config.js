import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAQtq5PM-rJsgGi9TgrDhxAJddw9szS1CI",
    authDomain: "auctionwars-1ddf5.firebaseapp.com",
    projectId: "auctionwars-1ddf5",
    storageBucket: "auctionwars-1ddf5.appspot.com",
    messagingSenderId: "837591953181",
    appId: "1:837591953181:web:ac84e38f805892ba0e7bf4",
    measurementId: "G-4QF0XZ8LFW"
};


const app1 = initializeApp({
    apiKey: "AIzaSyAQtq5PM-rJsgGi9TgrDhxAJddw9szS1CI",
    authDomain: "auctionwars-1ddf5.firebaseapp.com",
    projectId: "auctionwars-1ddf5",
    storageBucket: "auctionwars-1ddf5.appspot.com",
    messagingSenderId: "837591953181",
    appId: "1:837591953181:web:ac84e38f805892ba0e7bf4",
    measurementId: "G-4QF0XZ8LFW",
    databaseURL: "https://auctionwars-1ddf5-default-rtdb.firebaseio.com/"
  }, 'auctionwars-1ddf5-default-rtdb');
  
  const app2 = initializeApp({
    databaseURL: "https://auctionwars-1ddf5.firebaseio.com/"
  }, 'auctionwars-1ddf5');
  
  const app3 = initializeApp({
    databaseURL: "https://auctionwars-1ddf5-2a7a4.firebaseio.com/"
  }, 'auctionwars-1ddf5-2a7a4');



  // Get the default database instance for an app1
  //export const database1 = getDatabase(app1);
  
  // Get a database instance for app2
  export const database2 = getDatabase(app2);


  // Get a database instance for app3
export const database3 = getDatabase(app3);


const app = initializeApp(firebaseConfig);
export const database = getDatabase(app1);
