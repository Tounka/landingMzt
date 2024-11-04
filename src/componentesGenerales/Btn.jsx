import styled from "styled-components";

export const BtnGenerico = styled.button`
    height: auto;
    width: auto;
    background-color: var(--ColorVerdePrincipal);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-weight: bold;
    padding: 10px;

    cursor: pointer;
    font-size: ${props => props.size ? props.size : '40px' } ;
    border-radius: 10px;
    color: var(--ColorBlancoPrincipal);
    transition:  background-color 0.3s;

    &:hover{
        background-color: var(--ColorVerdePrincipalHover);
      
        transition:  background-color 0.3s;

    }
`