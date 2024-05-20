import { RiDeleteBin5Line } from "react-icons/ri";
import { Button, ListGroupItem } from "react-bootstrap"

const AppointmentInfo = ({appointment, onDeleteAppointment}) => {
    return (
        <>
            <ListGroupItem>
                <p><small>Date: {appointment.aptDate}</small></p>
                <p><strong>First Nmae: </strong>{appointment.firstName}</p>
                <p><strong>Last Name: </strong>{appointment.lastName}</p>
                <p><strong>Notes: </strong>{appointment.aptNotes}</p>
                <Button size="sm" variant="danger" onClick={() => onDeleteAppointment(appointment.id)}>
                <RiDeleteBin5Line /> 
                    Delete
                </Button>
            </ListGroupItem>
        </>
    )
}

export default AppointmentInfo;