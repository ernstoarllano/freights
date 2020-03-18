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
  MediaUpload,
  getColorObjectByColorValue
} from '@wordpress/block-editor'
import { Button } from '@wordpress/components'
import { PanelBody, SelectControl } from '@wordpress/components'
import { InnerBlocks } from '@wordpress/block-editor'

/**
 * Internal dependencies
 */
import { config } from '../../theme'

/**
 * Allowed media types constant is passed to MediaUpload
 * The array should contain the name of each file type that is allowed
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_MEDIA_TYPES = ['image']

/**
 * Allowed blocks constant is passed to InnerBlocks
 * The array should contain the name of each block that is allowed
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = [
  'core/button',
  'core/heading',
  'core/list',
  'core/paragraph'
]

const CardEdit = ({ attributes, className, hasChildBlocks, setAttributes }) => {
  const { backgroundColor, mediaID, mediaSizes, order } = attributes

  const backgroundColorChange = backgroundColor => {
    setAttributes({ backgroundColor })
  }

  const orderChange = order => {
    setAttributes({ order })
  }

  const backgroundColorClassName = getColorObjectByColorValue(
    config.colors,
    backgroundColor
  )

  const hasBackgroundColor =
    backgroundColorClassName !== undefined
      ? `has-background-color has-background-color-${backgroundColorClassName.slug}`
      : ''
  const contentClasses = classnames(
    'wp-block-freights-card__content',
    hasBackgroundColor
  )

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Background Image')}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={media => {
                setAttributes({ mediaID: media.id, mediaSizes: media.sizes })
              }}
              allowedTypes={ALLOWED_MEDIA_TYPES}
              value={mediaID}
              render={({ open }) => (
                <Button onClick={open}>Open Media Library</Button>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>
        <PanelBody title={__('Background Color')}>
          <ColorPalette
            colors={config.colors}
            value={backgroundColor}
            onChange={backgroundColorChange}
            clearable={true}
          />
        </PanelBody>
        <PanelBody title={__('Content Order')}>
          <SelectControl
            label={__('Select the content order')}
            value={order}
            onChange={orderChange}
            options={[
              { value: 'default', label: 'Default' },
              { value: 'reverse', label: 'Reverse' }
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={className} data-order={order}>
        {'full' in mediaSizes && (
          <div
            className="wp-block-freights-card__media"
            style={{ backgroundImage: `url(${mediaSizes.full.url})` }}
          ></div>
        )}
        <div className={contentClasses}>
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
      </div>
    </>
  )
}

export default CardEdit
