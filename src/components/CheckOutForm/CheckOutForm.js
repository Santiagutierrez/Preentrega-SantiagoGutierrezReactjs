import { useState } from "react"

const CheckOutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div>
            <form onSubmit={handleConfirm}>
                <label>
                    Nombre
                    <input type="text" value={name} onChange={({ target }) => setName(target.value)}/>
                </label>
                <label>
                    Telefono
                    <input type="text" value={phone} onChange={({ target }) => setPhone(target.value)}/>
                </label>
                <label>
                    Email
                    <input type="text" value={email} onChange={({ target }) => setEmail(target.value)}/>
                </label>
                <div>
                    <button type="submit">
                        Crear orden
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CheckOutForm