/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import { InspectorControls, ColorPalette } from '@wordpress/block-editor'
import { PanelBody, SelectControl } from '@wordpress/components'
import { InnerBlocks } from '@wordpress/block-editor'

/**
 * Allowed blocks constant is passed to InnerBlocks
 * The array should contain the name of each block that is allowed
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = ['freights/rates']

/**
 * Internal dependencies
 */

export default registerBlockType('freights/container', {
  title: __('Container'),
  description: __('Add a container block to wrap your content in.'),
  category: 'layout',
  supports: {
    align: true,
    align: ['wide', 'full']
  },
  attributes: {
    align: {
      type: 'string',
      default: 'wide'
    },
    backgroundColor: {
      type: 'string',
      default: 'white'
    },
    width: {
      type: 'string',
      default: 'contained'
    }
  },
  edit: props => {
    const { attributes, className, setAttributes } = props

    const widthChange = width => {
      setAttributes({ width })
    }

    const backgroundColorChange = backgroundColor => {
      setAttributes({ backgroundColor })
    }

    return (
      <>
        <InspectorControls>
          <PanelBody title={__('Width')}>
            <SelectControl
              label={__('Select a width')}
              value={attributes.width}
              onChange={widthChange}
              options={[
                { value: 'full', label: 'Full' },
                { value: 'contained', label: 'Contained' }
              ]}
            />
            <ColorPalette
              value={attributes.backgroundColor}
              onChange={backgroundColorChange}
            />
          </PanelBody>
        </InspectorControls>
        <section
          className="py-6 md:py-12"
          style={{ backgroundColor: attributes.backgroundColor }}
        >
          <div className={className}>
            <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
          </div>
        </section>
      </>
    )
  },
  save: props => {
    const { attributes, className } = props
    const { width } = attributes

    // Set Tailwind classes
    const widthClass =
      width === 'full' ? 'w-full' : 'w-full max-w-default mx-auto'

    // Set container classes
    const classes = classnames(className, widthClass)

    return (
      <>
        <section
          className="py-6 md:py-12"
          style={{ backgroundColor: attributes.backgroundColor }}
        >
          <div className={classes}>
            <InnerBlocks.Content />
          </div>
        </section>
      </>
    )
  }
})
