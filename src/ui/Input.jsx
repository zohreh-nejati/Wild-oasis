import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-grey-300);
`;

function Input() {
  return <StyledInput></StyledInput>;
}

export default Input;
