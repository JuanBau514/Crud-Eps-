import { useMemo } from 'react';

const useRows = () => {
  return useMemo(() => [
    { iddiagnostico: '1234', descripcion: 'Putos', fechadiagnostico: '2024-05-10', horayfecha: '2024-05-10 10:00:00', paciente: 'Masturbin'},   
    { iddiagnostico: '5678', descripcion: 'Putos', fechadiagnostico: '2024-05-10', horayfecha: '2024-05-10 10:00:00', paciente: 'Secretaria'}
  ], []);
};

export default useRows;
