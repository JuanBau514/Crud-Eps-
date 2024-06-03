import { useMemo } from 'react';

const useRows = () => {
  return useMemo(() => [
    { doctor: 'Masturbin', especialidad: 'Chupar', horayfecha: '2024-05-10 10:00:00', sede: 'Su Casa' , modalidad: 'Prostitucion'},   
    { doctor: 'Secretaria', especialidad: 'Robar Novia', horayfecha: '2024-05-10 10:00:00', sede: 'El Colegio' , modalidad: 'Robo Sin Permiso'}
  ], []);
};

export default useRows;
