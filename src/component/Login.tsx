import React from 'react'
import { styled } from 'styled-components';
import { CMTitle } from '../common/commonText';
import { CMButton } from '../common/commonBtn';
import { Link } from 'react-router-dom';

export default function Login() {
  const subTit = `We'er a team that guides each other`
  const title = `You must Sign In to Join`
  return (
    <LoginWrapper>
      <LoginContainer>
        <CMTitle content={title}/>
        <CMTitle content={subTit} />
        <CMButton text='Sign up with Google' style={{width:'350px', margin:'10px'}}/>
        <CMButton text='Sign up with Apple ID'style={{width:'350px', margin:'10px'}}/>
        <FormLoginWrapper action="">
          <label htmlFor="email">Email</label>
          <InputLoginWrapper type="email" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <InputLoginWrapper type="password" placeholder="Password" />
          <input type="submit" value="Create Account" />
        </FormLoginWrapper>
        <CMTitle content='Alredy have an account?' />
        <Link to='/new-feed'>Log in</Link>
      </LoginContainer>
    </LoginWrapper>
  )
}
const InputLoginWrapper = styled.input`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;
const FormLoginWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
`;
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 40%;
  border: 1px solid #ccc;
  padding: 2rem;
  margin: 2rem;
`;