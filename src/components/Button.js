import styled from "styled-components"

const ButtonCart = styled.button`
  color: ${props => (props.cart ? "var(--color-four)" : "var(--color-three)")};
  background: ${props => (props.cart ? "var(--color-five)" : "transparent")};
  border: none;
  border-radius: 1rem;
  padding: 0.1rem 0.5rem;
  transition: all 0.1s;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.8);
  text-transform: capitalize;
  &:hover,
  &:active {
    background: ${props =>
      props.cart ? "var(--color-four)" : "var(--color-three)"};
    color: ${props => (props.cart ? "var(--color-five)" : "var(--color-two)")};
  }
  &:focus {
    outline: none;
  }
`

const ButtonStore = styled.button`
  color: var(--color-three);
  background: var(--color-two);
  border: none;
  border-radius: 2px;
  padding: 0.5rem 1.5rem;
  text-transform: capitalize;
  transition: all 0.5s;
  &:hover,
  &:active {
    background: linear-gradient(to left, var(--color-four), var(--color-two));
    transform: scale(0.9);
  }
  &:focus {
    outline: none;
  }
`

export { ButtonCart, ButtonStore }
