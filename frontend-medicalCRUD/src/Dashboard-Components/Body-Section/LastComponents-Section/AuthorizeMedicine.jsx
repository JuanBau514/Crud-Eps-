import React from 'react';
import useBootstrap from './useBootsrap';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export const AuthorizeMedicine = () => {
  useBootstrap();

  return (
    <div>
      <h1>Autorizar Medicamentos</h1>
    </div>
  );
};
