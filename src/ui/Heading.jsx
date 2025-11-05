import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 12rem;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 4rem;
    `}
`;

export default Heading;
