// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  height: 100vh;
`

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px;
  background-color: #383a4e;
  box-shadow: 1px 1px #434451;
  font-family: 'Roboto';
  border-radius: 12px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 52px;
  margin-bottom: 0px;
`

export const Text = styled.p`
  color: #f8fafc;
  font-size: 16px;
  margin-bottom: 52px;
`

export const PasswordInput = styled.input`
  padding: 12px;
  border: none;
  border-radius: 6px;
  width: 100%;
`

export const ErrorMsg = styled.p`
  color: #ef4444;
  font-size: 12px;
`
