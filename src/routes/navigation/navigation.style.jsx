import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationSt = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const NavLinksContainer = styled.div`
  min-width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 1rem 1.5rem;
  cursor: pointer;
`
export const NavLinkSpan = styled.span`
  padding: 1rem 1.5rem;
  cursor: pointer;
`
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 7rem;
  padding: 2.5rem;

  display: grid;
  align-content: center;
  justify-content: center
`

export const SignInNav = styled.span`
  word-spacing: -0.5rem;
  cursor: pointer;
`