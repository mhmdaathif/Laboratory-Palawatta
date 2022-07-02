import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Form } from "react-bootstrap";
import '../../../style.css'
import axios from 'axios';
import ViewAllUpdatePayment from './ViewAllUpdatePayment';





 export default function ViewAllPayment() {
    const [payments, setPayment] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





    useEffect(() => {
        axios.get(`http://localhost:5000/api/payments/`).then(res=> {
          setPayment(res.data);

        })
            .catch(err => {
                console.log(err);
            })
          
    
    })

   
        return (
          <>
             <Button className='btn-dashbc me-5' onClick={handleShow}>
        View All Salary Payment
      </Button>
      
            <Modal show={show}        
              size="xl"
              centered
            >
              <Modal.Header>
            
                <Modal.Title id="contained-modal-title-vcenter">View Salary Payment</Modal.Title>
                 
              </Modal.Header>
              <Modal.Body>
      
      
   
                
      
      <fieldset>
            
      <div >


      
<center><h2>Payment History</h2></center>
<table className="table table-striped styled-table ">
    <thead className="thead-dark" >
        <tr>
         
            <th scope="col">Payment ID</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Employee Type</th>
            <th scope="col">Name</th>
            <th scope="col">Month</th>
            <th scope="col">Salary</th>  
            <th className="text-center" scope="col">Actions</th>
    
        </tr>
    </thead>
  
    <tbody>
  

  
        {
            payments.map(payments => <tr key={payments.paymentid}>
          

                <td>{payments.paymentid}</td>
                <td>{payments.employee_ID}</td>
                <td>{payments.employment_type}</td>
                <td>{payments.name}</td>
                <td>{payments.month}</td>
                <td>{payments.salary}</td>
                <td className="text-center">
                                    <ViewAllUpdatePayment PID={payments.paymentid} upEID={payments.employee_ID} upEtype={payments.employment_type} upName={payments.name} upMonth={payments.month} upSalary={payments.salary}/>
                                    
                                </td>
            </tr>
            
            )
            
        }

    </tbody>
   
</table>
</div>



      </fieldset>
    
        </Modal.Body>
          <Modal.Footer>
      
      
      <Button variant="danger" onClick={handleClose}>
        Cancel
      </Button>
           
          </Modal.Footer>
        </Modal>
      </>
      );  
}

