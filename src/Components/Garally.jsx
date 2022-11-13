import "../index.css"
import "../App.css"
import { GarallyImage } from './GarallyImage'


function Garally() {
    const image_urls = [
        "https://replicate.delivery/pbxt/1WOzwsHHje0HAa97roZxncFG2SX8EB7JWFhnfXveREc9ue8fB/out-0.png",
        "https://replicate.delivery/pbxt/aQl23CetKIxgYi3oe4cbExToWd7zerfYdUjKaDVBlF79h98fB/out-0.png",
        "https://replicate.delivery/pbxt/NLl3XgTmQcbAHJULFErnOggEQN5f0DEuPHFLBr1dEONgtnfPA/out-0.png",
        "https://replicate.delivery/pbxt/LkxAkifImywiYCgk1TS435YlVFBY2YfbLvxDPkQ4OdeN2iefB/out-0.png",
        "https://replicate.delivery/pbxt/Jrfbl5rJi92uUCQg8Z3Ze9ULjGDL9etj7zpuA4OaRjE4LjefB/out-0.png",
        "https://replicate.delivery/pbxt/3dnl0AwQbNqhOp2uJblpOgljCOxCYmVLbBAP0vyObdI6m1fHA/out-0.png",
        "https://replicate.delivery/pbxt/kfMjKyIW3mQfpU1cGOk1p8BBlcf3eSekdOiaiPuavWx1E46fD/out-0.png"
    ]
    const images = [
        // Front
        { position: [0, 0, 1.5], rotation: [0, 0, 0], url: image_urls[0] },
        // Back
        { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: image_urls[1] },
        { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: image_urls[2] },
        // Left
        { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: image_urls[3] },
        { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: image_urls[4] },
        // Right
        { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: image_urls[5] },
        { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: image_urls[6] },
    ]

    return (
        <div id="garally">
            <GarallyImage images={images}/>
        </div>
    )
}

export default Garally
