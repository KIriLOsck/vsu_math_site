import { HeroComponent } from './hero.tsx'
import { EducationComponent } from './education.tsx'
import { DepartmentComponent } from './department.tsx'
import { ActiveComponent } from './active.tsx'
import { NewsComponent } from './news.tsx'
import { GraduatesComponent } from './graduates.tsx' 


export default function App() {
    return (
        <main className="verticalGroup flex-center">
            <HeroComponent/>
            <EducationComponent/>
            <DepartmentComponent/>
            <ActiveComponent/>
            <NewsComponent/>
            <GraduatesComponent/>
        </main>
    )
}
