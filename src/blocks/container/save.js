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
import { config } from '../../defaultConfig'

const ContainerSave = ({ attributes }) => {
  const { align } = attributes
  const className = getBlockDefaultClassName('freights/container')

  return (
    <>
      <div className={className} data-align={align}>
        <InnerBlocks.Content />
      </div>
    </>
  )
}

export default ContainerSave
