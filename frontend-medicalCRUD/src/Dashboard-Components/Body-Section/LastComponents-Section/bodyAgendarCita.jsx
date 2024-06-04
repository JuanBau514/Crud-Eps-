import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './agendarCitas.scss';
import Listening from '../Listing-Section/ListeningCitas';

function AgendarCitas() {
    const [date, setDate] = useState(new Date());

    const onDateChange = (selectedDate) => {
        setDate(selectedDate);
        // Aquí puedes manejar la lógica para agendar la cita, como abrir un modal o redirigir a otro componente/formulario.
        alert(`Fecha seleccionada: ${selectedDate}`);
    };

    return (
        <div className="agendar-citas-container">
            <h2>Agendar Citas Médicas</h2>
            <Calendar
                onChange={onDateChange}
                value={date}
                className="calendar"
                locale="es-ES"
            />
            <div>
                <br />
                <br />
                <h3>Fecha seleccionada: {date.toDateString()}</h3>
            </div>
            <Listening></Listening>
        </div>
    );
}

export default AgendarCitas;
