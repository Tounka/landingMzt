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
export const ContenedorHorizontal = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    justify-content: space-between;
    
`
export const ContenedorVertical = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const ContenedorVerde = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--ColorVerdePrincipal);
`;