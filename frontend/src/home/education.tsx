import { useRef } from "react";

interface educationsIntf {
    title: string,
    content: string,
    photo: string,
};

export function EducationComponent() {
    const imgEducation = useRef<HTMLImageElement>(null);
    const contentEducation = useRef<Array<(HTMLDivElement | null)>>([]);

    const defaultImage : string = "https://icdn.lenta.ru/images/2019/09/17/12/20190917123116359/square_320_09eaf4a0a39054ccf5f8cbfc496ee527.jpg";
    const educations : educationsIntf[] = [
        {
            title: "СПО",
            content: "",
            photo: "src1",
        },
        {
            title: "Бакалавриат",
            content: "",
            photo: "src2",
        },
        {
            title: "Магистратура",
            content: "",
            photo: "src3",
        },
        {
            title: "Аспирантура",
            content: "",
            photo: "src4",
        },
        {
            title: "Специалитет",
            content: "",
            photo: "src5",
        },
    ];
    

    return (
         <div className="section-container verticalGroup verticalGroup-gap shadow">
            <p className="biggerText flex-center">Направления и специальности</p>
            <div className="horizontalGroup horizontalGroup-gap start-end-line">
                <div className="verticalGroup verticalGroup-gap" style={{ display: "grid"}}>
                {
                    educations.map((el, index) => (
                        <div key={index} ref={(el) => void (contentEducation.current[index] = el)} className="education-container">   
                            <div className="verticalGroup">
                                <div className="horizontalGroup flex-center start-end-line shadow">
                                    <p className="biggerText">{el.title}</p>
                                    <i onClick={() => {
                                        if (contentEducation.current[index]!.classList.contains("activeEducation")) {
                                            contentEducation.current[index]!.classList.remove("activeEducation");
                                            imgEducation.current!.src = defaultImage;
                                        } else if (!contentEducation.current.some(el => el?.classList.contains("activeEducation"))) {
                                            contentEducation.current[index]!.className += " activeEducation";
                                            imgEducation.current!.src = el.photo;
                                        }
                                    }} className="fas fa-4x fa-chevron-down"></i>
                                </div>
                                <div className="educationContent">
                                    <p className="mediumText">{el.content}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
                <div>
                    <div className="flex-center">
                        <img ref={imgEducation} src="https://icdn.lenta.ru/images/2019/09/17/12/20190917123116359/square_320_09eaf4a0a39054ccf5f8cbfc496ee527.jpg" alt="" className="education-img shadow"/>
                        <div className="education-bg-img shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
 }

