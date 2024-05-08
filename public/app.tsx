  import React, { useState, useEffect } from 'react';
  import { Lead } from '../src/models';
  import axios from 'axios';

  import './styles.scss'; 

  const App: React.FC = () => {
    const [customers, setCustomers] = useState<Lead[]>([]);
    const [formData, setFormData] = useState<Lead>({
      id: '',
      fname: '',
      lname: '',
      email: '',
      phone: '',
      address: '',
      status: '',
      source: '',
      notes: '',
      createdAt: new Date(),
      updatedAt: new Date()
    });

    useEffect(() => {
      fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/api/leads');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await axios.post('/api/leads', formData);
        fetchCustomers(); 
        setFormData({
          id: '',
          fname: '',
          lname: '',
          email: '',
          phone: '',
          address: '',
          status: '',
          source: '',
          notes: '',
          createdAt: new Date(),
          updatedAt: new Date()
        });
      } catch (error) {
        console.error('Error adding customer:', error);
      }
    };

    const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await axios.put(`/api/leads/${formData.id}`, formData);
        fetchCustomers(); 
      } catch (error) {
        console.error('Error editing customer:', error);
      }
    };

    return (
      <div>
        <div>
          <h2>New Customer</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name:</label>
              <input type="text" name="fname" value={formData.fname} onChange={handleChange} className="input" />
            </div>
            <div>
              <label>Last Name:</label>
              <input type="text" name="lname" value={formData.lname} onChange={handleChange} className="input" />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="input" />
            </div>
            <div>
              <label>Phone:</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="input" />
            </div>
            <div>
              <label>Address:</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="input" />
            </div>
            <button type="submit" className="btn">Add Customer</button>
          </form>
        </div>

        <div>
          <h2>Edit Customer</h2>
          <form onSubmit={handleEditSubmit}>
            <div>
              <label>First Name:</label>
              <input type="text" name="fname" value={formData.fname} onChange={handleChange} className="input" />
            </div>
            <div>
              <label>Last Name:</label>
              <input type="text" name="lname" value={formData.lname} onChange={handleChange} className="input" />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="input" />
            </div>
            <div>
              <label>Phone:</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="input" />
            </div>
            <div>
              <label>Address:</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="input" />
            </div>
            <button type="submit" className="btn">Save Changes</button>
          </form>
        </div>

        <div>
          <h2>Customer List</h2>
          <ul>
            {customers.map(customer => (
              <li key={customer.id}>
                <span>Name: {customer.fname} {customer.lname}</span>
                <span>Email: {customer.email}</span>
                <span>Phone: {customer.phone}</span>
                <span>Address: {customer.address}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  export default App;
