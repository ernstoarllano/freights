/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import { getBlockDefaultClassName } from '@wordpress/blocks'
import { InnerBlocks } from '@wordpress/block-editor'

/**
 * Internal dependencies
 */
import { config } from '../../theme'

const ContainerSave = ({ attributes }) => {
  const { fullWidth } = attributes
  const className = getBlockDefaultClassName('freights/container')
  const containerWidth = fullWidth ? 'full' : 'wide'

  return (
    <>
      <div className={className} data-width={containerWidth}>
        <InnerBlocks.Content />
      </div>
    </>
  )
}

export default ContainerSave
