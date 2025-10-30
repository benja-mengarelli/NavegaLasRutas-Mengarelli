import { useState } from "react";

export default function FormComprador(props) {

    const [formData, setFormData] = useState({
        username: "", phone: "", email: ""
    })

    function handleSubmit(event) {
        event.preventDefault();
        props.handleCheckout(formData)
    }

    function handleInputChange(event) {
        const value = event.target.value;
        const inputName = event.target.name;
        // phone / 123123
        // ? formData.username ===  formData["username"]
        const newFormData = { ...formData }
        newFormData[inputName] = value;
        setFormData(newFormData)
    }

    function resetForm() {
        setFormData({
            username: "", phone: "", email: ""
        })
    }

    return (
        <div>
            <h4>Completa tus datos</h4>
            <form onSubmit={handleSubmit} >
                <label>Nombre
                    <input
                        value={formData.username}
                        onChange={handleInputChange}
                        name="username"
                        type="text"
                        placeholder="Facundo"
                        required
                    />
                </label>

                <label>Email
                    <input
                        value={formData.email}
                        onChange={handleInputChange}
                        name="email"
                        type="email"
                        placeholder="mail@mail.com"
                        required />
                </label>

                <label>Teléfono
                    <input
                        value={formData.phone}
                        onChange={handleInputChange}
                        name="phone"
                        type="tel"
                        placeholder="123"
                        required />
                </label>

                <button type="submit">Enviar</button>
                <button type="button" onClick={resetForm}>Reiniciar formulario</button>
            </form>
        </div>
    );
}