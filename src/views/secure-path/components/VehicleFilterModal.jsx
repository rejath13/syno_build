import { Modal, Button, Form, InputGroup, Row, Col } from "react-bootstrap";
import Select from "react-select";
import { FaArrowsAltH } from "react-icons/fa";
import { useState } from "react";
import CsvDownloadButton from 'react-json-to-csv'

function VehicleFilterModal(props) {
    
const {ShowVehicleFilter,SetVehicleFilter,setColumnFilters,table}=props

const exportExcel = (rows) => {
    const rowData = rows.map((row) =>{
  
      let fltr_obj={}
  
      Object.keys(row.original).forEach(key=>{
          if(key=='securePathId' || 
          key=='remarks' ||
          key=='secure_vehicle_logs' ||
          key=='createdAt' ||
          key=='updatedAt'
          ){
              return 
            } 
            else if(key=='secure_path'){
                return fltr_obj["bussiness_category"]=row.original[key].bussiness_category.name  
            }
            else{
              return fltr_obj[key]=row.original[key]
            }
      })
  
      return fltr_obj
  })
  return rowData
}

const [payment, setPayment] = useState({
    value: "all",
    label: "ALL",
  });
  const [status, setStatus] = useState({
    value: "all",
    label: "ALL",
  });
  
const [startDate, setStartDate] = useState(new Date("2000-01-01"));
const [endDate, setEndDate] = useState(new Date("2099-01-01"));

const OnCloseModal=()=>{
    SetVehicleFilter(false)
    setStatus({
        value: "all",
        label: "ALL",
      })
    setStartDate(new Date("2000-01-01"))
    setEndDate(new Date("2099-01-01"))
    setPayment(({
        value: "all",
        label: "ALL",
      }))
}

const OnApply=()=>{
    
    setColumnFilters([ {
        id: "vehicle_status",
        value: status.value,
      },
      {
        id: "payment",
        value: payment.value,
      },
      {
        id: "certi_exp",
        value: {
          one: startDate,
          two: endDate,
        },
      }
    ])
    OnCloseModal()
}
  return (
    <>
     <Modal
        show={ShowVehicleFilter}
        onHide={OnCloseModal}
        dialogClassName=""
      >
        <Modal.Header closeButton>
          <Modal.Title>FILTERS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <>
        <Col>
        <Form.Group controlId="category" className="mx-2">
        <Form.Label>STATUS:</Form.Label>
     <div style={{ width: "auto",fontSize:'14px' }}>
        <Select
          selectedValue={status}
           menuPlacement="auto"
           menuPosition="fixed"
          value={status}
          options={[
             {
               value: "all",
               label: "ALL STATUS",
            },
             {
               value: "active",
              label: "ACTIVE",
            },
            {
              value: "inactive",
               label: "INACTIVE",
             },
          {
               value: "installed",
               label: "INSTALLED",
             },
             {
               value: 'not installed',
              label: "NOT INSTALLED",
            },
            { 
            value: "certificate only",
             label: "CERTIFICATE ONLY",
          },
           {
              value: "deactivated",
             label: "DEACTIVATED",
            },
           {
             value: "need to remove device",
             label: "Need to Remove Device",
            },
           {
             value: "delete",
             label: "DELETED",
            },
          ]}
         onChange={setStatus}
          maxMenuHeight={200}
       />
      </div>
        </Form.Group>
        
        </Col>
        <Col>
<Form.Group controlId="category" className="p-1">
  <Form.Label>PAYMENT:</Form.Label>

      <div style={{ width: "auto",fontSize:'auto' }}>
        <Select
          selectedValue={payment}
          menuPlacement="auto"
          menuPosition="fixed"
          value={payment}
          options={[
            {
              value: "all",
              label: "ALL PAYMENT",
            },
            {
              value: "paid",
              label: "PAID",
            },
            {
              value: "not paid",
              label: "NOT PAID",
            },
          ]}
          onChange={setPayment}
          maxMenuHeight={300}
        />
      </div>
    </Form.Group>
        
        </Col>
       
        <Col>
        <Form.Group className="p-1">
        <Form.Label>CERTIFICATE EXPIRY:</Form.Label>
       <div style={{
        display:"flex"
       }}>
       <Form.Control type="date"   onChange={(e) => setStartDate(e.target.value)}/>
        <FaArrowsAltH size={50}/>
        <Form.Control type="date"  onChange={(e) => setEndDate(e.target.value)}/>
       </div>
      </Form.Group>
        </Col>
        
        </>
        </Modal.Body>
        <Modal.Footer>
        
   <CsvDownloadButton
    className="btn-dark p-2"
    data={exportExcel(table.getFilteredRowModel().rows)} 
    delimiter="," 
    filename='vehicle_details.csv'
    >
    EXPORT CSV
   </CsvDownloadButton>
       
        <Button  onClick={OnApply}>APPLY</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default VehicleFilterModal