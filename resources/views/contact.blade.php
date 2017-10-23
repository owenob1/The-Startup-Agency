@extends('layout')

@section('content')

  <div class="content-wrapper">
    <div id="content">
      <div class="container clearfix header-wrapper">
        <div class="col-lg-12 centered">
          <h1>Interested? <span>Awesome.</span></h1>
          <p class="large">Get in touch via contact form or email us directly. We will get back to you as soon as possible.</p>
        </div>
      </div>
      <div class="container clearfix full-width">
        <div class="clearfix col-md-7 col-sm-6 containing-image-wrapper">
          <div class="full-height-wrapper">
            <div id="map"></div>
            <div class="info-box-content">
              <div class="parent">
                <div class="child">
                  <h2>Level 5, 1 Moore Street<br />
                    Canberra</h2>
                </div>
              </div>
            </div>
            <div class="overlay contact-map-overlay"></div>
          </div>
        </div>
        <div class="clearfix col-md-5 col-md-push-7 col-sm-6 col-sm-push-6 bg-white">
          <div class="header-section">
            <p class="small">Contact Form</p>
            <h2 class="header">Say Hello!</h2>
          </div>
          <p> Use the following form to get in touch with us. We usually reply within 48 hours.</p>
          <form class="form-part" method="post" action="contact.php" name="contactform" id="contactform" autocomplete="off">
            <input name="name" type="text" id="name" size="30" title="Name" />
            <input name="email" type="text" id="email" size="30" title="Email" />
            <textarea name="comments" cols="40" rows="3" id="comments" title="Write your message!"></textarea>
            <div class="input-wrapper clearfix"> <span id="message"></span>
              <div class="clear"></div>
              <input type="submit" class="send-btn" value="Submit" id="submit" name="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- end content -->
  </div>

@endsection
