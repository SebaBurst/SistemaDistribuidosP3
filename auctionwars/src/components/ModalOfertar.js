import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { ModalBody } from 'react-bootstrap/esm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Swal from 'sweetalert2';


class ModalOfertar extends React.Component {
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
        Axios.post("http://localhost:3001/insertOferta", {
            inicial: this.state.form.correoEstudiante,
            productoRef: this.props.id,
        }).then(() => {
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
                <Button style={botonescssw} onClick={() => this.handleModal()}> Ofertar</Button>
                <Modal show={this.state.showModal} onHide={() => this.handleModal()} >
                    <Modal.Header closeButton style={headercss}>
                        Ofertar Producto
                    </Modal.Header>
                    <Modal.Body>

                        A continuación podra ofertar por un producto de la plataforma
                        <form>
                            <div className="col-lg-8 col-sm-12 form-group pt-1 ">
                                <label style={{
                                    fontWeight: "bold",
                                    margin: "15px 2px"
                                }}>Precio a ofertar
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
export default ModalOfertar;