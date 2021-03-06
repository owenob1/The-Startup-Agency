/*! --------------------------------------------------------------
# slider-4.js
#
# Main theme js file for SaltTechno template.
# This is compressed js file. You get uncompressed version with download.
--------------------------------------------------------------*/

$(function($) {
    'use strict';

    var tpj=jQuery;

    var revapi58;
        tpj(document).ready(function() {
            if(tpj("#rev_slider_58_1").revolution == undefined){
                revslider_showDoubleJqueryError("#rev_slider_58_1");
            }else{
                revapi58 = tpj("#rev_slider_58_1").show().revolution({
                    sliderType:"standard",
                    sliderLayout:"fullscreen",
                    dottedOverlay:"none",
                    delay:9000,
                    navigation: {
                        keyboardNavigation:"off",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation:"off",
                         mouseScrollReverse:"default",
                        onHoverStop:"off",
                        bullets: {
                            enable:true,
                            hide_onmobile:true,
                            hide_under:1100,
                            style:"hermes",
                            hide_onleave:false,
                            direction:"vertical",
                                container:"slidegrid",
                            h_align:"right",
                            v_align:"center",
                            h_offset:50,
                            v_offset:0,
                            space:5,
                            tmp:''
                        }
                    },
                    responsiveLevels:[1240,1024,778,480],
                    visibilityLevels:[1240,1024,778,480],
                    gridwidth:[1240,1024,778,480],
                    gridheight:[868,768,960,720],
                    lazyType:"smart",
                    parallax: {
                        type:"scroll",
                        origo:"slidercenter",
                        speed:400,
                        levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
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

});
