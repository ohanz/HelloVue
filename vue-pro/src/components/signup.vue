<template>
    <section class="body">
      <h1>Sign Up</h1>
      <h2>Register and Be a Hyper Member </h2>
      <div id="talker">Username: <input type="text" value="username" /></div>
      <div id="talker">Password: <input type="password" value="passw" /></div>
      <div id="talker">Email: <input type="email" value="email" /></div>
      <div id="talker">Bio/About: <input type="text" aria-multiline="true" value="username" /></div>
      <p>SignUp Now <button value="button">Submit</button></p>

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
    input{ margin-left: 10px; ;width: 180px; min-height: 35px; border: 1px solid #ccc;
         background: none !important;}
    button{
        margin-top: 20px;
    }

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