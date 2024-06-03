import { useMemo } from 'react';

const useColumns = () => {
  return useMemo(() => [
    {
      Header: 'Doctor',
      accessor: 'doctor'
    },
    {
      Header: 'Especialidad',
      accessor: 'especialidad'
    },
    {
      Header: 'Hora y Fecha',
      accessor: 'horayfecha'
    },
    {
      Header: 'Sede',
      accessor: 'sede'
    },
    {
      Header: 'Modalidad',
      accessor: 'modalidad'
    }
  ], []);
};

export default useColumns;
