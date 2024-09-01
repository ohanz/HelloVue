<template>
    <section class="body">
      <h1>Sign Up</h1>
      <h2>Register and Be a Hyper Member </h2>
      <div id="talker">Username:
         <input type="text" value="" placeholder="username" /></div>
      <div id="talker">Password: 
        <input type="password" value="" name="passw" /></div>
      <div id="talker">Email: 
        <input type="email"  placeholder="email" /></div>
      <div id="talker"><span style="position:relative; top: -50px; padding-right: 10px;">Bio/About:</span> 
        <textarea id="texta" type="text" style="height:100px; width: 250px;" placeholder="Add Bio" ></textarea></div>
      <p>SignUp Now
         <button id="butt" value="button">Submit</button></p>

      <footer>
        <p :style="{  }" @click="">Edit Profile</p>
      <!-- <p :class="{ green: isGreen}" @click="toggleGreen">
    This should be Green... but click me to toggle it.
  </p> -->
      <nav>
      <ul>
        <li><router-link to="/profile">Profile</router-link></li>
      </ul>
    </nav>
      </footer>
    </section>
  </template>
  
  <style>
   
   section.body{
      display: inline; padding-left: 100px;margin:40px 0 100px 0;
      /* visibility:hidden */
    }
    section#Email section#phone{
      margin: 10px 0 10px 0; font-size: 18px;
    }
    h1{color:green}
    div#talker{
      font-size: 20px !important;color: #9b5959;margin: 10px 0 3px 0;
    }
    input, #texta{
        color: white;padding: 5px; background: none !important;
    }
    input{color: white; margin-left: 10px; ;width: 200px; min-height: 35px; border: 1px solid #ccc;
         border-radius: 5px; padding: 10px;
         -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;}
  input:focus {
  border: 3px solid #555;
}

         button#butt{
            background-color: #45357a;
            color: white;
            padding: 14px 20px;
            margin: 18px 0;border: none;
            border-radius: 4px;
            cursor: pointer;
         }
         button#butt:hover {
         background-color: #311f6b;
        }

        
 ::-ms-input-placeholder { /* Edge 12-18 */
  color: red;
  padding: 10px;
}

::placeholder {
  color: red;
  padding: 10px;
}
    /* button{
        margin-top: 20px;
    } */

    footer {
    margin-top: 30px;
    display: flex;
    border-top: 1px solid #ccc;
    padding: .5rem 1rem;

    p {
      margin-left: 1rem;
    }
    }
    nav {
    margin-left: auto;

    ul {
      list-style: none;
    }

    ul li {
      display: inline-flex;
      margin-left: 1.5rem;
    }
  }
  
   </style>