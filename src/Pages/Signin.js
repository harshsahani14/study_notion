import React from 'react';
import { Template } from '../Components/Template';
import signup from "../assests/signup.png";

export const Signin = ({setLoggedIn,isLoggedIn}) => {
  return (
    <div>

      <Template title="Join the millions learning to code with StudyNotion for free" desc1="Build skills for today, tomorrow, and beyond." desc2="Education to future-proof your career." formtype="signup" image={signup} isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}></Template> 


    </div>
  )
}
