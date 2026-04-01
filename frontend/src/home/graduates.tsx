import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/splide.min.css';


export function GraduatesComponent() {
    const info = [
        {
            photo: "https://ic.pics.livejournal.com/ehrlichperson/19940988/131971/131971_600.jpg",
            title: "Ежик полевой",
            summary: "Frontend rapid agile developer",
            contents: "Стаж 10+ лет на языке мухоморов Senior в фруктово-грибном отделе Google"
        },
        {
            photo: "",
            title: "Магистр Iвщн",
            summary: "Джедай математического моделирования ",
            contents: "Куратор подаванов 2 группы и юродивых 3 группы"
        },
        {
            photo: "",
            title: "Еж лесной",
            summary: "Backend DRY DSR DNS developer",
            contents: ""
        }

    ]

    return (
        <div className="graduates-slider">
            <Splide options={{
                type: 'loop',
                padding: '12%',
                gap: '1.5vw',
                focus: 'center' as const,
                pagination: false,
            }}>
                {
                    info.map((graduate) => (
                        <SplideSlide>
                            <div className="horizontalGroup horizontalGroup-gap flex-center space-evenly graduates-slide shadow">
                                <img src={graduate.photo}/>
                                <div className="verticalGroup verticalGroup-gap verticalGroup-wrap">
                                    <p className="biggerText">{graduate.title}</p>
                                    <p className="bigText">{graduate.summary}</p>
                                    <p className="mediumText">{graduate.contents}</p>
                                </div>
                            </div>
                        </SplideSlide>
                    ))
                }
            </Splide>
        </div>
    )
}

