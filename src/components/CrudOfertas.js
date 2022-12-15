import React, { useState, useEffect } from 'react'
import { Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter, } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'
import ModalOfertar from './ModalOfertar';
import { database3 } from "../firebase-config";

import { set, ref, getDatabase, child, get, onValue } from "firebase/database"
import { v4 as uuidv4 } from 'uuid';
const data = [
    { id: 1, usuario: "Naruto", correo: "sebarem723@gmail.com" },
    { id: 2, usuario: "Goku", correo: "sebarem723@gmail.com" },
    { id: 3, usuario: "Asta", correo: "sebarem723@gmail.com" },
    { id: 4, usuario: "Monkey D. Luffy", correo: "sebarem723@gmail.com" },
    { id: 5, usuario: "Edward Elric", correo: "sebarem723@gmail.com" },
    { id: 6, usuario: "Seto Kaiba", correo: "sebarem723@gmail.com" },
];



function CrudOfertas({id}) {
    const [listaSubasta, setListaSubasta] = useState([]);

    const getAvances = async () => {
      let proyectos = []
      const refdb = ref(database3, 'ofertas');
      onValue(refdb, (snapshot) => {
        snapshot.forEach(childSnapshot => {
          let keyName = childSnapshot.key;
          let data = childSnapshot.val();
          console.log(data);
          proyectos.push({ "key": keyName, "data": data })
        });
        setListaSubasta(proyectos);
      })
    };
  
    useEffect(() => {
      getAvances();
    }, []);

    const datitos = [];

    {
        listaSubasta.map((a => {
            if(a.data.productoRef == id){
                var datos = {
                    id: a.key,
                    oferta: a.data.oferta,
                
                }
                datitos.push(datos);

            }
            
        }))
    }


    const tableStyles = {
        color: 'white',
        backgroundColor: '#CA6F1E'
    }
    return (
        <div>
            <Table>
                <thead style={tableStyles} >
                    <tr>
                    <th>ID</th>
                        <th>Oferta</th>

                    </tr>
                </thead>

                <tbody>
                    {datitos.map((dato) => (
                        <tr key={dato.id}>
                            <td><a>{dato.id} </a></td>
                            <td><a>{dato.oferta} </a></td>
                        </tr>
                        
                    ))}
                </tbody>
            </Table>



        </div>
    )
}

export default CrudOfertas