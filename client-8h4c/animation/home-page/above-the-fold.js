// Universal Helper Variables and Functions
var $pathname = window.location.pathname;


// Do only on Home Page
if ($pathname == '/') {
// if ($pathname == '/codepen-index') {

    // Local Targets (Home Page)
        var $branding = '.Header-branding';
        var $STbranding = new SplitText(
            $branding,
            {
                type: 'words, chars'
            }
        );
        var $leftNav = 'nav.Header-nav--primary .Header-nav-inner';
        var $rightNav = 'nav.Header-nav--secondary .Header-nav-inner';
        var $imgOpener = '#welcome-opener';

    // Local Helper Functions (Home Page)

        // Split Text Div Revert 
        function ADbranding() {
            $STbranding.revert()
        }


        // TimeLine Above The Fold
        var TLATF = new TimelineLite();


    TLATF
        // Starts Branding Out of View
            .to(
                $branding, 0, {

                    y: '-100px',
                    scale: 2.5,
                    zIndex: 100,
                }
            )

        // Start Background Image Pink
            .to(
                $imgOpener, 0, {
                    backgroundColor: '#d0258e',
                }
            )

        // Drops Branding with a Bounce
            .staggerTo(
                $STbranding.words, 1.5, {
                    position: "relative",
                    y: '175px',
                    zIndex: 100,
                    ease: Bounce.easeOut,
                },
                0.15,
                '+=1',
            )

        // Brings Branding Back to the Top
            .to(
            $branding, 2, {
                y: '-175px',
                scale: 1,
                ease: Back.easeInOut,
            }
            )

        .from(
        $leftNav, 2, {
            // position: "relative",
            // right: "500px",
            opacity: 0,
            ease: Back.easeOut,
        },
        // '-=0'
    )

        // Pulls in rightNav
        .from(
        $rightNav, 2, {
            // position: "relative",
            // left: "500px",
            opacity: 0,
            ease: Back.easeOut,
        },
        '-=2'
        )

        .to(
        $imgOpener, 1.5, {
            backgroundColor: 'transparent',
            ease: Power0.ease0ut,
        },
        '-=2'
        )
}
