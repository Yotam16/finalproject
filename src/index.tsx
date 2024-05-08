import express from 'express';
import path from 'path';

const app = express();

const leads = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, State, 12345',
    status: 'New',
    source: 'Website',
    notes: 'Interested in product X',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '234-567-8901',
    address: '456 Elm St, City, State, 23456',
    status: 'Contacted',
    source: 'Referral',
    notes: 'Met at conference',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    phone: '345-678-9012',
    address: '789 Oak St, City, State, 34567',
    status: 'Qualified',
    source: 'Advertisement',
    notes: 'Requested demo',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/leads', (req, res) => {
  res.json(leads);
});

app.get('/api/leads/:id', (req, res) => {
  const leadId = parseInt(req.params.id);
  const lead = leads.find(lead => lead.id === leadId);

  if (!lead) {
    return res.status(404).json({ message: 'Lead not found' });
  }

  res.json(lead);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
