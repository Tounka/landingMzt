import styled from "styled-components";
import { ImgEntrada } from "./ImgEntrada";
import { Experiencias } from "./SeccionExperiencias";
import { SeccionServicios } from "./SeccionServicios";
import { SeccionContacto } from "./SeccionContacto";
import { SeccionPrecios } from "./SeccionPrecios";
const ContenedorSecciones = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

`
export const IndexSecciones = () => {
  return (
    <ContenedorSecciones>
        <ImgEntrada />
        <SeccionServicios />
        <Experiencias />
        <SeccionPrecios />
        <SeccionContacto />
    </ContenedorSecciones>
  
  );
}


