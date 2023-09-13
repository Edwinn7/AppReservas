import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function regsiterUser(ev){
        ev.preventDefault();
        try{
            await axios.post('/register',{
                name,
                email,
                password,
            });
            alert('Resgistro exitoso')
    
        }catch (e){
            alert('Resgistro fallido')
        }
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Registrarse</h1>
                <form className="max-w-md mx-auto" onSubmit={regsiterUser}>
                    <input type="text" placeholder="Edwin Nieto" value={name} onChange={ev => setName(ev.target.value)} />
                    <input type="email" placeholder="Correo electronico" value={email} onChange={ev => setEmail(ev.target.value)} />
                    <input type="password" placeholder="Contraseña" value={password} onChange={ev => setPassword(ev.target.value)} />
                    <button className="primary">Registrarse</button>
                    <div className="text-center py-2 text-gray-500">
                        Ya tienes una cuenta? <Link className="underline text-black" to={'/login'}>Iniciar sesion</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}