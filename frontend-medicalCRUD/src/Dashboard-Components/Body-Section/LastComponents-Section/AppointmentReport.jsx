import React from "react";
import { useTable } from "react-table";
import useRows from "./hooks/useRowsConsultarCitas";
import useColumns from "./hooks/useColumnsConsultarCitas";
import useBootstrap from "./useBootsrap";
import {
  MDBCol,  
  MDBRow,
  MDBCardText,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

export const AppointmentReport = () => {
  useBootstrap();
  const columns = useColumns();
  const data = useRows();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div>
      <h1>Reportes de Citas</h1>
      <MDBRow>
        <MDBCol sm="12">
          <div className="d-flex align-items-center">
            <MDBCardText style={{ marginRight: "10px" }}>
              ID del Paciente
            </MDBCardText>
            <div style={{ marginRight: "10px" }}>
              <MDBInput
                className="text-muted"
                placeholder="Ingrese el Id del paciente"
              />
            </div>
          </div>
          <MDBBtn className="btn btn-primary">Buscar</MDBBtn>
        </MDBCol>
      </MDBRow>
      <br />
      <table
        {...getTableProps()}
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{ border: "1px solid black", padding: "5px" }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    style={{ border: "1px solid black", padding: "5px" }}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
