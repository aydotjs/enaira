import React from 'react'
import { Container, FormButton, Form, FormH1, Text, Icon, FormContent, FormInput, FormLabel, FormWrap } from './SigninElements'

const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Enaira</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required/>
                            
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required/>

                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot Password</Text>

                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin
