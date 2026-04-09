import { useRef, useEffect } from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import '@splidejs/splide/dist/css/splide.min.css';

export function ActiveComponent() {
    const firstSlider = useRef<Splide>(null);
    const secondSlider = useRef<Splide>(null);

    const sharedOptions = {
        type: "loop",
        drag: "free" as const,
        focus: "center" as const,
        perPage: 3,
        
        gap: "150px",

        autoScroll: {
            speed: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
        },
        arrows: false,
        pagination: false,
    }

    useEffect(() => {
        if (firstSlider.current?.splide && secondSlider.current?.splide) {
            firstSlider.current.sync(secondSlider.current.splide);
        }
    }, [])

    const firstActiveImages: Array<string> = ["https://sun9-28.userapi.com/s/v1/ig2/E2s1fATPZZCFGPPtN6vVIQiJl1bc6ahjB0NhqTSeZcPHVXRLAE2nkLIpUBHRuIFPu2DMhVvc4LSYWoRJWCFT_d0r.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x481,1080x721,1280x854,1440x961,2560x1709&from=bu&cs=2560x0", "https://sun9-82.userapi.com/s/v1/ig2/g7NxX54yZzFADwRNyve7qLfG8kYCBHOQ2BAAL93m-9wp2eYiFPmVGYFfU3AjUuJZ1N0dUjvfyXp3UMQotR0ZQGQF.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=2560x0", "https://sun9-61.userapi.com/s/v1/ig2/isvhncbs9QoAZloahpMdqtIATkRYBcBYABPh8TKvSOYfVrHMshKhNsHoz2HFcUE95fqqudxdFqMky-MhWQuTpd4O.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=2560x0", "https://sun9-87.userapi.com/s/v1/ig2/ez1DM3zn9zs2atFsHyKUg3kDXKSPnXrPFeBSK8_NpsIuUk9uWW6qPyRnAzf7Bx7XpMnIC6D2AquAtk7Owa0TQPvI.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,1080x1620,1280x1920,1440x2160,1707x2560&from=bu&cs=1707x0", "https://sun9-39.userapi.com/s/v1/ig2/-sNlpig46bxxRd2ZLDwJgKhV_1sFwA8DOYSVwl00RTf7uXLoD8MgxFl0AwdjdAWXVO3DroIC95_4_1Gkl_geXHid.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x481,1080x721,1280x854,1440x961,2560x1709&from=bu&cs=2560x0", "https://sun9-10.userapi.com/s/v1/ig2/sXD6JfFOsFrM7xO1uGhTByM1jCkfbAO21agOrwBebgZudUqjNZLOcoxey-YVEbPqi9wuIz_xau6Jz-hLoRmh4yIf.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x481,1080x721,1280x854,1440x961,2560x1709&from=bu&cs=2560x0"];
    const secondActiveImages: Array<string> = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe87_KdQU1b9VJR5koXn2kvaJFeiCYSjYHhA&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIjzZP6SDuKnLSZ2WY8Ga6-i5frOODSQ2GHQ&s", "https://img.freepik.com/free-photo/cute-baby-hedgehog-closeup-moss-with-black-background_488145-1549.jpg?semt=ais_hybrid&w=740&q=80"];

    return (
        <div className="verticalGroup verticalGroup-gap flex-center">
            <p className="biggerText">Актив факультета</p>
            <div className="verticalGroup sliders"> 
                <div className="firstSlider">
                    <Splide ref={firstSlider} extensions={{AutoScroll}} options={sharedOptions}>
                        {
                            firstActiveImages.map((url, index) => (
                                <SplideSlide key={index}>
                                    <img src={url} className="activeImage shadow" alt={`Slide 1.${index}`}/>
                                </SplideSlide>
                            ))
                        }
                    </Splide>
                </div>
                <div className="secondSlider">
                    <Splide ref={secondSlider} extensions={{AutoScroll}} options={sharedOptions}>
                        {
                            secondActiveImages.map((url, index) => (
                                <SplideSlide key={index}>
                                    <img src={url} className="activeImage shadow" alt={`Slide 2.${index}`}/>
                                </SplideSlide>
                            ))
                        }
                    </Splide>
                </div>
            </div>
        </div>
    )
}
