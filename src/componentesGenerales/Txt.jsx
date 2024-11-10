import styled from "styled-components"
export const TxtGenerico = styled.p`
    
    text-align: ${props => props.aling ? props.aling : 'center'};
    font-size: ${props => props.size ? props.size : '14px'};
    color: ${props => props.color ? props.color : ''};
    cursor: ${props => props.pointer ? 'pointer' : ''};
    font-weight: ${props => props.bold ? 'bold' : ''};
    margin: 0;
    font-family: ${props => props.fontFamily ? props.fontFamily : 'var(--FuenteSecundaria)'};
` 
export const TxtTitularGenericoH1 = styled.h1`
    user-select: none;
    text-align: ${props => props.aling ? props.aling : 'center'};
    font-size: ${props => props.size ? props.size : '14px'};
    color: ${props => props.color ? props.color : ''};
    cursor: ${props => props.pointer ? 'pointer' : ''};
    font-weight: ${props => props.bold ? 'bold' : ''};
    margin: 0;
    font-family: ${props => props.fontFamily ? props.fontFamily : 'var(--FuentePrincipal)'}
` 