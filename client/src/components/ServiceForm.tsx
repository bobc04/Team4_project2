import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceForm: React.FC = () => {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  const [formData, setFormData] = useState({
    userId: 1,  // Replace with the actual logged-in user ID
    categoryId: '',
    description: '',
    location: '',
    yearsOfExperience: '',
    hasReferences: false,
  });

  useEffect(() => {
    // Fetch categories from the backend
    axios.get('http://localhost:5001/api/categories').then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('http://localhost:5001/api/service-provider', formData).then((response) => {
      alert('Profile saved successfully!');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Service Provider Profile</h2>

      <label>
        Category:
        <select name="categoryId" value={formData.categoryId} onChange={handleChange} required>
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} required />
      </label>

      <label>
        Location:
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
      </label>

      <label>
        Years of Experience (optional):
        <input type="number" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} />
      </label>

      <label>
        References Available:
        <input type="checkbox" name="hasReferences" checked={formData.hasReferences} onChange={handleChange} />
      </label>

      <button type="submit">Save Profile</button>
    </form>
  );
};

export default ServiceForm;