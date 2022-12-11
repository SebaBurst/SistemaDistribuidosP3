import React from 'react'
import { Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter, } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const data = [
    { id: 1, usuario: "Naruto", correo: "sebarem723@gmail.com" },
    { id: 2, usuario: "Goku", correo: "sebarem723@gmail.com" },
    { id: 3, usuario: "Asta", correo: "sebarem723@gmail.com" },
    { id: 4, usuario: "Monkey D. Luffy", correo: "sebarem723@gmail.com" },
    { id: 5, usuario: "Edward Elric", correo: "sebarem723@gmail.com" },
    { id: 6, usuario: "Seto Kaiba", correo: "sebarem723@gmail.com" },
];



function CrudSubastas() {
    const tableStyles = {
        color: 'white',
        backgroundColor: '#CA6F1E'
    }
    return (
        <div>
            <Table>
            <thead style={tableStyles} >
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio Inicial</th>
                                    <th>Ofertas Actuales</th>
                                    <th>Ofertar</th>

                                </tr>
                            </thead>

                <tbody>
                    {data.map((dato) => (
                        <tr key={dato.id}>
                            <td><a>{dato.usuario} </a></td>
                            <td><a>{dato.correo} </a></td>
                            <td><Button>Ver Ofertas</Button></td>
                            <td><Button>Realizar una oferta</Button></td>

                        </tr>
                    ))}
                </tbody>
            </Table>



        </div>
    )
}

export default CrudSubastas