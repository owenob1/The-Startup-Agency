<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
<meta charset="utf-8">
<title>The Startup Agency</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="author" content="weibergmedia">
<meta name="Description" content="Three – Responsive HTML5 Portfolio for Creatives" />
<link href="css/reset.css" rel="stylesheet" type="text/css" media="screen" />
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css" />
<link href="css/contact.css" rel="stylesheet" type="text/css" media="screen" />
<link href="css/styles.css" rel="stylesheet" type="text/css" media="screen" />
<link href="css/jquery.fancybox.css" rel="stylesheet" type="text/css" media="screen" />
<link href="css/responsive.css" rel="stylesheet" type="text/css" media="screen" />
<link href="http://fonts.googleapis.com/css?family=Montserrat:400,600,700" rel="stylesheet" type="text/css" />
<link href="http://fonts.googleapis.com/css?family=Lora:400,400italic,600" rel="stylesheet" type="text/css" />
<script src="js/modernizr.js" type="text/javascript"></script>
</head>
<body class="full-height">
<!-- Preloader -->
<div id="preloader">
  <div id="status">
    <div class="parent">
      <div class="child">
        <p>loading</p>
      </div>
    </div>
  </div>
</div>
<!-- start main nav -->
<nav id="main-nav">
  <ul id="options" class="clearfix">
    <li> <a href="{{ route('home') }}" class="{{ (Route::currentRouteNamed('home')) ? 'selected' : '' }}">Home</a> </li>
    <li> <a href="{{ route('portfolio') }}" class="{{ (Route::currentRouteNamed('portfolio')) ? 'selected' : '' }}">Portfolio</a></li>
    <li> <a href="{{ route('services') }}" class="{{ (Route::currentRouteNamed('services')) ? 'selected' : '' }}">Services</a> </li>
    <li> <a href="{{ route('agency') }}" class="{{ (Route::currentRouteNamed('agency')) ? 'selected' : '' }}">Agency</a> </li>
    <li> <a href="{{ route('blog') }}" class="{{ (Route::currentRouteNamed('blog')) ? 'selected' : '' }}">Blog</a> </li>
    <li> <a href="#" class="sub-nav-toggle">Features</a>
      <ul class="sub-nav">
        <li> <a href="{{ route('work') }}">Project</a> </li>
        <li> <a href="{{ route('slider') }}">Slider</a> </li>
        <li> <a href="{{ route('post') }}">Post</a> </li>
        <li> <a href="{{ route('404') }}">404</a> </li>
      </ul>
    </li>
    <li> <a href="{{ route('contact') }}" class="{{ (Route::currentRouteNamed('contact')) ? 'selected' : '' }}">Contact</a> </li>
  </ul>
  <ul class="social-list clearfix">
    <li> <a href="#"><i class="fa fa-twitter"></i></a> </li>
    <li> <a href="#"><i class="fa fa-pinterest-p"></i></a> </li>
    <li> <a href="#"><i class="fa fa-instagram"></i></a> </li>
    <li> <a href="#"><i class="fa fa-google-plus"></i></a> </li>
  </ul>
</nav>
<!-- end main nav -->
<div id="wrap">
  <header id="header">
    <div class="logo-wrapper">
      <h1 id="logo"><a href="{{ route('home') }}">Three</a></h1>
      <div class="tagline"><span>The <br / />Startup <br />
        Agency</span></div>
    </div>
    <div id="menu-button">
      <div class="centralizer">
        <div class="menu-trigger"></div>
        <div class="cursor">
          <div id="nav-button"> <span class="nav-bar"></span> <span class="nav-bar"></span> <span class="nav-bar"></span>
            <div class="circle-anim"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- end header -->

  @yield('content')


  <footer id="footer" class="clearfix">
    <div class="padding-wrapper">
      <p class="alignleft">© 2017, The Startup Agency.</p>
      <p class="alignright">Made with <i class="fa fa-heart"></i> in Australia.</p>
    </div>
  </footer>
  <script src="js/jquery-1.11.2.min.js" type="text/javascript"></script>
  <script src="js/jquery-easing-1.3.js" type="text/javascript"></script>
  <script src="js/jquery.touchSwipe.min.js" type="text/javascript"></script>
  <script src="js/main.js" type="text/javascript"></script>
  <script src="js/jquery.form.js" type="text/javascript"></script>
  <script src="js/input.fields.js" type="text/javascript"></script>
  <script src="js/preloader.js" type="text/javascript"></script>
  <script src="js/jquery.fancybox.pack.js" type="text/javascript"></script>
  <script src="js/bootstrap.min.js" type="text/javascript"></script>
  <script src="js/jquery.mixitup.min.js" type="text/javascript"></script>
  </body>
  </html>
