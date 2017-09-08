import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import styled from 'styled-components'

import ListFooter from './ListFooter'

const Wrapper = styled.div`
  height: calc(${props => props.height || '100hv'} - 30px);
  overflow-y: scroll;
`

class EditableList extends React.PureComponent {
  render() {
    const content = (
      <div className={this.props.className}>
        <Wrapper height={this.props.height}>
          <ListGroup>
            {this.props.items.map(item => {
              const id = item.get('id')
              return <ListGroupItem key={id} onClick={() => {this.props.onClick(id)}} active={id===this.props.selectedId}>{id}</ListGroupItem>
            })}
          </ListGroup>
        </Wrapper>
        <ListFooter onCreate={this.props.onCreate} onDelete={() => this.props.onDelete(this.props.selectedId)} />
      </div>
    )
    return content
  }
}

EditableList.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  items: ImmutablePropTypes.list,
  selectedId: PropTypes.string,
  onClick: PropTypes.func,
  onCreate: PropTypes.func,
  onDelete: PropTypes.func
}

export default EditableList
