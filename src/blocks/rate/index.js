/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import {
  ColorPalette,
  InspectorControls,
  RichText
} from '@wordpress/block-editor'
import { PanelBody } from '@wordpress/components'

/**
 * Internal dependencies
 */
import { icon } from './icon'

export default registerBlockType('freights/rate', {
  title: __('Rate'),
  description: __("Add a block that displays rate content you'd like."),
  icon: icon,
  category: 'layout',
  attributes: {
    heading: {
      type: 'array',
      source: 'children',
      selector: 'h3'
    },
    content: {
      type: 'array',
      source: 'children',
      selector: 'ul'
    },
    fontColor: {
      type: 'string',
      default: 'black'
    },
    width: {
      type: 'number'
    }
  },
  edit: props => {
    const { attributes, className, setAttributes } = props

    const headingChange = heading => {
      setAttributes({ heading })
    }

    const contentChange = content => {
      setAttributes({ content })
    }

    const colorChange = fontColor => {
      setAttributes({ fontColor })
    }

    // Set rate container classes
    const classes = classnames(className, 'p-6')

    return (
      <>
        <InspectorControls>
          <PanelBody title={__('Font Color')}>
            <ColorPalette value={attributes.fontColor} onChange={colorChange} />
          </PanelBody>
        </InspectorControls>
        <div className={classes} style={{ flexBasis: `${attributes.width}%` }}>
          <RichText
            tagName="h3"
            value={attributes.heading}
            onChange={headingChange}
            style={{ color: attributes.fontColor }}
            placeholder={__('Rate Type')}
            keepPlaceholderOnFocus={true}
          />
          <RichText
            tagName="ul"
            multiline="li"
            value={attributes.content}
            onChange={contentChange}
            style={{ color: attributes.fontColor }}
            placeholder={__('Rate')}
          />
        </div>
      </>
    )
  },
  save: props => {
    const { attributes, className } = props
    const { heading, content, fontColor } = attributes

    // Set rate container classes
    const classes = classnames(className, 'p-6')

    return (
      <div className={classes} style={{ width: `${attributes.width}%` }}>
        <RichText.Content
          tagName="h3"
          value={heading}
          style={{ color: fontColor }}
        />
        <RichText.Content
          tagName="ul"
          value={content}
          style={{ color: fontColor }}
        />
      </div>
    )
  }
})
