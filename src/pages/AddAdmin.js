import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import "./css/AddAdmin.css"
import { useAlert } from 'react-alert'

export default function AddAdmin({ url, onLogout }) {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const alert = useAlert()

    //Authentication
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            setIsAuthorized(true);
        } else {
            onLogout();
        }
    }, [])

    function addAdmin(e) {
        e.preventDefault()

        // Varmistetaan, että kaikissa inputeissa on sisältöä
        if (!firstname || !lastname || !email || !password) {
            setError('Täytä kaikki kentät!')
        } else {
            setError('')
            const json = JSON.stringify({ firstname: firstname, lastname: lastname, email: email, password: password })
            axios.post(url + 'admin/addadmin.php', json, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    setFirstname('')
                    setLastname('')
                    setEmail('')
                    setPassword('')
                    alert.show('Uusi admin lisätty!')
                }).catch(error => {
                    alert(error.response === undefined ? error : error.response.data.error)
                })
        }
    }

    return (
        <div className='wrapper'>
            <h3 className='otsikko'>LISÄÄ UUSI ADMIN</h3>
            <form onSubmit={addAdmin}>
                <div>
                    <label>Etunimi</label>
                    <input type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div>
                    <label>Sukunimi</label>
                    <input type='text' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div>
                    <label>Sähköposti</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Salasana</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='addadmin-error'>{error}</div>
                <button type="submit">ADD</button>
            </form>
        </div>
    )
}
