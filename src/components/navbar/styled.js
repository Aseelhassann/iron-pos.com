import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  height: 70px;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  font-family: "Bebas Neue", sans-serif;
  display: flex;
  justify-content: center;
  box-shadow: 0 10px 10px 2px rgba(128, 128, 128, 0.5);

  &.blurred {
    background-color: rgba(62, 62, 62, 0.8);
    backdrop-filter: blur(10px);
  }

  &.expanded {
    position: fixed;
    left: 0;
    width: 100%;
    min-height: 60vh;
    background-color: rgba(62, 62, 62, 0.95);
    z-index: 1000;
  }
`;

export const NavContent = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
`;

export const NavLogo = styled(Link)`
  // Use Link instead of <a>
  text-decoration: none;
  gap: 5px;
  height: 100%;
  width: 250px;
  flex-shrink: 0;
  padding-top: 5px;
  color: white;

  & > span {
    font-size: 40px;
    @media (max-width: 1180px) {
      flex: 0.1;
    }
  }
`;

export const NavLinks = styled.div`
  flex: 0.6;
  @media (max-width: 1180px) {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.expanded {
      display: flex;
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      height: auto;
      z-index: 998;
      padding: 20px 0;
    }
  }
`;

export const LinksContainer = styled.ul`
  height: 100%;
  text-transform: uppercase;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  align-items: center;
  list-style-type: none;

  & > li > a {
    color: white !important;
    font-size: 24px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: rgba(101, 142, 5, 1);
    }
  }

  @media (max-width: 1180px) {
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 35px;
    gap: 30px;

    & > li > a {
      font-size: 25px;
    }
  }
  & > .ant-select {
    @media (max-width: 1180px) {
      display: inline-block !important;
      position: absolute;
      right: 8%;
      top: 10px;
    }
  }
`;

export const NavActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  flex: 0.2;

  @media (max-width: 990px) {
    gap: 0;
  }

  & > button,
  & > .ant-select {
    @media (max-width: 1180px) {
      display: none;
    }
  }

  @media (max-width: 1180px) {
    font-size: 30px;
    flex: 0.1;
  }
`;

export const ContactBtn = styled.button`
  background-color: rgba(101, 142, 5, 1);
  border-radius: 30px;
  width: 140px;
  height: 35px;
  border: none;
  color: white;
  font-size: 20px;

  @media (max-width: 1180px) {
    &.mobile-btn {
      display: inline-block !important;
    }
  }

  &:hover {
    background-color: rgba(80, 120, 4, 1);
  }

  &:focus {
    outline: 2px solid rgba(101, 142, 5, 1);
  }
`;

export const HamburgerWrapper = styled.div`
  display: none;
  position: fixed;
  top: 25px;
  @media (max-width: 1180px) {
    display: block;
  }
`;
