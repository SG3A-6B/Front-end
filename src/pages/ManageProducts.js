import React, { useState, useEffect } from 'react'
import axios from 'axios'
import uuid from 'react-uuid'
import CategoryList from '../components/CategoryList'
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
//import "./css/ManageProducts.css"

export default function ManageProducts({ url, onLogout }) {
  const [products, setProducts] = useState([])
  const [brandName, setBrandName] = useState('')
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState('')

  const [selectedCategory, setSelectedCategory] = useState(null)

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
    if (selectedCategory !== null) {
      axios.get(url + 'products/getproducts.php/' + selectedCategory.id)
        .then((response) => {
          const json = response.data
          if (json) {
            setProducts(json.products)
          }
        }).catch(error => {
          alert(error.response === undefined ? error : error.response.data.error)
        })
    }
  }, [url, selectedCategory])

  function saveProduct(e) {
    e.preventDefault();

    // Varmistetaan, että kaikissa inputeissa on sisältöä
    if (!brandName || !productName || !description || !price) {
      setError('Täytä kaikki kentät!')
    } else {
      setError('')

      const formData = new FormData();
      formData.append('brand', brandName);
      formData.append('name', productName);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category_id', selectedCategory.id);
      formData.append('image', image);

      axios.post(url + 'products/addproduct.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((response) => {
          const updateProducts = [...products, response.data]
          setProducts(updateProducts)
          setBrandName('')
          setProductName('')
          setDescription('')
          setPrice('')
          setImage('')
          document.querySelector(".image-input").value = ""
        })
        .catch(error => {
          alert(error.response === undefined ? error : error.response.data.error)
        })
    }
  }

  function deleteProduct(id, brand, name) {
    confirmAlert({
      title: 'Haluatko varmasti poistaa tuotteen ' + brand + ' ' + name + '?',
      message: 'Huomaathan, että jos poistat tuotteen, kaikki tämän tuotteen tilaukset poistetaan!',
      buttons: [
        {
          label: 'Kyllä',
          onClick: () => {
            //Poistetaan tuote
            const json = JSON.stringify({ id: id })
            axios.post(url + "products/deleteproduct.php", json, {
              headers: {
                "content-type": "application/json"
              }
            })
              .then(() => {
                const updatedProducts = products.filter((product) => product.id !== id)
                setProducts(updatedProducts)
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

  function showAddProduct() {
    const form = document.querySelector(".product-form")
    const btn = document.querySelector(".show-button")

    form.style.opacity = "1"
    form.style.height = "auto"
    form.classList.add('animate')
    btn.style.display = "none"

    // Rullataan sivu alas
    const formHeight = form.offsetHeight;
    window.scrollTo({
      top: form.offsetTop - (window.innerHeight - formHeight) / 2,
      behavior: "smooth",
    });
  }

  return (
    <div className='wrapper'>
      <h3>HALLINNOI TUOTTEITA</h3>

      <CategoryList
        url={url}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <table className='table product-table'>
        <thead>
          <tr key={uuid()}>
            <th>ID</th>
            <th>Tavaramerkki</th>
            <th>Nimi</th>
            <th>Kuvaus</th>
            <th>Hinta</th>
            <th>Kuva</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={uuid()}>
              <td>{product.id}</td>
              <td>{product.brand}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td><a className='image-link' href={url + "images/products/" + product.image} target="_blank" rel="noopener noreferrer">{product.image}</a></td>
              <td><a className='delete' onClick={() => deleteProduct(product.id, product.brand, product.name)}>Poista</a></td>
            </tr>
          ))}
        </tbody>
      </table>

      <form className='product-form' onSubmit={saveProduct}>
        <div>
          <label>Tavaramerkki</label>
          <input type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
        </div>
        <div>
          <label>Tuotteen nimi</label>
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </div>
        <div>
          <label>Kuvaus</label>
          <textarea className='description' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Hinta</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className='product-error'>{error}</div>
        <div>
          <label>Kuva</label>
          <input className='image-input' type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button className='prdouct-submit' type="submit">Lisää</button>
      </form>

      <button className='btn btn-dark show-button' type='button' onClick={() => showAddProduct()}>Lisää uusi tuote</button>

    </div>
  )
}
