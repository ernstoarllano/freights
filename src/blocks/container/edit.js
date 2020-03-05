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
  ColorPalette,
  MediaUploadCheck,
  MediaUpload
} from '@wordpress/block-editor'
import { PanelBody, SelectControl, Button } from '@wordpress/components'
import { InnerBlocks } from '@wordpress/block-editor'

/**
 * Internal dependencies
 */
import { config } from '../../defaultConfig'

/**
 * Allowed media types constant is passed to MediaUpload
 * The array should contain the name of each file type that is allowed
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_MEDIA_TYPES = ['image']

const ContainerEdit = ({
  attributes,
  className,
  hasChildBlocks,
  setAttributes
}) => {
  const { align } = attributes

  const alignChange = align => {
    setAttributes({ align })
  }

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
        </PanelBody>
      </InspectorControls>
      <div className={className} data-align={align}>
        <InnerBlocks
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

export default ContainerEdit
