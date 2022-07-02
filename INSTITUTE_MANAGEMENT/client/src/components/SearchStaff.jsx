import React from "react";
import Modal from 'react-bootstrap/Modal';
import { MDBCol, MDBIcon } from "mdbreact";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ViewModel from "./modal/staffmodal/ViewModel";


const SearchStaff = (props) => {

  const [show, setShow] = useState(false);
  const [staffId, setStaffId] = useState(false);
  const handleClose = () => setShow(false);
  
  function searchId(e){
    if(e.keyCode==13){
      setShow(true);
    }
  }
  return (
     
    <div>
          <div class="row">
            <div class="col-sm-10"></div>
            <div class="col-sm-5"></div>
    <MDBCol md="4">
      
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75 float-right" type="text" placeholder="Search" aria-label="Search" onChange={(e)=>{setStudentId(e.target.value)}} onKeyDown={(e) => searchId(e) }/>

    </MDBCol>
    </div>
    <Modal show={show}        
        size="lg"
        centered
      >
        
        <ViewModel staffID={staffId}/>
        <Modal.Footer>
      <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          </Modal.Footer>
      </Modal>
      
    </div>

  );
}

export default Search;