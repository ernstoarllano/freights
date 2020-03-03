/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { MediaUploadCheck, MediaUpload } from '@wordpress/block-editor'
import { Button } from '@wordpress/components'
import { PanelBody, SelectControl } from '@wordpress/components'
import { InnerBlocks } from '@wordpress/block-editor'

/**
 * Allowed media types constant is passed to MediaUpload
 * The array should contain the name of each file type that is allowed
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_MEDIA_TYPES = ['image']

const CardEdit = ({ attributes, className, setAttributes }) => {
  console.log(attributes)

  return (
    <div className={className}>
      <div>
        <MediaUploadCheck>
          <MediaUpload
            onSelect={media => {
              setAttributes({ backgroundImage: media })
            }}
            allowedTypes={ALLOWED_MEDIA_TYPES}
            render={({ open }) => (
              <Button onClick={open}>Open Media Library</Button>
            )}
          />
        </MediaUploadCheck>
      </div>
      <div></div>
    </div>
  )
}

export default CardEdit
