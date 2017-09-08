import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 50px;
  background-color: lightsteelblue;
`

class ToolBar extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <Wrapper>
            ToolBar
          </Wrapper>
        </div>
      </div>
    )
  }
}

export default ToolBar

