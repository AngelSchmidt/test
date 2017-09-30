html {
    box-sizing: border-box;
    background:#eeeeee;
    font-family:'helvetica neue';
    font-size: 20px;
    font-weight: 200;
  }
  body {
    margin: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  .site-wrap {
    max-width: 700px;
    margin: 70px auto;
    background:white;
    padding:40px;
    text-align: justify;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);
    transform: scale(0.98);
    transition: transform 0.5s;
  }
  
  body.fixed-nav .site-wrap {
    transform: scale(1);
  }
  
  
  header {
    text-align: center;
    height:50vh;
    background:url(http://wes.io/iEgP/wow-so-deep.jpg) bottom center no-repeat;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content: center;
  }
  
  h1 {
    color:white;
    font-size: 7vw;
    text-shadow: 3px 4px 0 rgba(0,0,0,0.2)
  }
  
  nav {
    background:black;
    top:0;
    width: 100%;
    transition:all 0.5s;
    position: relative;
    z-index: 1;
  }
  
  body.fixed-nav nav {
    position: fixed;
    box-shadow:0 5px 0 rgba(0,0,0,0.1);
  }
  
  nav ul {
    margin: 0;
    padding:0;
    list-style: none;
    display:flex;
  }
  
  nav li {
    flex:1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  li.logo {
    max-width:0;
    overflow: hidden;
    background: white;
    transition: all 0.5s;
    font-weight: 600;
    font-size: 30px;
  }
  
  li.logo a {
    color:black;
  }
  
  .fixed-nav li.logo {
    max-width:500px;
  }
  
  nav a {
    text-decoration: none;
    padding:20px;
    display: inline-block;
    color:white;
    transition:all 0.2s;
    text-transform: uppercase;
  }