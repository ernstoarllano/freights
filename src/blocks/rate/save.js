/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import { getBlockDefaultClassName } from '@wordpress/blocks'
import { InnerBlocks } from '@wordpress/block-editor'

const RateSave = ({ attributes }) => {
  const { alignment } = attributes
  const className = getBlockDefaultClassName('freights/rate')
  const classes = classnames(className, `has-text-align-${alignment}`)

  return (
    <div className={classes}>
      <InnerBlocks.Content />
    </div>
  )
}

export default RateSave
