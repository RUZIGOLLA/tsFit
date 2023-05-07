import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../App'

const SContainer = styled.div<TContainerStyleProp>`
    width: ${({ theme, width }) => {
        console.log(theme)
        return theme.sizes[width]
    }};
    height: ${({ theme, height }) => {
        return theme.sizes[height]
    }};
    background-color: ${({ theme, color }) => {
        console.log(theme, color)
        return theme.colors[color]
    }};

    flex-direction: ${({ flexDirection }) => flexDirection};
    display: ${({ display }) => display};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    gap: ${({ gap, theme }) => theme?.spacings[gap]};
`
type TContainerStyleProp = {
    width: 'sm' | 'md' | 'lg'
    height: 'sm' | 'md' | 'lg' | 'xs'
    color: 'primary' | 'secondary' | 'tertiary',
    display: 'flex' | 'block'
    justifyContent?: 'center' | 'space-between' | 'space-around' | 'space-evenly'
    flexDirection?: 'row' | 'column'
    alignItems?: 'center' | 'start' | 'end'
    gap: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl",
}
type TContainerProp = {
    children: React.ReactNode
} & TContainerStyleProp

function Container({ children, color, width, height, display, justifyContent, flexDirection, alignItems, gap }: TContainerProp) {
    const theme = useContext(ThemeContext);
    console.log("🚀 ~ file: container.tsx:40 ~ Container ~ theme:", theme)
    return (
        <SContainer theme={theme} gap={gap} alignItems={alignItems} flexDirection={flexDirection} justifyContent={justifyContent} display={display} color={color} width={width} height={height}>{children}</SContainer>
    )
}

export default Container