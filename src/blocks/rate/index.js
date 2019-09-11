/**
 * WordPress dependencies
 */
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { ColorPalette, InspectorControls, RichText } = wp.editor

/**
 * Internal dependencies
 */
import { icon } from './icon'

export default registerBlockType('freights/rate', {
  title: __('Rate', 'freights'),
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

    const colorChange = color => {
      setAttributes({ fontColor: color })
    }

    return (
      <>
        <InspectorControls>
          <ColorPalette value={attributes.fontColor} onChange={colorChange} />
        </InspectorControls>
        <div className={className}>
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

    return (
      <div className={className}>
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
