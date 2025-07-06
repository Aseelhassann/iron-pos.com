import styled from "styled-components";

export const HamburgerIcon = styled.div`
  width: 30px;
  height: 24px; /* Adjusted height */
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 4px; /* Thickness of the lines */
    width: 100%; /* Full width of the container */
    background: white;
    border-radius: 9px;
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1),
  span:nth-child(2) {
    top: 0;
  }

  span:nth-child(3),
  span:nth-child(4) {
    top: 10px; /* Adjusted to fit the smaller size */
  }

  span:nth-child(5),
  span:nth-child(6) {
    top: 20px; /* Adjusted to fit the smaller size */
  }

  /* Open state transformations */
  &.open span:nth-child(1),
  &.open span:nth-child(6) {
    top: 10px; /* Centered to form the X */
    transform: rotate(45deg);
  }

  &.open span:nth-child(2),
  &.open span:nth-child(5) {
    top: 10px; /* Centered to form the X */
    transform: rotate(-45deg);
  }

  &.open span:nth-child(3),
  &.open span:nth-child(4) {
    opacity: 0; /* Hide the middle lines */
  }
`;
