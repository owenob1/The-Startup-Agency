<!doctype html>
<html class="no-js" lang="en">

<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Startup Agency</title>

	<!-- ========== META TAGS ========== -->
	<meta name="description" content="Options - Responsive Multipurpose HTML Template ">
	<meta name="keywords" content="business, responsive, multi-purpose">
	<meta name="author" content="SaltTechno">

	<!-- ========== ICONS ========== -->
	<link rel="apple-touch-icon" href="apple-touch-icon.png">
	<!-- Place favicon.ico in the root directory -->

	<!-- ========== COMMON STYLES ========== -->
	<link rel="stylesheet" href="css/bootstrap.min.css" media="screen" >
	<link rel="stylesheet" href="css/font-awesome.min.css" media="screen" >
	<link rel="stylesheet" href="css/ionicons.min.css" media="screen">
	<link rel="stylesheet" href="css/animate.min.css" media="screen">
	<link rel="stylesheet" href="css/animsition.min.css" media="screen">

	<!-- ========== PAGE STYLES ========== -->
	<link rel="stylesheet" type="text/css" href="css/revslider/settings.css">
	<link rel="stylesheet" href="css/revslider/layers.css" media="screen">
	<link rel="stylesheet" href="css/revslider/navigation.css" media="screen">
	<link rel="stylesheet" href="css/owl/owl.carousel.min.css" media="screen">
	<link rel="stylesheet" href="css/owl/owl.theme.default.min.css" media="screen">

	<!-- ========== THEME CSS ========== -->
	<link rel="stylesheet" href="css/main.min.css" media="screen" >

	<!-- ========== MODERNIZR ========== -->
	<script src="js/modernizr/modernizr.min.js"></script>
</head>

<body>

	<div class="main-wrapper animsition">
		<nav class="navbar me-menu navbar-fixed-top">
			<div class="container-fluid">

				<!-- ========== BRAND & TOGGLE - KEPT TOGETHER FOR BETTER MOBILE DISPLAY ========== -->
				<div class="navbar-header">
					<button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#me-navbar" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="index.html">
						<img src="images/logo.png" alt="logo">
					</a>
				</div>
				<!-- /.navbar-header -->

				<!-- ========== NAV LINKS & ITS CONTENT ========== -->
				<div class="collapse navbar-collapse" id="me-navbar">
					<ul class="nav navbar-nav pull-right">
						<li class="active dropdown">
							<a href="{{ 'home' }}" class="active dropdown"  role="button" aria-haspopup="true" aria-expanded="false">Home </a>
							<!-- / .dropdown-menu -->
						</li>
						<li class="dropdown">
							<a href="{{ 'about' }}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Us </b></a>
						</li>
						<!-- / .dropdown (features) -->

							</ul>
						<li class="dropdown dd-left">
							<a href="{{ 'contact' }}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Contact Us </a>
						</li>
						<!-- / .dropdown.dd-left (pages) -->
					</ul>
					<!-- /.nav navbar-nav -->
				</div>
				<!-- /#me-navbar.collapse navbar-collapse -->
			</div>
			<!-- /.container-fluid -->
		</nav>
		<!-- /.navbar navbar-default -->

  @yield('content')


  <!-- ========== FOOTER ========== -->
  <footer class="footer">
    <div class="container top-container">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <h6>About Us</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <!-- /.col-md-4 -->

        <div class="col-md-4 col-sm-6">
          <h6>Contact Us</h6>
          <p><i class="ion-ios-location"></i> Level 5, 1 Moore St, Canberra.</p>
          <p><i class="ion-email"></i> hello@startupagency.com.au</p>
          <p><i class="ion-ios-telephone"></i> 0412 224 668</p>
        </div>
        <!-- /.col-md-4 col-sm-6 -->

        <div class="col-md-4 col-sm-12">
          <h6>Follow Us</h6>
          <a href="#" class="social-link"><i class="ion-social-facebook"></i></a>
          <a href="#" class="social-link"><i class="ion-social-twitter"></i></a>
          <a href="#" class="social-link"><i class="ion-social-instagram"></i></a>
          <a href="#" class="social-link"><i class="ion-social-whatsapp"></i></a>
          <a href="#" class="social-link"><i class="ion-social-googleplus"></i></a>
          <a href="#" class="social-link"><i class="ion-social-dribbble"></i></a>
          <a href="#" class="social-link"><i class="ion-social-tumblr"></i></a>
        </div>
        <!-- /.col-md-4 col-sm-6 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->

    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <p class="col-sm-6">&copy; Startup Agency  | <?php echo date("Y"); ?></p>
          <div class="col-sm-6 text-right">
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.footer-bottom -->
  </footer>
  <!-- /.footer -->
</div>
<!-- /.main-wrapper -->

<!-- ========== LOADER ========== -->
  <div class="page-loader">
      <div class="spinner"></div>
  </div>

<!-- ========== COMMON JS FILES ========== -->
<script src="js/jquery/jquery-2.2.4.min.js"></script>
<script src="js/bootstrap/bootstrap.min.js"></script>

<!-- ========== PAGE JS FILES ========== -->
<!-- REVOLUTION JS FILES -->
<script type="text/javascript" src="js/revslider/jquery.themepunch.tools.min.js"></script>
<script type="text/javascript" src="js/revslider/jquery.themepunch.revolution.min.js"></script>

<script src="js/jquery.waypoints.min.js"></script>
<script src="js/jquery.counterup.min.js"></script>
<script src="js/parallax.min.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/animsition/animsition.min.js"></script>

<!-- ========== THEME JS ========== -->
<script src="js/main.min.js"></script>
<script src="js/slider-2.min.js"></script>


<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-84485047-1', 'auto');
  ga('send', 'pageview');

</script>

</body>

</html>
