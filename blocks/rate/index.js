/**
 * Block dependencies
 */
//import './editor.css'
//import './style.css'

/**
 * WordPress libraries
 */
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { RichText } = wp.editor

export default registerBlockType('freights/rate', {
  title: __('Rate Block', 'freights'),
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

    return (
      <div className={className}>
        <RichText
          tagName="h3"
          value={attributes.heading}
          onChange={headingChange}
        />
        <RichText
          tagName="ul"
          multiline="li"
          value={attributes.content}
          onChange={contentChange}
        />
      </div>
    )
  },
  save: props => {
    const { attributes, className } = props

    return (
      <div className={className}>
        <RichText.Content tagName="h3" value={attributes.heading} />
        <RichText.Content tagName="ul" value={attributes.content} />
      </div>
    )
  }
})
