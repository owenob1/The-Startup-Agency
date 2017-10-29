@extends('layout')

@section('content')

  <!-- ========== HEADER ========== -->
        <section class="parallax-section" data-parallax="scroll" data-image-src="images/demo-img-2.jpg" data-speed="0.5">
    <section class="content-section black-grad">
      <div class="container">
        <div class="row text-center">
          <header class="section-title page-title mbn">
            <h6 class="small-title">Get in touch</h6>
            <h1 class="main-title">Contact Us.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" class="btn st-btn btn-rounded ">Purchase Now</a>
          </header>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.primary-grad -->
  </section>
  <!-- /.parallax-section -->


        <!-- ========== CONTACT US FORM ========== -->
        <section class="content-section gray-bg">
            <div class="container">
                <div class="row">
                    <form class="col-md-8 col-md-offset-2" action="send-email-mailgun.php" method="post" id="form">
                        <div class="form-group col-md-6">
                            <label for="firstname">First Name</label>
                            <input type="text" class="form-control" id="firstname" name="firstname" placeholder="First Name.." required="">
                        </div> <!-- end form-group -->
                        <div class="form-group col-md-6">
                            <label for="lastname">Last Name</label>
                            <input type="text" class="form-control" id="lastname" name="lastname" placeholder="Last Name.." required="">
                        </div> <!-- end form-group -->
                        <div class="form-group col-md-12">
                            <label for="email">Email Address</label>
                            <input type="email" class="form-control" id="email" name="email" placeholder="Email Id.." required="">
                        </div> <!-- end form-group -->
                        <div class="form-group col-md-12">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" rows="6" placeholder="Enter your message here.."></textarea>
                        </div> <!-- end form-group -->

                        <div class="form-group col-md-12">
                            <div class="g-recaptcha" data-sitekey="6LdrSCQTAAAAAFvP5P_RHmBQreGEHEiAIR3rc8FW"></div>
                        </div>

                        <div class="text-center col-md-12 mt10 mb20">
                            <button type="submit" class="btn st-btn btn-rounded btn-primary pull-right">Submit</button>
                        </div> <!-- end text-center -->
                    </form>
                </div> <!-- end row -->
            </div> <!-- end container -->
        </section>

        <!-- ========== MAP SECTION ========== -->
      <div id='fullWidthMap'></div>


@endsection
