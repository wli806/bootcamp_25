import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const products = [
  { id: 1, title: "RTX 4090", description: "High-end GPU", price: 3598.99, image: "path_to_image" },
  { id: 2, title: "Corsair RAM", description: "32GB DDR5", price: 400.00, image: "path_to_image" },
  { id: 3, title: "iPhone", description: "Apple smartphone", price: 1200.00, image: "path_to_image" },
];

export default function ProductTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price ($)</TableCell>
            <TableCell>Product Image</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
                <img src={product.image} alt={product.title} style={{ width: 50 }} />
              </TableCell>
              <TableCell>
                <IconButton color="black"><EditIcon /></IconButton>
                <IconButton color="balck"><DeleteIcon /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
