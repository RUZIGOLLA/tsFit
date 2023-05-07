import { useState } from "react"
import Container from "../ui/atom/Container"
import StackedList from "../ui/molecules/StackedList"
import { Course } from "../models/course"

function Home() {
    const [courses, setCourses] = useState<Course[]>([
        {
            name: "Cours",
            description: "Description",
            id: 1,
            imageUrl: "https://picsum.photos/200/300",
        },
        {
            name: "Cours",
            description: "Description",
            id: 1,
            imageUrl: "https://picsum.photos/200/300",
        },
        {
            name: "Cours",
            description: "Description",
            id: 1,
            imageUrl: "https://picsum.photos/200/300",
        }
    ])
    return (
        <Container gap="lg" alignItems="center" height="lg" color="secondary" width="lg" display={"flex"} flexDirection="column" justifyContent="center">
            <Container height="sm" width="md" display={"flex"} justifyContent="start">
            </Container>
            <Container height="sm" color="secondary" width="md" display={"flex"} justifyContent="start">
                <StackedList name={"Cours"} items={courses}></StackedList>
            </Container>
            <Container height="sm" color="secondary" width="md" display={"flex"} justifyContent="start">
                <StackedList name={"Planning"} items={undefined}></StackedList>
            </Container>
        </Container>
    )
}

export default Home