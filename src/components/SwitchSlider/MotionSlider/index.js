import React from "react"
import styled from "styled-components"
import { useMotionValue } from "framer-motion"

import { ContextProvider } from "./Context"
import Track from "./Track"
import Item from "./Item"

const Wrapper = styled.div`
  overflow: ${props => props.overflow};
`

const MotionSlider = ({
  children,
  padding,
  gap,
  velocity,
  transition,
  overflow,
}) => {
  const x = useMotionValue(0)

  return (
    <ContextProvider>
      <Wrapper overflow={overflow}>
        <Track
          padding={padding}
          velocity={velocity}
          transition={transition}
          overflow={overflow}
          style={{ x }}
        >
          {children.map((child, i) => (
            <Item key={child.props.data.id} gap={gap} padding={padding} index={i} offset={x}>
              {child}
            </Item>
          ))}
        </Track>
      </Wrapper>
    </ContextProvider>
  )
}

MotionSlider.defaultProps = {
  padding: 40,
  gap: 40,
  velocity: 0.3,
  transition: { stiffness: 300, damping: 600, mass: 3 },
  overflow: "visible",
}

export default MotionSlider
