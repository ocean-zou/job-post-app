import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 32px 40px;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: ${({ theme }) => theme.borderRadius};
    max-width: 400px;
    width: 90vw;
`
