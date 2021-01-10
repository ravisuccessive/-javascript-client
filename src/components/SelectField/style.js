import styled, { css } from 'styled-components';

const Select = styled.select`
width: 98.7%;
padding: 1%;
border-radius: 5px;
padding-right: 5px
${(props) => props.error
  && css`
  border: 1px solid black;
  `};
`;

const Err = styled.p`
color: red;
`;
export { Select, Err };