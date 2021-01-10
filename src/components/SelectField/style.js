import styled, { css } from 'styled-components';

const Select = styled.select`
width: 98.5%;
padding: 1%;
margin-left: 8px;
border-radius: 5px;
${(props) => props.error
  && css`
  border: 1px solid black;
  `};
`;

const Err = styled.p`
color: red;
`;
export { Select, Err };