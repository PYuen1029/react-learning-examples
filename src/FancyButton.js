import React from "react";

export const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
