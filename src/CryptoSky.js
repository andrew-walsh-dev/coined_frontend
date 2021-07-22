import Sky from 'react-sky';

export default function CryptoSky() {
    
    const reqSvgs = require.context('./images/coinLogos', true, /\.svg$/)
    const paths = reqSvgs.keys()
    const svgs = paths.map(path => reqSvgs(path))
    
    const images = {};
    let i = 0;
    for (let svg of svgs) {
        images[i] = svg.default;
        i++;
    }

    return (
        <Sky
            images={images}
            how={50}
            time={150}
            size={'50px'}
            background={'palettedvioletred'}
        />
    )
}