import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
//import "./css/ManageCategories.css"

export default function Managecategories({ url, onLogout }) {
  const [newCategory, setNewCategory] = useState("")
  const [categories, setCategories] = useState([])
  const [image, setImage] = useState('')
  const [error, setError] = useState("")

  //Authentication
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      setIsAuthorized(true);
    } else {
      onLogout();
    }
  }, [])

  useEffect(() => {
    axios.get(url + 'products/getcategories.php')
      .then((response) => {
        const json = response.data
        setCategories(json)
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error)
      })
  }, [newCategory])

  function saveCategory(e) {
    e.preventDefault()

    if (!newCategory) {
      setError('Syötä kategorian nimi!')
    } else {
      setError('')

      const formData = new FormData();
      formData.append('name', newCategory);
      formData.append('image', image);

      axios.post(url + 'products/addcategory.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((response) => {
          setNewCategory('')
          setImage('')
          
          // Ladataan koko sivu uudestaan, että saadaan päivitettyä navbar
            // (ei jaksanu tehä mitää erikoisempaa)
          window.location.reload();
        }).catch(error => {
          alert(error.response === undefined ? error : error.response.data.error)
        })
    }
  }

  function deleteCategory(id, name) {
    confirmAlert({
      title: 'Haluatko varmasti poistaa kategorian ' + name + '?',
      message: 'Huomaathan, että jos poistat kategorian kaikki kyseisen kategorian tuotteet ja tilaukset poistetaan!',
      buttons: [
        {
          label: 'Kyllä',
          onClick: () => {
            //Poistetaan kategoria
            const json = JSON.stringify({ id: id })
            axios.post(url + "products/deletecategory.php", json, {
              headers: {
                "content-type": "application/json"
              }
            })
              .then(() => {
                const updatedCategories = categories.filter((category) => category.id !== id)
                setCategories(updatedCategories)

                // Ladataan koko sivu uudestaan, että saadaan päivitettyä navbar
                // (ei jaksanu tehä mitää erikoisempaa)
                window.location.reload();
              })
              .catch(error => {
                alert(error.response ? error.response.data.error : error)
              })
          }
        },
        {
          label: 'En',
          onClick: () => {
            //Ei tehdä mitään
          }
        }
      ]
    });
  }

  return (
    <div className='wrapper'>
      <h3>HALLINNOI KATEGORIOITA</h3>

      <div className="adding">
        <h5>Lisää kategoria</h5>

        <form className='category-form' onSubmit={saveCategory}>
        <label className='category-name'>Kategorian nimi</label>
          <div className='category-input'>
            <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
          </div>
          <label>Kategoria kuva</label>
          <div>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className='category-error'>{error}</div>
          <button className='category-submit' type="submit">Lisää</button>
        </form>
      </div>

      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Kategoria</th>
            <th>Kategoria kuva</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td><a className='image-link' href={url + "images/categories/" + category.image} target="_blank" rel="noopener noreferrer">{category.image}</a></td>
              <td><a className='delete' onClick={() => deleteCategory(category.id, category.name)}>Poista</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
