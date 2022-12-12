import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { ModalBody } from 'react-bootstrap/esm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Swal from 'sweetalert2';


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

        Axios.post("http://localhost:3001/insertProducto", {
            producto: this.state.form.nombreEstudiante,
            inicial: this.state.form.correoEstudiante,


        }).then(() => {

            Swal.fire({
                title: 'El producto ha sido agregado con exito',
                text: 'Se ha agregado el producto correctamente.',
                imageUrl: 'https://img.freepik.com/vector-premium/tu-amigo-telefono-inteligente-tiene-mensaje-ti-personaje-telefono-dibujos-animados-icono-ilustracion-plana-aislado-blanco-carta-mensaje-enviado-telefono-movil_92289-502.jpg?w=740',
                imageWidth: '300px',
                imageAlt: 'Success',
                confirmButtonColor: '#03568d',

            })
            
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