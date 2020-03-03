/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import { getColorObjectByColorValue } from '@wordpress/block-editor'
import { getBlockDefaultClassName } from '@wordpress/blocks'
import { InnerBlocks } from '@wordpress/block-editor'

/**
 * Internal dependencies
 */
import { config } from '../../defaultConfig'

const ContainerSave = ({ attributes }) => {
  const { align, backgroundColor } = attributes
  const className = getBlockDefaultClassName('freights/container')

  const backgroundColorClassName = getColorObjectByColorValue(
    config.colors,
    backgroundColor
  )

  const hasBackgroundColor =
    backgroundColorClassName !== undefined
      ? `has-background-color has-background-color-${backgroundColorClassName.slug}`
      : ''
  const classes = classnames('wp-block-freights-section', hasBackgroundColor)

  return (
    <>
      <section className={classes} data-align={align}>
        <div className={className}>
          <InnerBlocks.Content />
        </div>
      </section>
    </>
  )
}

export default ContainerSave
