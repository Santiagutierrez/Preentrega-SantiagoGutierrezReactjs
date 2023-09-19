import { useState } from "react";
import './ContactForm.css'

function ContactForm() {
    const [formData, setFormData] = useState ({
        nombre: '',
        email: '',
        mensaje: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h1>Contacto</h1>
            <div className="box-p">
                <p className="p">CONSULTAS VENTA ONLINE: ventaonline@roparevolver.com</p>
                <p className="p">CONSULTAS LOCAL: local@roparevolver.com</p>
                <p className="p">MAYORISTA: federico@roparevolver.com</p>
                <p className="p">PRENSA: josefina@roparevolver.com</p>
                <p className="p">PROPUESTAS COMERCIALES: malena@roparevolver.com</p>
                <p className="p">TRABAJÁ CON NOSOTROS: labor@roparevolver.com</p>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <p className="form-title">Dejanos tu comentario en caso de duda</p>
                <label htmlFor="nombre">Nombre:</label>
                <input className="form-text" type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required/> <br/>
                <label htmlFor="email">Email:</label>
                <input className="form-text" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/> <br/>
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea className="form-text" type="mensaje" id="mensaje" name="mensaje" value={formData.email} onChange={handleChange} rows="4" required></textarea> <br/>
                
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default ContactForm;