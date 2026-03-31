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

    const firstActiveImages: Array<string> = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe87_KdQU1b9VJR5koXn2kvaJFeiCYSjYHhA&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIjzZP6SDuKnLSZ2WY8Ga6-i5frOODSQ2GHQ&s", "https://img.freepik.com/free-photo/cute-baby-hedgehog-closeup-moss-with-black-background_488145-1549.jpg?semt=ais_hybrid&w=740&q=80"];
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
