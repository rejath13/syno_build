import { Modal, Button, Form, InputGroup, Row, Col } from "react-bootstrap";
import {useUpdatevehicletypeMutation} from "../../../store/api/securepath/securepathApi"
import{useForm} from "react-hook-form"
import { useToasts } from "react-toast-notifications";
function StatusModal(p) {
  const { addToast } = useToasts();
  const [updatevehicletype, { isSuccess, error }]=useUpdatevehicletypeMutation()
  const {SetStatusModal,show}=p
  const UserID=localStorage.getItem('loginUserId')
  const id=show?.id
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const OnSubmit=async(data)=>{
    SetStatusModal({
      flag:false
    })
    reset()
    
    let res=await updatevehicletype({UserID,id,...data})
    if (res?.data?.status == true) {
      addToast("Data Updated!", {
        appearance: "success",
        autoDismiss: true,
      });
    } else {
      addToast("Something Went Wrong!", {
        appearance: "error",
        autoDismiss: true,
      });
    }
   
  }

  let status = [
    {
      value: "active",
      name: "ACTIVE",
    },
    {
      value: "inactive",
      name: "IN ACTIVE",
    },
    {
      value: "installed",
      name: "INSTALLED",
    },
    {
      value: "not installed",
      name: "NOT INSTALLED",
    },
    {
      value: "certificate only",
      name: "CERTIFICATE ONLY",
    },
    {
      value: "deactivated",
      name: "DEACTIVATED",
    },
    {
      value: "need to remove device",
      name: "need to remove device",
    },
    {
      value: "delete",
      name: "delete",
    },
  ];

  let payment = [
    {
      value: "paid",
      name: "paid",
    },
    {
      value: "not paid",
      name: "not paid",
    },
  ];

  return (
    <>
    <Modal
       show={show.flag}
       onHide={() => {
        SetStatusModal({
          flag:false
        })
    reset()
       }}
     >
       <Modal.Header closeButton>
       </Modal.Header>
       <Modal.Body>
        {
        show?.type=='status'&&
        <>
         <Col>
                <Form.Label>Status:</Form.Label>
                <Form.Control as="select" 
                {...register("vehicle_status")}
                >
                  <option value={show?.data} defaultChecked>
                    {show?.data?.toUpperCase()}
                  </option>

                  {status
                    ?.filter((item) => item?.value != show?.data)
                    .map((el) => (
                      <option value={el?.value}>{el?.name.toUpperCase()}</option>
                    ))}
                </Form.Control>
              </Col>
        </>
        
        }
        { show?.type=='payment'&&
          <>
          <Col>
           <Form.Label>Payment:</Form.Label>
           <Form.Control as="select" 
           {...register("payment")}
           >
             <option 
             value={show?.data} 
             defaultChecked>
               {show?.data?.toUpperCase()}
             </option>

             {payment
               ?.filter((item) => item?.name != show?.data)
               .map((el) => (
                 <option value={el?.name}>{el?.name.toUpperCase()}</option>
               ))}
           </Form.Control>
   </Col>
   </>
        }
       </Modal.Body>
       <Modal.Footer>
        <Button onClick={handleSubmit(OnSubmit)}>APPLY</Button>
       </Modal.Footer>
   </Modal>
   </>
  )
}

export default StatusModal