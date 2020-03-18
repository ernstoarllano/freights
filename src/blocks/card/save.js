/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import { getBlockDefaultClassName } from '@wordpress/blocks'
import {
  getColorObjectByColorValue,
  InnerBlocks
} from '@wordpress/block-editor'

/**
 * Internal dependencies
 */
import { config } from '../../theme'

const CardSave = ({ attributes }) => {
  const { backgroundImage, backgroundColor, mediaSizes, order } = attributes
  const className = getBlockDefaultClassName('freights/card')

  const backgroundColorClassName = getColorObjectByColorValue(
    config.colors,
    backgroundColor
  )

  const hasBackgroundColor =
    backgroundColorClassName !== undefined
      ? `has-background-color has-background-color-${backgroundColorClassName.slug}`
      : ''
  const contentClasses = classnames(
    'wp-block-freights-card__content',
    hasBackgroundColor
  )

  return (
    <div className={className} data-order={order}>
      {'full' in mediaSizes && (
        <div
          className="wp-block-freights-card__media"
          style={{ backgroundImage: `url(${mediaSizes.full.url})` }}
        ></div>
      )}
      <div className={contentClasses}>
        <InnerBlocks.Content />
      </div>
    </div>
  )
}

export default CardSave
