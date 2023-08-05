import styled from 'styled-components'

export const StyledNavigation = styled.nav`
    height:96px;
    display:flex;
    align-items:center;
    padding:0 16px;
    justify-content: space-between;
    border-bottom: 1px solid ${({theme})=>theme.colors.lightgrey};
`

export const DrawerToggleButton=styled.button`
    cursor:pointer
`

export const NavTitle=styled.h1`
    font-weight: 400;
`