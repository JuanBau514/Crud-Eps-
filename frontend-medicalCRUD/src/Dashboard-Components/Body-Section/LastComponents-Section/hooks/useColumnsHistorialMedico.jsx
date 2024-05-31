import { useMemo } from 'react';

const useColumns = () => {
  return useMemo(() => [
    {
      Header: 'Id Diagnostico',
      accessor: 'iddiagnostico'
    },
    {
      Header: 'Fecha Diagnostico',
      accessor: 'fechadiagnostico'
    },
    {
      Header: 'Hora y Fecha',
      accessor: 'horayfecha'
    },
    {
      Header: 'Paciente',
      accessor: 'paciente'
    }
  ], []);
};

export default useColumns;
