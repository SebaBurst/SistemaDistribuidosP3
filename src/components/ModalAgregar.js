import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { ModalBody } from 'react-bootstrap/esm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import {database2} from "../firebase-config";
import {set, ref} from "firebase/database"
import { v4 as uuidv4 } from 'uuid';

class ModalAgregar extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            form: {
                nombreEstudiante: '',
                correoEstudiante: '',

            },

        }

    }
    handleModal() {
        this.setState({ showModal: !this.state.showModal })
    }

    mandarCorreo() {
        const id = uuidv4();
        set(ref(database2, 'productos/' + id), {
            name: this.state.form.nombreEstudiante,
            price: this.state.form.correoEstudiante,
            status : 'alive'
          });
        


 
    
        window.location.reload();


    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        const modalStyles = {
            position: "absolute",
            top: '50%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, -50%)'
        }
        const headercss = {
            color: 'white',
            backgroundColor: '#3498db'
        }
        const footercss = {

            background: '#3498db',

        }
        const botonescss = {

            fontSize: '15px',

            background: 'white',
            border: 'rgb(255, 87, 51)',
            color: '#3498db',
            fontWeight: '600',
        }


        const botonescssw = {

            fontSize: '15px',
            color: 'white',
            border: 'rgb(255, 87, 51)',
            background: '#3498db',
            fontWeight: '600',
        }
        return (
            <>
                <Button style={botonescssw} onClick={() => this.handleModal()}> Agregar Subasta</Button>
                <Modal show={this.state.showModal} onHide={() => this.handleModal()} >
                    <Modal.Header closeButton style={headercss}>
                        Agregar producto a subastar
                    </Modal.Header>
                    <Modal.Body>

                        A continuación podra agregar un producto a la plataforma
                        <form>
                            <div className="col-lg-8 col-sm-12 form-group pt-1 ">
                                <label style={{
                                    fontWeight: "bold",
                                    margin: "15px 2px"
                                }}>Nombre del producto.
                                </label>
                                <input style={{
                                    width: "150%",
                                    borderColor: "#3498db"
                                }}
                                    type='text'
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="" cols="30" rows="8"
                                    name="nombreEstudiante">
                                </input>
                                <label style={{
                                    fontWeight: "bold",
                                    margin: "15px 2px"
                                }}>Precio Inicial del Producto.
                                </label>
                                <input style={{
                                    width: "150%",
                                    borderColor: "#3498db"
                                }}
                                    type='text'
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="" cols="30" rows="8"
                                    name="correoEstudiante">
                                </input>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer style={footercss} >
                        <Button style={botonescss} onClick={() => this.mandarCorreo()}> Agregar Producto </Button>
                        <Button style={botonescss} onClick={() => this.handleModal()}>Cerrar</Button>
                    </Modal.Footer>

                </Modal>
            </>
        )
    };

}
export default ModalAgregar;