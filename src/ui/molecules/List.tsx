import React from 'react'
import Container from '../atom/Container'

function ListItem(item) {
    return (
        <Container display='flex' justifyContent='center' alignItems='center' flexDirection='column' width={'lg'} height={'sm'} >
            <div>{item.name}</div>
            <div>{item.description}</div>
        </Container>
    )
}
function List({items}) {
    return (
        <Container display='flex' justifyContent='center' alignItems='center' width={'lg'} height={'sm'} color={'secondary'}>
            {items?.map((item) => ListItem(item))}
        </Container>
    )
}

export default List