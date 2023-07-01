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
   
    ${(p) => p.variant === 'secondary' && `background-color:${p.theme.colors.secondary};
     color:${p.theme.colors.primary};
    `}

    ${(p) => p.variant === 'text' && `background-color:rgba(0,0,0,0);
          color:${p.theme.colors.primary};

          &:hover {
            background-color: rgba(0,0,0,0);
            color:#0e7c86;
          }
        `}
  `
