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
                        <img src="" alt="" className="direction-img shadow"/>
                        <div className="direction-bg-img shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
 }

