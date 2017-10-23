/*! --------------------------------------------------------------
# slider-3.js
#
# Main theme js file for SaltTechno template.
# This is compressed js file. You get uncompressed version with download.
--------------------------------------------------------------*/

$(function($) {
    'use strict';

    var tpj=jQuery;

    // For menu
    var revapi54;
    tpj(document).ready(function() {
        if(tpj("#menu").revolution == undefined){
            revslider_showDoubleJqueryError("#menu");
        }else{
            revapi54 = tpj("#menu").show().revolution({
                sliderType:"hero",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[51,51,51,51],
                lazyType:"none",
                minHeight:"51",
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    disableFocusListener:false,
                }
            });
            function sliderAnchors() {

            var anchorarray = new Array;
                // lastknowheaderheight = 0; //jQuery('').height();

            // ANCHOR AND ITS HIGHLITS
            jQuery('.tp-rs-menulink').each(function(i) {
                var a = jQuery(this),
                    obj = new Object();

                obj.button = a;
                obj.href = a.attr("href");
                if(obj.href!=undefined){
                    obj.fakehref = obj.href.replace("#","#!");

                    if (obj.href!=undefined && obj.href.split("http").length<2 && obj.href!="#wp-toolbar") {
                        obj.target = jQuery(obj.href);
                        obj.offset = obj.target.data('offset') == undefined ? 0 : obj.target.data('offset');
                    }

                    if (obj.target!=undefined && obj.target.length>0)
                        anchorarray.push(obj);
                }
            });

            jQuery('.tp-rs-menulink').each(function(i) {
                var a = jQuery(this);
                a.click(function() {

                    var obj = new Object(),
                        ypos = 0;

                        if (a.attr('href') != undefined) {
                            obj.href = a.attr("href");
                            obj.target = jQuery(obj.href);
                            if (obj.href!=undefined && obj.target!=undefined && jQuery(obj.target).length>0) {


                                //if (jQuery(this).hasClass("tp-rs-menu-selected")) return false;

                                obj.offset = obj.target.data('offset') == undefined ? 0 : obj.target.data('offset');
                                obj.top = jQuery(obj.target).offset().top;
                                ypos = obj.top+obj.offset;
                                var counter = {val:jQuery(document).scrollTop()};


                                if (jQuery('body').data('currenscrollanim')!=undefined)
                                        jQuery('body').data('currenscrollanim').pause();


                                var sanim = punchgs.TweenLite.to(counter,1.5,{val:ypos,ease:punchgs.Power4.easeOut,
                                        onUpdate:function() {
                                            forcescrolled = true;
                                            punchgs.TweenLite.set(jQuery('body, html'),{scrollTop:counter.val});
                                        },
                                        onComplete:function(){
                                            forcescrolled = false;
                                            jQuery(window).trigger("scroll.tprsmenu");
                                        }
                                });

                                forcescrolled = true;
                                jQuery.each(anchorarray,function(index,o) {
                                    if (obj.href!==o.href) {
                                        o.button.removeClass("tp-rs-menu-selected");
                                    } else {
                                        o.button.addClass("tp-rs-menu-selected");
                                        window.history.pushState('','',obj.href)
                                    }
                                });


                                jQuery('body').data('currenscrollanim',sanim);
                                return false;
                            } else {
                                return true;
                            }
                        } else {
                            return true;
                        }
                })
            });

            }

            sliderAnchors();				}
    });	/*ready*/

    // For start block
    var revapi52;
        tpj(document).ready(function() {
            if(tpj("#start").revolution == undefined){
                revslider_showDoubleJqueryError("#start");
            }else{
                revapi52 = tpj("#start").show().revolution({
                    sliderType:"hero",
                    sliderLayout:"fullscreen",
                    dottedOverlay:"none",
                    delay:9000,
                    navigation: {
                    },
                    responsiveLevels:[1240,1024,778,480],
                    visibilityLevels:[1240,1024,778,480],
                    gridwidth:[1240,1024,778,480],
                    gridheight:[800,768,700,700],
                    lazyType:"none",
                    parallax: {
                        type:"scroll",
                        origo:"slidercenter",
                        speed:300,
                        levels:[15,16,17,18,19,20,-10,-20,-30,-40,-50,-60,15,10,100,55],
                        type:"scroll",
                    },
                    shadow:0,
                    spinner:"off",
                    autoHeight:"off",
                    fullScreenAutoWidth:"off",
                    fullScreenAlignForce:"off",
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "",
                    disableProgressBar:"on",
                    hideThumbsOnMobile:"off",
                    hideSliderAtLimit:0,
                    hideCaptionAtLimit:0,
                    hideAllCaptionAtLilmit:0,
                    debugMode:false,
                    fallbacks: {
                        simplifyAll:"off",
                        disableFocusListener:false,
                    }
                });
            }
        });	/*ready*/

    // For about
    var revapi50;
    tpj(document).ready(function() {
        if(tpj("#about").revolution == undefined){
            revslider_showDoubleJqueryError("#about");
        }else{
            revapi50 = tpj("#about").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    onHoverStop:"off",
                },
                viewPort: {
                    enable:true,
                    outof:"wait",
                    visible_area:"50%"
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[800,768,700,700],
                lazyType:"single",
                parallax: {
                    type:"scroll",
                    origo:"slidercenter",
                    speed:300,
                    levels:[15,16,17,18,19,20,-10,-20,-30,-40,-50,-60,25,30,100,55],
                    type:"scroll",
                },
                shadow:0,
                spinner:"off",
                stopLoop:"on",
                stopAfterLoops:0,
                stopAtSlide:1,
                shuffle:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
    });	/*ready*/

    // For services
    var revapi48;
    tpj(document).ready(function() {
        if(tpj("#services").revolution == undefined){
            revslider_showDoubleJqueryError("#services");
        }else{
            revapi48 = tpj("#services").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "vertical",
                    mouseScrollNavigation:"off",
                     mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    }
                },
                viewPort: {
                    enable:true,
                    outof:"wait",
                    visible_area:"50%"
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[800,768,700,700],
                lazyType:"single",
                parallax: {
                    type:"scroll",
                    origo:"slidercenter",
                    speed:300,
                    levels:[15,16,17,18,19,20,-10,-20,-30,-40,-50,-60,15,10,100,55],
                    type:"scroll",
                },
                shadow:0,
                spinner:"off",
                stopLoop:"on",
                stopAfterLoops:0,
                stopAtSlide:1,
                shuffle:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
    });	/*ready*/

    // For products
    var revapi46;
    tpj(document).ready(function() {
        if(tpj("#products").revolution == undefined){
            revslider_showDoubleJqueryError("#products");
        }else{
            revapi46 = tpj("#products").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "vertical",
                    mouseScrollNavigation:"off",
                     mouseScrollReverse:"default",
                    onHoverStop:"off",
                    thumbnails: {
                        style:"gyges",
                        enable:true,
                        width:100,
                        height:70,
                        min_width:100,
                        wrapper_padding:5,
                        wrapper_color:"transparent",
                        wrapper_opacity:"1",
                        tmp:'<span class="tp-thumb-img-wrap">  <span class="tp-thumb-image"></span></span>',
                        visibleAmount:5,
                        hide_onmobile:false,
                        hide_onleave:false,
                        direction:"horizontal",
                        span:false,
                        position:"inner",
                            container:"layergrid",
                        space:5,
                        h_align:"left",
                        v_align:"bottom",
                        h_offset:5,
                        v_offset:20
                    }
                },
                viewPort: {
                    enable:true,
                    outof:"wait",
                    visible_area:"50%"
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[800,768,700,700],
                lazyType:"single",
                parallax: {
                    type:"scroll",
                    origo:"slidercenter",
                    speed:300,
                    levels:[15,16,17,18,19,20,-10,-20,-30,-40,-50,-60,15,10,100,55],
                    type:"scroll",
                },
                shadow:0,
                spinner:"off",
                stopLoop:"on",
                stopAfterLoops:0,
                stopAtSlide:1,
                shuffle:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
            var api = revapi46;

            var newCall = new Object(),
            cslide;

            newCall.callback = function() {
            var proc = api.revgetparallaxproc(),
                fade = 1+(proc*1.1);
                fade2 = 1.3+(proc*2);

            fade = fade>1 ? 1 : fade < 0 ? 0 : fade;
            fade2 = fade2>1 ? 1 : fade2 < 0.15 ? 0.15 : fade2;


            punchgs.TweenLite.set(api.find('.tp-thumbs').parent(),{opacity:fade});
            punchgs.TweenLite.set(api.find('.effect_wrapper'),{opacity:fade2});
            }
            newCall.inmodule = "parallax";
            newCall.atposition = "start";


            api.bind("revolution.slide.onloaded",function (e) {
            api.find('.slotholder').wrap('<div class="effect_wrapper"></div>');
            api.revaddcallback(newCall);

            });
        }
    });	/*ready*/

    // For Testimonials
    var revapi44;
    tpj(document).ready(function() {
        if(tpj("#testimonials").revolution == undefined){
            revslider_showDoubleJqueryError("#testimonials");
        }else{
            revapi44 = tpj("#testimonials").show().revolution({
                sliderType:"standard",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "vertical",
                    mouseScrollNavigation:"off",
                     mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    }
                },
                viewPort: {
                    enable:true,
                    outof:"wait",
                    visible_area:"50%"
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[800,768,700,700],
                lazyType:"none",
                parallax: {
                    type:"scroll",
                    origo:"slidercenter",
                    speed:300,
                    levels:[20,25,30,35,40,45,50,-10,-15,-20,-25,-30,-35,-40,-45,55],
                    type:"scroll",
                },
                shadow:0,
                spinner:"off",
                stopLoop:"on",
                stopAfterLoops:0,
                stopAtSlide:1,
                shuffle:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
    });	/*ready*/

    // For Callout
    var revapi42;
    tpj(document).ready(function() {
        if(tpj("#callout").revolution == undefined){
            revslider_showDoubleJqueryError("#callout");
        }else{
            revapi42 = tpj("#callout").show().revolution({
                sliderType:"hero",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                },
                viewPort: {
                    enable:true,
                    outof:"wait",
                    visible_area:"65%"
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[650,500,300,300],
                lazyType:"none",
                parallax: {
                    type:"scroll",
                    origo:"slidercenter",
                    speed:300,
                    levels:[15,16,17,18,19,20,25,30,35,40,45,50,27,28,29,55],
                    type:"scroll",
                },
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    disableFocusListener:false,
                }
            });
        }
    });	/*ready*/

    // For footer
    var revapi40;
    tpj(document).ready(function() {
    if(tpj("#footer").revolution == undefined){
        revslider_showDoubleJqueryError("#footer");
    }else{
        revapi40 = tpj("#footer").show().revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
            },
            viewPort: {
                enable:true,
                outof:"wait",
                visible_area:"60%"
            },
            responsiveLevels:[1240,1024,778,480],
            visibilityLevels:[1240,1024,778,480],
            gridwidth:[1240,1024,778,480],
            gridheight:[600,600,600,600],
            lazyType:"none",
            parallax: {
                type:"scroll",
                origo:"slidercenter",
                speed:300,
                levels:[15,16,17,18,19,20,-10,-20,-30,-40,-50,-60,15,10,100,55],
                type:"scroll",
            },
            shadow:0,
            spinner:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                disableFocusListener:false,
            }
        });
    }
    });	/*ready*/

});
