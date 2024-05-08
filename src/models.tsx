type role_t = "user" | "moderator" | "admin" | "partner";
type status_t = "lead" | "activeLead" | "customer" | "on hold" | "disbanded" | '';

export interface User {
    id: string;
    fname: string;
    lname: string;
    email: string;
    password: string; 
    role: role_t;
    createdAt: Date;
    updatedAt: Date;
    customerIds: string[]; 
  }
  
  export interface Lead {
    id: string;
    fname: string;
    lname: string;
    email: string;
    phone: string;
    address: string;
    status: status_t;
    source: string; 
    notes: string;
    createdAt: Date;
    updatedAt: Date;
  }
  

  export interface Meeting {
    id: string;
    title: string;
    description: string;
    date: Date;
    time: string;
    location: string;
    participants: string[]; 
    notes: string;
    leadCustomerId?: string;

    createdAt: Date;
    updatedAt: Date;
  }
  