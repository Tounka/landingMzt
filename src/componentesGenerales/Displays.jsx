import styled from "styled-components"

export const DisplayPrincipal = styled.div`
    display: flex;
    flex-direction: column;
   
    
    height: auto;
    width: 100%;
    background-color: var(--ColorBlancoPrincipal);
    gap: 10px;

`

export const ContenedorGenerico = styled.div`
    height: auto;
    width: 85%;
    max-width: 1600px;


    @media (max-width: 550px) {
        width: 90%;
    }
`
export const ContenedorComponentes = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items:center;
`