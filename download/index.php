<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

<!-- <div class="header">
  <h2>Scroll Down</h2>
  <p>Scroll down to see the sticky effect.</p>
</div> -->

<div class="sidenav box-effect">
  <div class="side-menu">
  HOME
  </div>
  <div class="side-menu">
    TYPE
  </div>
  <div class="side-menu">
    CONTACT
  </div>
  <div class="side-menu">
    CONTACT
  </div>
</div>

<div class="navbar-sticky">
  <div class="flex-container" style="height: 40px">
    <div style="width: 250px; font-size: 24px; font-weight: 500; text-align: center;padding-top: 5px">DOWNLOAD</div>
    <div class="navtop-item">HOME</div>
    <div class="navtop-item">SERVICES</div>
    <div class="navtop-item">CONTACT</div>
    <div class="navtop-item">AB0RT</div>
  </div>
  <div class="flex-container box-effect" style="height: 40px;background-color: rgba(0,0,0,0.1);">
    <div style="width: 250px;text-align: center; padding-top: 10px;">Search software</div>
    <div class="search-container" style="padding-top: 10px;">
      <form action="/action_page.php">
        <input type="text" placeholder="Search.." name="search">
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div>
  </div>

</div>


<div class="content box-effect">
  <h2>Responsive Sidenav Example</h2>
  <p>This example use media queries to transform the sidenav to a top navigation bar when the screen size is 900px or less.</p>
  <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
  <p>You will learn more about media queries and responsive web design later in our CSS Tutorial.</p>
  <h3>Resize the browser window to see the effect.</h3>
</div>
<style type="text/css">
  body {
    margin: 0;
    font-family: "Century Gothic",メイリオ,Meiryo,ヒラギノ角ゴ\20Pro\20W3,"Hiragino Kaku Gothic Pro",ＭＳ\20Ｐゴシック,Arial,Verdana,sans-serif !important;
  }
/*  div{
    -webkit-box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.3);
    box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.3);
  }*/
  .box-effect{
    -webkit-box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.3);
    box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.3);
  }
  .navbar-sticky{
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: whitesmoke;
  }
  .flex-container {
    display: flex;
    flex-wrap: nowrap;
  }
  .sidenav{
    width: 250px;
    position: fixed;
    top: 80px;
    left: 0;
    height: 100%;
  }
  .side-menu{
    width: 100%;
    height: 25px;
    padding-top: 15px;
    font-size: 13px;
    text-align: center;
    font-weight: 700;
    transition: 0.5s;
  }
  .side-menu:hover{
    background-color: rgba(0,0,0,0.1);
    cursor: pointer;
  }
  .navtop-item{
    font-size: 13px;
    padding-top: 10px;
    width: 100px;
    text-align: center;
    font-weight: 700;
    transition: 0.5s;

  }
  .navtop-item:hover{
    background-color: rgba(0,0,0,0.1);
    cursor: pointer;
  }
  .content{
    padding-top: 80px;
    background-color: gray;
    max-width: 1000px;
    margin: auto;
    height: 1000px;
  }
</style>
</body>
</html>
