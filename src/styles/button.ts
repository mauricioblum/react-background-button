import styled from 'styled-components'

interface StyledButtonProps {
  bg: string
  size: string
  width?: number
  height?: number
}

export const Button = styled.button<StyledButtonProps>`
  all: unset;
  background-image: ${(props) => `url(${props.bg})`};
  background-size: ${(props) => `${props.size}`};
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  padding: 8px 12px;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`
