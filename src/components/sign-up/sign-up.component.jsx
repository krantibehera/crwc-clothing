import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { auth , createUserProfileDocument } from '../../firebase/firebase.util';

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async event => {
       event.preventDefault();
       const { displayName, email, password, confirmPassword } = this.state;
       if(password!==confirmPassword){
         alert("Password dont Match");
         return;
       }

       try {
       const { users } = await auth.createUserWithEmailAndPassword(email,password);

       await createUserProfileDocument(users,{ displayName });
       this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
       } catch(err){
           console.log(err);
       }
    }

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({ [name]:value })
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className='title' >I dont have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                value={displayName}
                        onChange={this.handleChange}
                        label = 'displayName'
                        required
                />
                    <FormInput
                        type='email'
                        name='email'
                value={email}
                        onChange={this.handleChange}
                        label = 'email'
                        required
                 />
                    <FormInput
                        type='password'
                        name='password'
                value={password}
                        onChange={this.handleChange}
                        label = 'password'
                        required
            />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                value={confirmPassword}
                        onChange={this.handleChange}
                        label = 'confirmPassword'
                        required
            />
                    <CustomButton type='submit'>Sign Up </CustomButton>
                </form>
            </div>
        )
    }
}

export default Signup;