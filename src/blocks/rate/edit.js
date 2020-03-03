/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import {
  InspectorControls,
  AlignmentToolbar,
  InnerBlocks
} from '@wordpress/block-editor'
import { PanelBody } from '@wordpress/components'

/**
 * Allowed blocks constant is passed to InnerBlocks
 * The array should contain the name of each block that is allowed
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = ['core/heading', 'core/paragraph']

const RateEdit = ({ attributes, className, hasChildBlocks, setAttributes }) => {
  const { alignment, width } = attributes
  const classes = classnames(className, `has-text-align-${alignment}`)

  const alignmentChange = alignment => {
    setAttributes({ alignment })
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Rate Alignment')}>
          <AlignmentToolbar value={alignment} onChange={alignmentChange} />
        </PanelBody>
      </InspectorControls>
      <div className={classes} style={{ flexBasis: `${width}%` }}>
        <InnerBlocks
          allowedBlocks={ALLOWED_BLOCKS}
          renderAppender={
            hasChildBlocks
              ? undefined
              : () => <InnerBlocks.ButtonBlockAppender />
          }
          templateLock={false}
        />
      </div>
    </>
  )
}

export default RateEdit
