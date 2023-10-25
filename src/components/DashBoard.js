import React, { useEffect, useState } from 'react'
import Card from './Card';
const DashBoard = () => {

    const [medicine, setMedicine] = useState([]);
    useEffect(() => {
        const apiUrl = '/api/HkUser/SearchMedicineData';
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                // console.log(data);
                const reqMedicine = Object.values(data);
                const impData = reqMedicine[2].map(obj => Object.values(obj));
                // console.log(impData);
                setMedicine(impData);
            })
            .catch((err) => {
                console.error('Error:', err);
            });
    }, [])

    const [currPage, setCurrPage] = useState(1);
    const itemsPerPage = 3;
    const indexLast = itemsPerPage * currPage;
    const indexFirst = indexLast - itemsPerPage;
    const medcs = medicine.slice(indexFirst, indexLast);

    const totalPages = Math.ceil(medicine.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrPage(newPage);
    };

    const addToCart = (item) => {
        console.log("Added to cart");
        return 
    }
    return (
        <>
            <h1 className='m-5 text-center'>Medicines</h1>
            <div className="dashContainer">
                <div className="mainContainer m-4">
                    {medcs.map((items, index) => {
                        return (
                            <>
                                <Card key={index} name={items[3]} price={items[8]} brand={items[25]}/>
                            </>
                        )
                    })}
                </div>
                <h5 className='text-center'>{currPage} of {totalPages}</h5>
                <div className="buttons mx-4">
                    <button type='button' className="btn btn-primary" onClick={() => handlePageChange(currPage - 1)} disabled={currPage === 1}>&larr; Previous</button>
                    <button type='button' className="btn btn-primary" onClick={() => handlePageChange(currPage + 1)} disabled={currPage === totalPages}>Next &rarr;</button>
                </div>
            </div>
        </>
    )
}

export default DashBoard
// https://healthkangaroo.com/api/HkUser/SearchMedicineData