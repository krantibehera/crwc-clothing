import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth , signInWithGoogle} from '../../firebase/firebase.util';


class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
    
        const { email, password } = this.state;
    
        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({ email: '', password: '' });
        } catch (error) {
          console.log(error);
        }
      };
    

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
              <h2>I already have an account</h2>
              <span>sign in with your email and password</span>

              <form onSubmit={this.handleSubmit}>
                  <FormInput name='email' type='email' handleChange={this.handleChange} value={this.state.email} label='email' required/>
                  <FormInput name='password' type='password' handleChange={this.handleChange} value={this.state.password} label='password' required/>

                  <div className='buttons'>
                  <CustomButton type='submit'>Sign in</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSigIn>Sign in with google</CustomButton>
                  </div>

              </form>
            </div>
        );
    }
}

export default SignIn;