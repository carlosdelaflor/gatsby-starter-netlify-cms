import React from 'react'
import PropTypes from 'prop-types'
import { GuitarItemPageTemplate } from '../../templates/guitar-item-page'

const GuitarItemPreview = ({ entry, widgetFor }) => {
  const guitarItem = entry.getIn(['data']);
  const guitarItemHtmlContent = widgetFor('body');
  return (
    <GuitarItemPageTemplate
      guitarDetailContent={guitarItemHtmlContent}
      guitarItem={guitarItem}
    />
  )
}

GuitarItemPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default GuitarItemPreview
