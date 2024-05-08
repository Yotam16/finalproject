"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var app = (0, express_1.default)();
var leads = [
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
app.use(express_1.default.static(path_1.default.join(__dirname, 'build')));
app.get('/api/leads', function (req, res) {
    res.json(leads);
});
app.get('/api/leads/:id', function (req, res) {
    var leadId = parseInt(req.params.id);
    var lead = leads.find(function (lead) { return lead.id === leadId; });
    if (!lead) {
        return res.status(404).json({ message: 'Lead not found' });
    }
    res.json(lead);
});
app.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'build', 'index.html'));
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
