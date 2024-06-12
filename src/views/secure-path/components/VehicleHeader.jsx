import { useEffect, useRef, useState } from "react";
import moment from "moment-timezone";
import {
  InputGroup,
  Row,
  Col,
  Navbar,
  Form,
  Modal,
  Button,
  FormGroup,
  Badge
} from "react-bootstrap";
import CsvDownloadButton from 'react-json-to-csv'
import { FaFileCsv,FaTimesCircle } from "react-icons/fa";
import { FaFilter, FaPlus } from "react-icons/fa";

import Select from "react-select";

import "../securevehicle.scss";

function VehicleHeader({
  setColumnFilters,
  columnFilters,
  table,
  ShowAddModal,
  SetVehicleFilter,
  SetFiltering,
  filtering
}) {

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
  
  const [startDate, setStartDate] = useState(new Date("2010-01-01"));
  const [endDate, setEndDate] = useState(new Date("2050-01-01"));
  const dateOneRef = useRef("");
  const dateTwoRef = useRef("");
  

  const [payment, setPayment] = useState({
    value: "all",
    label: "ALL",
  });
  const [status, setStatus] = useState({
    value: "all",
    label: "ALL",
  });

  return (
    <div class="sp-header-container">
    <div className="">
    <p className="ml-2">COUNT:
    {table.getFilteredRowModel().rows.length}
    </p>
    
    <span className="ml-2">
    FILTERS:
    {table.getState().columnFilters.map((items) => (
     <>
    {
     items?.id!='certi_exp'?
     <>
      <Badge className="bg-info label-text mx-sm-1">
                  {items.value}
      </Badge>
     </>:
     <>
     {
     
      <>
      {
      <>
        <Badge className="bg-info label-text mx-sm-1 p-1">
        <div>
        {moment(items?.value?.one).format("DD/MM/YYYY")}
        </div>          
      </Badge>
      to
      <Badge className="bg-info label-text mx-sm-1 p-1">
        <div>
        {moment(items?.value?.two).format("DD/MM/YYYY")}
        </div>          
      </Badge>
      
      </>}

       
      
      </>
     }
     </>
     }
     </>
    ))}
    </span>
    </div>
    
    
    <div className="" style={{marginRight:'21px'}}>
      <InputGroup>
       <div style={{position:'relative'}}>
        <Form.Control
        style={{ width: '20em' }}
        className="sp-search"
          placeholder="SEARCH"
          value={filtering}
          onChange={(e) => {
            table.setPageIndex(0)
            SetFiltering(e.target.value)
          }}
        />
    
           {filtering?.length>0 && (
              
              <FaTimesCircle 
              className="pointer"
              style={{position:'absolute',left:'15.6rem',top:'0.5rem'}}
              size={30}    
              onClick={() =>{SetFiltering("")}}
              />
    
             
            )}
       </div>
        <InputGroup.Append>
          <Button
            variant="warning"
            onClick={()=>SetVehicleFilter(true)}
          >
            FILTER <FaFilter />
          </Button>
          <Button variant="primary" onClick={()=>{ShowAddModal()}}>
            ADD <FaPlus />
          </Button>
          <Button
            variant="danger"
            onClick={() => table.resetColumnFilters()}
          >
            <i
              className="feather icon-refresh-cw"
              style={{ margin: 0 }}
            ></i>
          </Button>
          {/* {
            localStorage.getItem('loginUserId')==1&&(<>
            <CsvDownloadButton 
               style={{ 
               height:'100%',
              //  borderRadius:'0.5em',
                display:"inline-block",
                fontSize:"14px",
                cursor:"pointer",
                fontSize:"1em",
                marginBottom:'2px',
                padding:"6px 8px",
    
                }}
               
              className="btn-dark"
              data={exportExcel(table.getFilteredRowModel().rows)} 
              delimiter="," 
              filename='company_details.csv'
              // headers={[
              //   "COMPANY",
              //   "TRADE LICENSE",
              //   "TRAFFIC FILE NO",
              //   "OWNER NAME",
              //   "EMAIL",
              //   "PHONE NO",
              //   "ZIP CODE",
              //   "ADDRESS",
              //   "STATUS",
              //   "TYPE",
              // ]}
    
    
              >
              
              <FaFileCsv className="mx-1"/>
              EXPORT
            </CsvDownloadButton>
            </>)
          } */}
          
          
    
        </InputGroup.Append>
      </InputGroup>
      
    </div>
    
             
      
    </div>
  
  );
}

