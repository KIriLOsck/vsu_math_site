interface departmentIntf {
    title: string,
    content: Array<string>,
    photo: string,
};

export function DepartmentComponent() {
    const activeDepartment : number = Math.floor(Math.random() * 2);
    
    let departments : departmentIntf[] = [
        {
            title: "Кафедра\nФункционального\nАнализа",
            content: [
                "Теория нелинейных уравнений с положительными не вполне непрерывными операторами", 
                "Топологические методы в теории нелинейных уравнений с положительными вполне непрерывными операторами",
            ],
            photo: "src1",
        },
        {
            title: "Кафедра\nУравнений\nЧастных\nПроизводных ",
            content: [
                "Асимптотических свойств решений начальных и начально-краевых задач для систем линейных уравнений в частных производных", 
                "Исследование задач граничного управления дифференциальными системами на графе",
            ],
            photo: "src2",
        }, 
        {
            title: "Кафедра\nАлгебры\nи\nМатематических\nМетодов\nГидродинамики",
            content: [
                "Теория катастроф и теория бифуркаций",
                "Функциональные пространства и краевые задачи",
                "Экстремальные задачи и оптимальное управление",
            ],
            photo: "https://www.kinozoopark.ru/wp-content/uploads/2017/07/Uzh-i-ezh.jpg",
        },
        {
            title: "Кафедра\nМатематического\nМоделирования",
            content: [
                "Математические модели в экономике и финансовой математике",
                "Бифуркационный анализ уравнений в математической физике",
                "Гендерные исследования",
            ],
            photo: "https://www.myjane.ru/data/cache/2022jan/31/54/1051284_54525-670x400x.jpg",
        },
        {
            title: "Кафедра\nМатематического\nАнализа",
            content: [
                "Качественная теория дифференциальных уравнений и краевых задач для них.",
                "Теория краевых задач математической физики, метод функции Грина",
                "Теория сложно составленных (гибридных) систем",
            ],
            photo: "",
        },
        {
            title: "Кафедра\nТеорий\nФункци и геометрии",
            content: [
                "Качественная теория дифференциальных уравнений и краевых задач для них.",
                "Теория краевых задач математической физики, метод функции Грина",
                "Теория сложно составленных (гибридных) систем",
            ],
            photo: "src6",
        }
    ]

    return (
        <div className="section-container verticalGroup verticalGroup-gap flex-center shadow">
            <p className="biggerText">Кафедры</p>
            <div className="departmentGroup">
                {
                    departments.map((department, index) => (
                        <div key={index} className={`horizontalGroup horizontalGroup-gap shadow flex-center start-end-line ${[0, 2, 3].includes((index + 1) % 6) == Boolean(activeDepartment) ? "department-container-turquoise" : "department-container-muted"} ${Math.round((index + 1) / 2) == 2 ? "department-container-img" : ""}`} style={{ backgroundImage: Math.round((index + 1) / 2) == 2 && [0, 2, 3].includes((index + 1) % 6) != Boolean(activeDepartment) ? `url(${department.photo})` : ""}}>
                            <div className="verticalGroup verticalGroup-gap start-end-line">
                                <p className={`bigText ${[0, 2, 3].includes((index + 1) % 6) == Boolean(activeDepartment) ? "bigText-secondary" : "bigText-turquoise"} department-name`}>{department.title.split("  ").join("\n")}</p>
                                <div className="verticalGroup verticalGroup-gap">
                                    {
                                        department.content.map((el) => (
                                            <p className="mediumText">{el}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            {
                                [0, 2, 3].includes((index + 1) % 6) != Boolean(activeDepartment) && Math.round((index + 1) / 2) != 2 ? <img className="department-img" src={department.photo}/> : ""
                            }
                        </div>  
                    ))
                }
            </div>      
        </div>
    )
}
