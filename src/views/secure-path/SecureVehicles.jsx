import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import moment from "moment";
import {
  Container,
  Row,
  Col,
  Navbar,
  Form,
  Modal,
  Badge,
  OverlayTrigger,
  Tooltip,
  Table,
} from "react-bootstrap";

import {
  useFetchvehiclesQuery,
  useFetchcompanyQuery,
} from "../../store/api/securepath/securepathApi";
import VehicleTable from "../secure-path/components/VehicleTable";
import "./securepath.scss";
import VehicleHeader from "./components/VehicleHeader";
import BigSpinner from "../../components/Loader/BigSpinner";
import UpdateVehicleModal from "./components/VehicleModal";
import { useState, useMemo } from "react";
import VehicleAddModal from "./components/VehicleAddModal";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import VehicleLogModal from "./components/VehicleLogModal";
import { useEffect, memo } from "react";
import { useSelector } from "react-redux";
import VehicleFilterModal from "./components/VehicleFilterModal";
import StatusModal from "./components/StatusModal";

function SecureVehicles(props) {
  const { pagination, setPagination } = props;

  // const pageindex=useSelector(state=>state)

  const MemoVehicleTable = memo(VehicleTable);

  const { data, isLoading } = useFetchvehiclesQuery(
    { count: 5 },
    { refetchOnMountOrArgChange: true }
  );

  const company_data = useFetchcompanyQuery();
  const [showUpdateModal, SetshowUpdateModal] = useState([null, null]);
  const [addModal, SetAddModal] = useState(false);
  const [logmodal, SetLogModal] = useState([null, null]);

  const ShowUpdateModal = (data) => SetshowUpdateModal([true, data]);
  const CloseUpdateModal = () => SetshowUpdateModal([false, null]);

  const ShowLogModal = (data) => SetLogModal([true, data]);
  const CloseLogModal = () => SetLogModal([false, null]);

  const ShowAddModal = () => SetAddModal(true);
  const CloseAddModal = () => SetAddModal(false);

  const [columnFilters, setColumnFilters] = useState([
    {
      id:'vehicle_status',
      value:'all',
    },
  ]);
  const [sorting, setSorting] = useState([])
  const [filtering, SetFiltering] = useState("");
  const [ShowVehicleFilter,SetVehicleFilter]=useState(false)
  const [ShowStatusModal,SetStatusModal]=useState({
    flag:false
  })
  // const [pagination, setPagination] = useState({
  //   pageIndex:0, //initial page index
  //   pageSize: 25, //default page size
  // });

  const chekcRegExpire = (date) => {
    return date <= new Date();
  };

  const columns = [
    {
      size: 300,
      header: "COMPANY DETAILS",
      accessorKey: "company_name",
      accessorFn: (row) => row.secure_path.company_name,
      cell: (r) => (
        <Col>
          <Row className="pt-2">
            <strong
              onClick={() => ShowUpdateModal(r.row.original)}
              className="pointer mb-2"
            >
              {r?.row?.original?.secure_path?.company_name ?? ""}
               {
                  r?.row?.original?.secure_path?.status=='active'?<span className="text-success mx-1">(Active)</span>:<span className="text-danger mx-1">(Blocked)</span>
               }
            </strong>
          
          </Row>

          <Row style={{ marginLeft: "-28.2px" }}>
            <Col>
              <Badge className="bg-warning label-text">
                {`${r.row.original.secure_path?.bussiness_category.name}`.toUpperCase()}
              </Badge>
            </Col>
            <Col>
              <Badge className="bg-primary label-text pointer" 
              onClick={()=>{SetStatusModal({
                data:r.row.original.vehicle_status,
                flag:true,
                type:'status',
                id:r.row.original.id,
              })
              }}
              >
                {`${r.row.original.vehicle_status}`.toUpperCase()}
              </Badge>
            </Col>
            <Col>
              <Badge
               onClick={()=>{SetStatusModal({
                data:r.row.original.payment,
                flag:true,
                type:'payment',
                id:r.row.original.id,
              })
              }}
              
                className={`label-text pointer ${
                  r.row.original.payment == "not paid"
                    ? "bg-danger"
                    : "bg-success"
                }`}
              >
                {`${r.row.original.payment}`.toUpperCase()}
              </Badge>
            </Col>
            <Col
              className="pointer"
              onClick={() => ShowLogModal(r.row.original.secure_vehicle_logs)}
            >
              {
logmodal[0]?
<FaEye size={16}/> :
<FaEyeSlash size={16} />
              }
            </Col>
          </Row>
        </Col>
      ),
    },
    {
      header: "VEHICLE TYPE/EMIRATES",
      enableSorting: false, 
      accessorKey: "vehicle_type",
      cell: (r) => (
        <>
        {<OverlayTrigger
            placement='top'
            overlay={<Tooltip id={`tooltip-top`}>Vehicle Type</Tooltip>}
            >
          <div className="my-2">{r.row.original?.vehicle_type.toUpperCase()}</div>          
            </OverlayTrigger>}
        {
          <OverlayTrigger
            placement='top'
            overlay={<Tooltip id={`tooltip-top`}>Emirate</Tooltip>}
            >
           <div className="my-2">{r.row.original?.emirates.toUpperCase()}</div>        
            </OverlayTrigger>
            }
          
         
        </>
      ),
    },
    {
      header: (
        <Row>
          {`CNO/MAKE/YEAR COLOR/CATEGORY`.split(" ").map((i) => (
            <Col>{i}</Col>
          ))}
        </Row>
      ),
      accessorKey: "chassis_no",
      enableSorting: false, 
      cell: (r) => (
        <div className="mx-4">
          
          
          
         
         

          <OverlayTrigger
            placement='top'
            overlay={<Tooltip id={`tooltip-top`}>Chassis No</Tooltip>}
            >
           <div className="my-2 pointer">{r.row.original.chassis_no}</div>      
            </OverlayTrigger>

            <OverlayTrigger
            placement='top'
            overlay={<Tooltip id={`tooltip-top`}>Vehicle Make</Tooltip>}
            >
          <div className="my-2 pointer">{r.row.original.vehicle_make}</div>     
            </OverlayTrigger>

            <OverlayTrigger
            placement='top'
            overlay={<Tooltip id={`tooltip-top`}>Model Year</Tooltip>}
            >
           <div className="my-2 pointer">{r.row.original.vehicle_model_year}</div>     
            </OverlayTrigger>

            <OverlayTrigger
            placement='top'
            overlay={<Tooltip id={`tooltip-top`}>Color</Tooltip>}
            >
            <div className="my-2 pointer">{r.row.original.vehicle_color}</div>      
            </OverlayTrigger>

            <OverlayTrigger
            placement='top'
            overlay={<Tooltip id={`tooltip-top`}>Category</Tooltip>}
            >
            <div className="my-2 pointer">{r.row.original.vehicle_category}</div>    
            </OverlayTrigger>

        </div>
      ),
    },

    // {
    //   header: "EMIRATES",
    //   accessorKey: "emirates",
    //   cell:(r)=><>{r.row.original?.emirates.toUpperCase()}</>
    // },
    {
      header: "vehicle category",
      accessorKey: "vehicle_category",
    },
    {
      header: "CODE/PLATE_NO",
      accessorKey: "plate_code",
      enableSorting: false, 
      cell: (r) => (
        <>
         <OverlayTrigger
            placement='top'
            overlay={<Tooltip id={`tooltip-top`}>Plate Code</Tooltip>}
            >
             <div className="pointer">{r.row.original.plate_code}</div>  
            </OverlayTrigger>
         <OverlayTrigger
            placement='top'
            overlay={<Tooltip id={`tooltip-top`}>Plate No</Tooltip>}
            >
           <div className="pointer">{r.row.original.plate_number}</div>
            </OverlayTrigger>
         
          
        </>
      ),
    },
    {
      header: (
        <Row>
          {`DEVICE/IMEI SIM_NO/SIM_SNO`.split(" ").map((i) => (
            <Col>{i}</Col>
          ))}
        </Row>
      ),
      accessorKey: "imei",
      enableSorting: false, 
      cell: (r) => (
        <>
           <OverlayTrigger
            placement='top'
            overlay={<Tooltip id={`tooltip-top`}>Device</Tooltip>}
            >
           <div className="my-2 pointer">
            {`${r.row?.original?.device_model ?? "NO DEVICE"}`.toUpperCase()}
          </div>
            </OverlayTrigger> 

           <OverlayTrigger
            placement='top'
            overlay={<Tooltip id={`tooltip-top`}>IMEI</Tooltip>}
            >
            <div className="my-2 pointer">{r.row.original.imei}</div>
            </OverlayTrigger> 

           <OverlayTrigger
            placement='top'
            overlay={<Tooltip id={`tooltip-top`}>Sim No</Tooltip>}
            >
           <div className="my-2 pointer">{r.row.original.sim_no}</div>
            </OverlayTrigger> 

           <OverlayTrigger
            placement='top'
            overlay={<Tooltip id={`tooltip-top`}>Sim Serial No</Tooltip>}
            >
           <div className="my-2 pointer">{r.row.original.sim_sno}</div>
            </OverlayTrigger> 



          
         
          
          
        </>
      ),
    },
    {
      header: "DOI/REG/IRD",
      accessorKey: "doi",
      enableSorting: false, 
      cell: (row) => (
        <>
         <OverlayTrigger
            placement='top'
            overlay={<Tooltip id={`tooltip-top`}>Date of Installation</Tooltip>}
            >
            <div className="my-2 pointer">{moment(row?.row?.original?.doi).format("DD-MM-YYYY")}</div>
            </OverlayTrigger>

            <OverlayTrigger
            placement='top'
            overlay={<Tooltip id={`tooltip-top`}>Reg Expiry</Tooltip>}
            >
            <div className="my-2 pointer">
            {moment(row?.row?.original?.reg_exp).format("DD-MM-YYYY")}
           </div>
            </OverlayTrigger>

            <OverlayTrigger
            placement='top'
            overlay={<Tooltip id={`tooltip-top`}>Insurance Renewal Date</Tooltip>}
            >
           <div className="my-2 pointer">{moment(row?.row?.original?.ird).format("DD-MM-YYYY")}</div>
            </OverlayTrigger>


         
         
          
        </>
      ),
    },
    {
      header: "sim no",
      accessorKey: "sim_no",
    },
    {
      header: "sim serail",
      accessorKey: "sim_sno",
    },
    {
      header: "payment",
      accessorKey: "payment",
      enableSorting: false, 
      filterFn: (row, columnId, filterValue) => {
        if (filterValue == "all") {
          return true;
        }
        return row.original.payment === filterValue;
      },
    },
    {
      header: "vechicle status",
      accessorKey: "vehicle_status",
      enableSorting: false, 
      filterFn: (row, columnId, filterValue) => {
        if(filterValue=="all") {
        if(row.getValue(columnId)!=='delete'){
        return true;
          }
        }
        return row.original.vehicle_status === filterValue;
      },
    },
    {
      header: "CERTIFICATE EXPIRY",
      accessorKey: "certi_exp",
      sortingFn:'datetime',
  
      cell: (row) => (
        <>
          {chekcRegExpire(new Date(row?.row?.original?.certi_exp)) ? (
            <div style={{ color: "red" }}>
              {moment(row?.row?.original?.certi_exp).format("DD-MM-YYYY")}
            </div>
          ) : (
            <div>
              {moment(row?.row?.original?.certi_exp).format("DD-MM-YYYY")}
            </div>
          )}
        </>
      ),
      filterFn: (row, columnId, filterValue) => {
        let day = new Date(row?.original?.certi_exp??null);
        let frm = new Date(filterValue?.one);
        let to = new Date(filterValue?.two);
        return day >= frm && day <= to;
      },
    },
    {
      header: "REMARKS",
      accessorKey: "remarks",
      enableSorting: false, 
    },
  ];

  const table = useReactTable({
    data: data || [],
    columns,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    autoResetPageIndex: false,
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      columnFilters:[
        {
          id:'vehicle_status',
          value:'all',
        },
      ],
      columnVisibility: {
        sim_no: false,
        sim_sno: false,
        payment: false,
        vehicle_status: false,
        vehicle_category: false,
      },
    },
    state: {
      globalFilter: filtering,
      columnFilters,
      pagination,
      sorting
    },
    //  autoResetPage: false,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: SetFiltering,
    onPaginationChange: setPagination,
    onSortingChange: setSorting
  });

  return (
    <>
      {isLoading || company_data.isLoading ? (
        <>
          <BigSpinner />
        </>
      ) : (
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <VehicleHeader
                  SetVehicleFilter={SetVehicleFilter}
                  setColumnFilters={setColumnFilters}
                  columnFilters={columnFilters}
                  ShowAddModal={ShowAddModal}
                  SetFiltering={SetFiltering}
                  filtering={filtering}
                  table={table}
                />
                <div className="main-layout">
                  {
                    <VehicleFilterModal
                    setColumnFilters={setColumnFilters}
                    ShowVehicleFilter={ShowVehicleFilter}
                    SetVehicleFilter={SetVehicleFilter}
                    table={table}
                    />
                    }
                  {showUpdateModal[1] && (
                    <UpdateVehicleModal
                      showUpdateModal={showUpdateModal[0]}
                      CloseUpdateModal={CloseUpdateModal}
                      data={showUpdateModal[1]}
                      table={table}
                      setPagination={setPagination}
                    />
                  )}
                  {logmodal[1] && (
                    <VehicleLogModal
                      ShowLogModal={logmodal[0]}
                      data={logmodal[1]}
                      CloseLogModal={CloseLogModal}
                    />
                  )}

                  {company_data?.data && (
                    <VehicleAddModal
                      company={company_data?.data}
                      ShowAddModal={addModal}
                      CloseAddModal={CloseAddModal}
                    />
                  )}
                  {
                    <StatusModal
                    show={ShowStatusModal}
                    SetStatusModal={SetStatusModal}
                    />
                  }
                  {table && <MemoVehicleTable table={table} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SecureVehicles;

// <VehicleHeader setColumnFilters={setColumnFilters} table={table} columnFilters={columnFilters} ShowAddModal={ShowAddModal}/>

// {
//  showUpdateModal[1]&&(<UpdateVehicleModal
//     showUpdateModal={showUpdateModal[0]}
//     CloseUpdateModal={CloseUpdateModal}
//     data={showUpdateModal[1]}
//     table={table}
//     setPagination={setPagination}
//     />)
// }

// <VehicleAddModal
// company={company_data?.data}
// ShowAddModal={addModal}
// CloseAddModal={CloseAddModal}
// />

// {logmodal[1]&&
//  <VehicleLogModal
//  ShowLogModal={logmodal[0]}
//  data={logmodal[1]}
//  CloseLogModal={CloseLogModal}
// />
// }
// <div className="v-table-container">
//   {/* {table.getRowModel()&&(<VehicleTable table={table} />)} */}

// {table&&<VehicleTable table={table}/>}
// </div>
