import React, {useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

const HashScrollRestorer = () => {
    let location = useLocation();
    const _originalScrollRestoration = 'scrollRestoration' in window.history ? window.history.scrollRestoration : "auto";

    useEffect(() => {


        debugger;
        // check location.hash
        if (location.hash && location.hash.length) {
            let strippedHash = location.hash.substr(1);

            // get element by location.hash
            let element = document.querySelector(`a[href="${strippedHash}"]`)

            // scrollintoview
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});

//                // if need scroll offset
//                let yOffset = -200;
//                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//                window.scrollTo({top: y, behavior: 'smooth'})
            }
        }

        return () => {
            window.history.scrollRestoration = _originalScrollRestoration;
        }
    })

    return null;

}

export default HashScrollRestorer;
