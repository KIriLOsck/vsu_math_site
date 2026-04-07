 export function EducationComponent() {
    return (
         <div className="section-container verticalGroup verticalGroup-gap shadow">
            <p className="biggerText flex-center">Направления и специальности</p>
            <div className="horizontalGroup horizontalGroup-gap start-end-line">
                <div className="verticalGroup verticalGroup-gap">
                    <div className="horizontalGroup start-end-line flex-center direction-container shadow">
                        <p className="biggerText">СПО</p>
                        <i className="fas fa-4x fa-chevron-down"></i>
                    </div>
                    <div className="horizontalGroup start-end-line flex-center direction-container shadow">
                        <p className="biggerText">Бакалавриат</p>
                        <i className="fas fa-4x fa-chevron-down"></i>
                    </div>
                    <div className="horizontalGroup start-end-line flex-center direction-container shadow">
                        <p className="biggerText">Магистратура</p>
                        <i className="fas fa-4x fa-chevron-down"></i>
                    </div>
                    <div className="horizontalGroup start-end-line flex-center direction-container shadow">
                        <p className="biggerText">Аспирантура</p>
                        <i className="fas fa-4x fa-chevron-down"></i>
                    </div>
                    <div className="horizontalGroup start-end-line flex-center direction-container shadow">
                        <p className="biggerText">Специалитет</p>
                        <i className="fas fa-4x fa-chevron-down"></i>
                    </div>
                </div>
                <div>
                    <div className="flex-center">
                        <img src="https://icdn.lenta.ru/images/2019/09/17/12/20190917123116359/square_320_09eaf4a0a39054ccf5f8cbfc496ee527.jpg" alt="" className="direction-img shadow"/>
                        <div className="direction-bg-img shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
 }

