import React from 'react';

const arr = [1,2,3]

const Data = [
    {
        bookTitle: 'Buku 1',
        stock: 12
    },
    {
        bookTitle: 'Buku 2',
        stock:13
    },
    {
        bookTitle: 'Buku 3',
        stock:14
    }
]
const FungsiData = () => {
    return {

    }
}


export function DataProductTable() {
    return Data.map((data, index) => {
        return {
            bookTitle:data.bookTitle,
            stock:data.stock
        };
    });
};
