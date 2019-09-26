document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");


    // Target Variables
        var $logoSubtitle = '.logo-subtitle';
        var $STlogoSubtitle = new SplitText(
            $logoSubtitle,
            {
                type: 'word, chars'
            }
        );

        var $siteTitle = '#site-title'
        var $STsiteTitle = new SplitText(
            $siteTitle,
            {
                type: 'word, chars'
            }
        );

    // Helper Variables/Functions
        var $pathname = window.location.pathname;
        function ADsiteTitle(){
            $STsiteTitle.revert()
        }
        function ADlogoSubtitle(){
            $STlogoSubtitle.revert()
        }

    //Do on Home Page Only
        if ($pathname == '/'){
            // TimeLine Above the Fold
                var TLATF = new TimelineLite();

            // Site Title Fade In
                TLATF.staggerFrom(
                    $STsiteTitle.chars, 0.8, {
                        opacity:0,
                    },
                    0.1,
                    '+=1.5',
                    ADsiteTitle
                )


            // SubTitle Wave
                .set(
                    $logoSubtitle,
                    {
                        perspective:300
                    }
                )

                .staggerFrom(
                    $STlogoSubtitle.chars, 1.2, {
                        opacity:0,
                        scale:0,
                        rotationX:180,
                        y:100,
                        transformOrigin:'0% 60% -60%',
                        ease:Back.easeOut
                    },
                    0.01,
                    '-=.5',
                    ADlogoSubtitle
                );

        }

    // Reveal .item .sqs-gallery-design-autocolumns-slide from multiple directions

        // Target Variables
        var $homeImages = Array.from(document.getElementsByClassName('item sqs-gallery-design-autocolumns-slide'));
        var $duration = '25%';
        var $speed = 2;


        // Targets Fade In	
        var $TFI = $homeImages;

        var ctrl = new ScrollMagic.Controller();

        // Foreach Variable
        for (var i = 0; i < $TFI.length; i += 4) {
            var $CT = $TFI[i];

            // Do This Animation
            var $AT = TweenLite.from(
                $CT, $speed, {
                    css: {
                        opacity: 0,
                        x: -200,
                    },
                }
            );

            // Have this Animatinon Scroll Timing

            new ScrollMagic.Scene({
                duration: $duration
            })
                .setTween($AT)
                .triggerElement($CT)
                .offset(-200)
                // .addIndicators()
                .addTo(ctrl);
        }

        // Foreach Variable
        for (var i = 1; i < $TFI.length; i += 4) {
            var $CT = $TFI[i];

            // Do This Animation
            var $AT = TweenLite.from(
                $CT, $speed, {
                    css: {
                        opacity: 0,
                        x: 200,
                    },
                }
            );

            new ScrollMagic.Scene({
                duration: $duration
            })
                .setTween($AT)
                .triggerElement($CT)
                .offset(-200)
                // .addIndicators()
                .addTo(ctrl);
        }

        // Foreach Variable
        for (var i = 2; i < $TFI.length; i += 4) {
            var $CT = $TFI[i];

            // Do This Animation
            var $AT = TweenLite.from(
                $CT, 1, {
                    css: {
                        opacity: 0,
                        y: 200,
                    },
                }
            );

            // Have this Animatinon Scroll Timing
            new ScrollMagic.Scene({
                duration: '50%'
            })
                .setTween($AT)
                .triggerElement($CT)
                .offset(-200)
                // .addIndicators()
                .addTo(ctrl);
        }
});
