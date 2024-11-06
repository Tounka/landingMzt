import styled from "styled-components";

const ContenedorFooterStyled = styled.div`

    background-color: var(--ColorVerdePrincipal);
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: var(--ColorBlancoPrincipal);
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`
export const Footer = () => {
    return(
        <ContenedorFooterStyled>
            Desarollado por Ramon Castillo <br />
            6691382961
        </ContenedorFooterStyled>
    )
}