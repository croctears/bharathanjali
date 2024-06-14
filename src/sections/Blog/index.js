import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import './style.css';

const Blog = () => {
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'uploads'));
        const uploadsData = querySnapshot.docs.map((doc) => doc.data());
        setUploads(uploadsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching documents: ', error);
        setLoading(false);
      }
    };
    fetchUploads();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {' '}
      <h1>Uploaded Images</h1>{' '}
      <div className="uploads-container">
        {uploads.map((upload, index) => (
          <div key={index} className="upload">
            {' '}
            <h2>{upload.title}</h2> <p>{upload.description}</p>{' '}
            <img src={upload.imageUrl} alt={upload.title} />{' '}
          </div>
        ))}{' '}
      </div>{' '}
    </div>
  );
};

export default Blog;
