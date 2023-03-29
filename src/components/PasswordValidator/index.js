// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  PasswordContainer,
  Heading,
  Text,
  PasswordInput,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const passwordHandler = event => {
    setPassword(event.target.value)
  }

  const errorText =
    password.length > 8 ? '' : 'Your password must be at least 8 characters'

  return (
    <MainContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <PasswordInput
          type="password"
          value={password}
          onChange={passwordHandler}
        />
        <ErrorMsg>{errorText}</ErrorMsg>
      </PasswordContainer>
    </MainContainer>
  )
}

export default PasswordValidator
