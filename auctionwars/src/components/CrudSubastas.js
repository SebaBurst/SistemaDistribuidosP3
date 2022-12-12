import React, { useState, useEffect } from 'react'
import { Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter, } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'
import ModalOfertar from './ModalOfertar';

const data = [
    { id: 1, usuario: "Naruto", correo: "sebarem723@gmail.com" },
    { id: 2, usuario: "Goku", correo: "sebarem723@gmail.com" },
    { id: 3, usuario: "Asta", correo: "sebarem723@gmail.com" },
    { id: 4, usuario: "Monkey D. Luffy", correo: "sebarem723@gmail.com" },
    { id: 5, usuario: "Edward Elric", correo: "sebarem723@gmail.com" },
    { id: 6, usuario: "Seto Kaiba", correo: "sebarem723@gmail.com" },
];



function CrudSubastas() {
    const [listaSubasta, setListaSubasta] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3001/getSubastas").then((response) => {
            setListaSubasta(response.data)
        });

    }, []);





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
                        <th>Ofertas Actuales</th>
                        <th>Ofertar</th>

                    </tr>
                </thead>

                <tbody>
                    {listaSubasta.map((dato) => (
                        <tr key={dato.id}>
                            <td><a>{dato.id} </a></td>
                            <td><a>{dato.producto} </a></td>
                            <td><a>{dato.inicial} </a></td>

                            <td><Button>Ver Ofertas</Button></td>
                            <td><ModalOfertar
                                id = {dato.id}
                                />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </Table>



        </div>
    )
}

export default CrudSubastas