export default VehicleHeader;












// <div className="container-v">
// <p>COUNT:<strong>{table.getFilteredRowModel().rows.length}</strong></p>
// <div className="header-side">
//   <div className="v-select-row">
//     <Form.Group controlId="category" className="mx-2">
//       {/* <Form.Label>STATUS:</Form.Label> */}

//       <div style={{ width: "7rem",fontSize:'14px' }}>
//         <Select
//           selectedValue={status}
//           menuPlacement="auto"
//           menuPosition="fixed"
//           value={status}
//           options={[
//             {
//               value: "all",
//               label: "ALL STATUS",
//             },
//             {
//               value: "active",
//               label: "ACTIVE",
//             },
//             {
//               value: "expired",
//               label: "EXPIRED",
//             },
//             {
//               value: "installed",
//               label: "INSTALLED",
//             },
//             {
//               value: 'not installed',
//               label: "NOT INSTALLED",
//             },
//             {
//               value: "certificate only",
//               label: "CERTIFICATE ONLY",
//             },
//             {
//               value: "removed",
//               label: "REMOVE",
//             },
//           ]}
//           onChange={setStatus}
//           maxMenuHeight={200}
//         />
//       </div>
//     </Form.Group>


//   </div>

//   <div style={{position:"relative"}}>
// //     <label style={{
//       position:'absolute',
//       fontSize:'13px',
//       fontWeight:'400',
//       top:'-20px',
//       right:'280px'
//       }}>REG EXPIRY DATE :</label>
  
 

//   </div>
//   <div className="">
//     {" "}
//     <Button onClick={ShowAddModal} className="btn-add">
//       ADD <FaPlus />{" "}
//     </Button>{" "}
//     {/* <Button onClick={()=>exportExcel(table.getFilteredRowModel().rows)} className="btn-add">
//       ADD <FaPlus />{" "}
//     </Button>{" "} */}
    
//    {
//     localStorage.getItem('loginUserId')==1?<>
//      <CsvDownloadButton 
//     //  style={{ 
//     //  height:'39%',
//     //  borderRadius:'0.5em',
//     //   display:"inline-block",
//     //   cursor:"pointer","color":"#ffffff",
//     //   fontSize:"1em",
//     //   marginBottom:'2px',
//     //   // fontWeight:"bold",
//     //   padding:"2px 0px",
//     //   // textDecoration:"none",
//     //   // textShadow:"0px 1px 0px #9b14b3"
//     //   }}
//     style={{ 
//       height:'49px',
//       borderRadius:'0.25em',
//        display:"inline-block",
//        fontSize:"14px",
//        cursor:"pointer",
//        fontSize:"1em",
//        marginBottom:'6px',
//        padding:"6px 8px",
//        marginLeft:'-8px',
//        transition:'all 0.3',
//       //  backgroundColor:'#000'
      
//        }}
     
//     className="btn-dark"
//     data={exportExcel(table.getFilteredRowModel().rows)} 
//     delimiter="," 
//     filename='vehicle_details.csv'
//     headers={[
//     "id",
//     "vehicle_type",
//     "chassis_no",
//     "vehicle_make",
//     "vehicle_model_year",
//     "vehicle_color",
//     "emirates",
//     "vehicle_category",
//     "plate_code",
//     "plate_number",
//     "reg_exp",
//     "device_model",
//     "imei",
//     "doi",
//     "certi_exp",
//     "sim_serial_number",
//     "sim_number",
//     "ird",
//     "payment",
//     "vehicle_status",
//     "bussiness category"
//     ]}

//     >
//       <FaFileCsv className="mx-1"/>
//     EXPORT
//     </CsvDownloadButton>
    
//     </>:<></>
//    }
//     {/* <CsvDownloadButton className="btn-dark" delimiter=',' filename='vehicle.csv' data={table.getFilteredRowModel().rows.map((row) => row.original)} /> */}
//   </div>
// </div>
// </div>