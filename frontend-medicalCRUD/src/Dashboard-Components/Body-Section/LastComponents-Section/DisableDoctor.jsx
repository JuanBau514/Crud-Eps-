import React from "react";
import useBootstrap from "./useBootsrap";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

export const DisableDoctor = () => {
  useBootstrap();

  return (
    <div>
      <h1>Deshabilitar Medico</h1>
      <MDBRow>
        <MDBCol sm="12">
          <div className="d-flex align-items-center">
            <MDBCardText style={{ marginRight: "10px" }}>
              ID del Doctor
            </MDBCardText>
            <div style={{ marginRight: "10px" }}>
              <MDBInput
                className="text-muted"
                placeholder="Ingrese el Id del doctor"
              />
            </div>
          </div>
          <MDBBtn className="btn btn-primary">Buscar</MDBBtn>
        </MDBCol>
      </MDBRow>

      <br />
      <MDBContainer className="container-fluid py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Eliminar Doctor</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBCardText>Nombre</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="10">
                    <MDBInput
                      className="text-muted"
                      placeholder="Ingrese el nombre del Doctor"
                    />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="5">
                    <MDBCardText>Dirección</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBInput
                      className="text-muted"
                      placeholder="Ingrese la dirección"
                    />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Ciudad</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Escoja la ciudad</option>
                      <option value="1">Bogotá</option>
                      <option value="2">Medellin</option>
                      <option value="3">Cali</option>
                    </select>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Licencia Medica</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBInput
                      className="text-muted"
                      placeholder="Ingrese la licencia Medica"
                    />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="5">
                    <MDBCardText>Especialidad</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Escoja la especialidad</option>
                      <option value="2001">Pediatría</option>
                      <option value="2002">Cirugía General</option>
                      <option value="2003">Cardiología</option>
                    </select>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="5">
                    <MDBCardText>Tipo de Licencia</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Escoja el tipo de licencia</option>
                      <option value="3001">Tipo A</option>
                      <option value="3002">Tipo B</option>
                      <option value="3003">Tipo C</option>
                    </select>
                  </MDBCol>
                </MDBRow>
                <hr />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
