import "../index.css"
import "../App.css"
import { GarallyImage } from './GarallyImage'

const MATLENGTH = 7

function Garally() {
    const image_urls = [
        localStorage.getItem("imageUrl0"),
        localStorage.getItem("imageUrl1"),
        localStorage.getItem("imageUrl2"),
        localStorage.getItem("imageUrl3"),
        localStorage.getItem("imageUrl4") === null ? "https://replicate.delivery/pbxt/Jrfbl5rJi92uUCQg8Z3Ze9ULjGDL9etj7zpuA4OaRjE4LjefB/out-0.png": localStorage.getItem("imageUrl4"),
        localStorage.getItem("imageUrl5") === null ? "https://replicate.delivery/pbxt/3dnl0AwQbNqhOp2uJblpOgljCOxCYmVLbBAP0vyObdI6m1fHA/out-0.png": localStorage.getItem("imageUrl5"),
        localStorage.getItem("imageUrl6") === null ? "https://replicate.delivery/pbxt/kfMjKyIW3mQfpU1cGOk1p8BBlcf3eSekdOiaiPuavWx1E46fD/out-0.png": localStorage.getItem("imageUrl6")
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
