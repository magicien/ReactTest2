import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import ToolBar from 'components/ToolBar'
import MapEditor from 'containers/MapEditor'

import { loadMaps } from 'redux/modules/map'
import mapSagas from 'redux/modules/map/sagas'

export class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.onLoadMaps()
  }
  
  static get sagas() {
    return mapSagas
  }

  render() {
    return (
      <article>
        <Helmet
          title="Home Page"
        />
        <ToolBar />
        <MapEditor />
      </article>
    )
  }
}

HomePage.propTypes = {
}

export function mapDispatchToProps(dispatch) {
  return {
    onLoadMaps: () => {
      dispatch(loadMaps())
    }
  }
}

const mapStateToProps = (state) => {return {}}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

