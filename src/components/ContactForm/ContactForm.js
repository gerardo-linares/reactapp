import { useState } from "react"


const ContactForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            name,
            phone,
            email,
        }
        onConfirm(userData)
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 w-sm md:w-[500px] mx-auto">
            <label htmlFor="name" className="block font-medium mb-1">Nombre</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-gray-300 border focus:outline-none focus:ring-primary focus:ring-1 rounded-md p-2 mb-4 w-full"
            />
            <label htmlFor="phone" className="block font-medium mb-1">Telefono</label>
            <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-gray-300 border focus:outline-none focus:ring-primary focus:ring-1 rounded-md p-2 mb-4 w-full"
            />
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-gray-300 border focus:outline-none  focus:ring-primary focus:ring-1 rounded-md p-2 mb-4 w-full"
            />

        </form>
    )
}

export default ContactForm
