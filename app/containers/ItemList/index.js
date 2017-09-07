import React from 'react'
import { connect, dispatch } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { FormattedNumber } from 'react-intl'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import styled from 'styled-components'

import { changeMap, makeSelectMapId, makeSelectMapList } from 'redux/modules/map'

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  height: calc(100vh - 50px);
  overflow-y: scroll;
`

class ItemList extends React.PureComponent {
  render() {
    const content = (
      <div className={this.props.className}>
        <Wrapper>
          <ListGroup>
            {this.props.list.map(item => {
              return <ListGroupItem onClick={() => {this.props.onChangeMap(item.id)}}>{item.name}</ListGroupItem>
            })}
          </ListGroup>
        </Wrapper>
      </div>
    )
    return content
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeMap: (mapId) => dispatch(changeMap(mapId))
  }
}

const mapStateToProps = createStructuredSelector({
  id: makeSelectMapId(),
  list: makeSelectMapList()
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)

