import React, { useState, useEffect } from 'react'
import { Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter, } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalVerOfertas from './ModalVerOfertas';
import { database2 } from "../firebase-config";
import { set, ref, getDatabase, child, get, onValue, update} from "firebase/database"
import Countdown from 'react-countdown';





function iniciarSubasta({id, e}){
  console.log("id Recibido"+id)

}




function CrudSubastasAdmin() {
    const [listaSubasta, setListaSubasta] = useState([]);
    const getAvances = async () => {
        let proyectos = []
        const refdb = ref(database2, 'productos');
        onValue(refdb, (snapshot) => {
            snapshot.forEach(childSnapshot =>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                console.log(data);
                proyectos.push({"key": keyName, "data":data})
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
            var datos = {
                id: a.key,
                nombre: a.data.name,
                precio: a.data.price,
                estado: a.data.status,
                date: a.data.date,
            }
            console.log("Subastas: "+a.data.name, a.data.price);
            datitos.push(datos);

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
                        <th>Producto</th>
                        <th>Precio Inicial</th>
                        <th>Iniciar</th>
                        <th>Terminar</th>
                        <th>Ver Ofertas</th>


                    </tr>
                </thead>

                <tbody>
                    {datitos.map((dato) => (
                        <tr key={dato.id}>
                            <td><a>{dato.id} </a></td>
                            <td><a>{dato.nombre} </a></td>
                            <td><a>{dato.precio} </a></td>
                            <td><Button onClick={(e) => this.handleClick(dato.id, e)} >Iniciar</Button></td>
                            <td><Button>Terminar</Button></td>
                            <td><ModalVerOfertas
                                id={dato.id}
                            /></td>

                        </tr>
                    ))}
                </tbody>
            </Table>

     


        </div>
    )
}

export default CrudSubastasAdmin