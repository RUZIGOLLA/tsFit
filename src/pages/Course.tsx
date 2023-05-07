import React from 'react'
import { Course } from '../models/course'

function Course() {
    const [course, setCourse] = React.useState<Course>()
    return (
        <Container gap="lg" alignItems="center" height="lg" color="secondary" width="lg" display={"flex"} flexDirection="column" justifyContent="center">
            <div>{course?.name}</div>
            <div>{course?.description}</div>
            <div>Planing</div>
            <div>Planing</div>
        </Container>
    )
}

export default Course