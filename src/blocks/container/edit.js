/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import {
  getColorObjectByColorValue,
  InspectorControls,
  ColorPalette
} from '@wordpress/block-editor'
import { PanelBody, SelectControl } from '@wordpress/components'
import { InnerBlocks } from '@wordpress/block-editor'

/**
 * Internal dependencies
 */
import { config } from '../../defaultConfig'

const ContainerEdit = ({
  attributes,
  className,
  hasChildBlocks,
  setAttributes
}) => {
  const { align, backgroundColor } = attributes

  const alignChange = align => {
    setAttributes({ align })
  }

  const backgroundColorChange = backgroundColor => {
    setAttributes({ backgroundColor })
  }

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
      <InspectorControls>
        <PanelBody title={__('Width')}>
          <SelectControl
            label={__('Select a width')}
            value={align}
            onChange={alignChange}
            options={[
              { value: 'full', label: 'Full' },
              { value: 'wide', label: 'Wide' }
            ]}
          />
          <ColorPalette
            colors={config.colors}
            value={backgroundColor}
            onChange={backgroundColorChange}
            clearable={true}
          />
        </PanelBody>
      </InspectorControls>
      <section className={classes} data-align={align}>
        <div className={className}>
          <InnerBlocks
            renderAppender={
              hasChildBlocks
                ? undefined
                : () => <InnerBlocks.ButtonBlockAppender />
            }
            templateLock={false}
          />
        </div>
      </section>
    </>
  )
}

export default ContainerEdit
