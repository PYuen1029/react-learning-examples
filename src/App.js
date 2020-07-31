import React from 'react';
import InteractableVideo from "./InteractableVideo";

export default function App() {
    const videoRef = React.createRef();

    return (
        <div>
            <InteractableVideo ref={videoRef}/>

            <button onClick={() => videoRef.current.play()}>
                Also Play
            </button>

            <button onClick={() => videoRef.current.pause()}>
                Also Stop
            </button>
        </div>
    )
}
