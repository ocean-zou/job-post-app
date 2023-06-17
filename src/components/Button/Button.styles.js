import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    border:none;
    padding:8px 20px;
    cursor:pointer;
    border-radius: ${(props) => props.theme.borderRadius};
    transition:background-color 0.2s;
    &:hover{
      background-color: #0e7c86;
    }
`
