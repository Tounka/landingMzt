import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ContenedorGenerico } from "./Displays";
import { TxtGenerico } from "./Txt";
import { FaMapMarkedAlt } from "react-icons/fa";
const ContenedorHeaderStyled = styled.header`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content:center;
    z-index: 1000;
    width: 100%;
    height: 80px;
    background-color: ${(props) => (props.scrolled ? "var(--ColorBlancoPrincipal)" : "transparent")};
    transition: background-color 0.3s ease;
`;
const ContenedorHeader = styled(ContenedorGenerico)`
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items:center;
`
const BtnPrincipal = styled.button`
    height: 60px;
    width: 60px;
    background-color: var(--ColorVerdePrincipal);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    cursor: pointer;
    font-size: 40px;
    border-radius: 10px;
    color: var(--ColorBlancoPrincipal);
    transition: font-size 0.1s, background-color 0.3s;

    &:hover{
        background-color: var(--ColorVerdePrincipalHover);
        font-size: 42px;
        transition: font-size 0.1s, background-color 0.3s;

    }
`
const BtnSecundario = styled(BtnPrincipal)`
    width: auto;
    font-size: 32px;
    &:hover{
        font-size: 32px;
    }
`

const ContenedorSeccion = styled.div`
    display: flex;
    width: auto;
    height: 100%;
    align-items:center;
    gap: ${props => props.gap ? props.gap : '10px;'};
`
export const MenuHeader = () => {
    const [scrolled, setScrolled] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ContenedorHeaderStyled scrolled={scrolled}>
            <ContenedorHeader>

                <ContenedorSeccion>
                    <BtnPrincipal> <FaMapMarkedAlt /> </BtnPrincipal>
                    <TxtGenerico color= 'var(--ColorVerdePrincipal)' size= '28px' bold fontFamily='var(--FuentePrincipal)' > Mejora tu vida </TxtGenerico>
                </ContenedorSeccion>

                <ContenedorSeccion gap='20px'>
                    <TxtGenerico onClick={() => scrollToSection('inicio')} color= 'var(--ColorVerdePrincipal)' size= '28px' bold pointer fontFamily='var(--FuentePrincipal)' > Inicio </TxtGenerico>
                    <TxtGenerico color= 'var(--ColorVerdePrincipal)' size= '26px'  fontFamily='var(--FuentePrincipal)' > Experiencias </TxtGenerico>
                    <BtnSecundario>Contacto</BtnSecundario>
                </ContenedorSeccion>
            </ContenedorHeader>
        </ContenedorHeaderStyled>
    );
};
