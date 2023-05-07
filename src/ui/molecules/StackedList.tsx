import React, { useState } from 'react'
import List from './List'
import Container from '../atom/Container'

function StackedList({ name, items }) {
    const [stateItems, setItems] = useState(items)
    return (
        <Container width='lg' flexDirection='column' justifyContent='center' alignItems='center' height={'lg'} color={'secondary'} display={'flex'} gap={'sm'}>
            <Container width='lg' flexDirection='column' justifyContent='center' alignItems='start' height={'sm'} color={'secondary'} display={'flex'} gap={'sm'}>

                <h3>{name}</h3>
            </Container>
            <List items={stateItems}></List>
            <div>En voir plus</div>
        </Container>
    )
}

export default StackedList