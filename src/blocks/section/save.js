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

const SectionSave = ({ attributes }) => {
  const { align, backgroundColor } = attributes
  const className = getBlockDefaultClassName('freights/section')

  const backgroundColorClassName = getColorObjectByColorValue(
    config.colors,
    backgroundColor
  )

  const hasBackgroundColor =
    backgroundColorClassName !== undefined
      ? `has-background-color has-background-color-${backgroundColorClassName.slug}`
      : ''
  const classes = classnames(className, hasBackgroundColor)

  return (
    <>
      <section className={classes} data-align={align}>
        <InnerBlocks.Content />
      </section>
    </>
  )
}

export default SectionSave
