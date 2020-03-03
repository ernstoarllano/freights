/**
 * WordPress dependencies
 */
import { getBlockDefaultClassName } from '@wordpress/blocks'
import { InnerBlocks } from '@wordpress/block-editor'

const RatesSave = ({ attributes }) => {
  const { rates } = attributes
  const className = getBlockDefaultClassName('freights/rates')

  return (
    <div className={className} data-rates={rates}>
      <InnerBlocks.Content />
    </div>
  )
}

export default RatesSave
