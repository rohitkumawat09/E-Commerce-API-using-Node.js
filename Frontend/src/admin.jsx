// import React, { useState } from 'react';
// import axios from 'axios';
// import  {instance} from '../axiosConfig'; 



// const ProductAddForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     slug: '',
//     description: '',
//     category: '',
//     quantity: '',
//     originalPrice: '',
//     discountedPrice: '',
//     image: null
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     if (e.target.name === 'image') {
//       setFormData({ ...formData, image: e.target.files[0] });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const submitData = new FormData();
//       for (const key in formData) {
//         submitData.append(key, formData[key]);
//       }

//       const response = await instance.post(
//         '/product/add',
//         submitData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//           withCredentials: true,
//         }
//       );

//       setMessage(response.data.message);
//       console.log("Product created:", response.data);
//     } catch (error) {
//       console.error("Upload Error:", error.response?.data || error.message);
//       setMessage("Product creation failed");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "500px", margin: "auto" }}>
//       <h2>Add Product</h2>
//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br />
//         <input type="text" name="slug" placeholder="Slug" onChange={handleChange} required /><br />
//         <textarea name="description" placeholder="Description" onChange={handleChange} required /><br />
//         <input type="text" name="category" placeholder="Category" onChange={handleChange} /><br />
//         <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} /><br />
//         <input type="number" name="originalPrice" placeholder="Original Price" onChange={handleChange} /><br />
//         <input type="number" name="discountedPrice" placeholder="Discounted Price" onChange={handleChange} /><br />
//         <input type="file" name="image" accept="image/*" onChange={handleChange} required /><br />
//         <button type="submit">Add Product</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default ProductAddForm;

import React, { useState } from 'react';
import { instance } from '../axiosConfig'; 

const ProductAddForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    category: '',
    quantity: '',
    originalPrice: '',
    discountedPrice: '',
    image: null
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const submitData = new FormData();
      for (const key in formData) {
        submitData.append(key, formData[key]);
      }

      const response = await instance.post(
        '/product/add',
        submitData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );

      setMessage(response.data.message);
      console.log("Product created:", response.data);


        setFormData({
      name: '',
      slug: '',
      description: '',
      category: '',
      quantity: '',
      originalPrice: '',
      discountedPrice: '',
      image: null
    });

    document.querySelector('input[name="image"]').value = null;
    } catch (error) {
      console.error("Upload Error:", error.response?.data || error.message);
      setMessage("Product creation failed");
    }
  };

  return (
    <div className="product-form-container">
      <h2 className="form-title">Add Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="product-form">
        <input className="form-input" type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input className="form-input" type="text" name="slug" placeholder="Slug" onChange={handleChange} required />
        <textarea className="form-textarea" name="description" placeholder="Description" onChange={handleChange} required />
        <input className="form-input" type="text" name="category" placeholder="Category" onChange={handleChange} />
        <input className="form-input" type="number" name="quantity" placeholder="Quantity" onChange={handleChange} />
        <input className="form-input" type="number" name="originalPrice" placeholder="Original Price" onChange={handleChange} />
        <input className="form-input" type="number" name="discountedPrice" placeholder="Discounted Price" onChange={handleChange} />
        <input className="form-file" type="file" name="image" accept="image/*" onChange={handleChange} required />
        <button type="submit" className="submit-button">Add Product</button>
      </form>
      <p className="message">{message}</p>
    </div>
  );
};

export default ProductAddForm;
