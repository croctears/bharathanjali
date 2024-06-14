import React, { useState } from 'react';
import axios from 'axios';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const SuccessPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64File = reader.result;
      const fileName = file.name;

      const payload = {
        title,
        description,
        file: base64File,
        fileName,
      };

      try {
        const response = await axios.post(
          'https://y9p4tp9hth.execute-api.ap-south-1.amazonaws.com/upload',
          payload
        );
        const imageUrl = response.data.url;

        // Save the title, description, and imageUrl to Firestore
        await addDoc(collection(db, 'uploads'), {
          title,
          description,
          imageUrl,
          createdAt: new Date(),
        });
        setMessage(`File uploaded successfully: ${response.data.url}`);
      } catch (error) {
        setMessage(`Error uploading file: ${error.message}`);
      }
    };
    reader.onerror = (error) => {
      setMessage(`Error reading file: ${error.message}`);
    };
  };
  return (
    <div>
      <h1>Successfully Logged In</h1>
      <p>Welcome! You have successfully logged in.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>File:</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <button type="submit">Upload</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default SuccessPage;
