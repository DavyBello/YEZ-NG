import Link from "next/link";
import styled, { css } from 'styled-components';
import S_Link from '../styled/S_Link'

const activeStyles = css`
  color: white;
  background-color: ${props => props.theme.colors.primary.main};
`
const S_NavLink = styled(S_Link)`
  color: ${props => props.theme.colors.dark};
  display: block;
  font-weight: 600;
  font-size: 1rem;
  padding: 8px 12px;
  text-transform: uppercase;
  transition: all 0.5s ease 0s;
  ${props => props.active ? activeStyles : ''}
  :hover { ${activeStyles} }
`


export default ({label="", href="", active = false}) => (
  <Link href={href} passHref>
    <S_NavLink active={active}>{label}</S_NavLink>
  </Link>
)
