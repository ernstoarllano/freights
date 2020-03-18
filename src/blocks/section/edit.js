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
  ColorPalette,
  MediaUploadCheck,
  MediaUpload
} from '@wordpress/block-editor'
import { PanelBody, Button } from '@wordpress/components'
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

const SectionEdit = ({
  attributes,
  className,
  hasChildBlocks,
  setAttributes
}) => {
  const { align, backgroundColor, mediaID, mediaSizes } = attributes

  const backgroundColorChange = backgroundColor => {
    setAttributes({ backgroundColor })
  }

  const removeBackgroundImage = () => {
    setAttributes({
      mediaID: undefined,
      mediaSizes: []
    })
  }

  const backgroundColorClassName = getColorObjectByColorValue(
    config.colors,
    backgroundColor
  )

  console.log(mediaID)

  const hasBackgroundColor =
    backgroundColorClassName !== undefined
      ? `has-background-color has-background-color-${backgroundColorClassName.slug}`
      : ''
  const classes = classnames(className, hasBackgroundColor)

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Background Color')}>
          <ColorPalette
            colors={config.colors}
            value={backgroundColor}
            onChange={backgroundColorChange}
            clearable={true}
          />
        </PanelBody>
        <PanelBody title={__('Background Image')}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={media => {
                setAttributes({ mediaID: media.id, mediaSizes: media.sizes })
              }}
              allowedTypes={ALLOWED_MEDIA_TYPES}
              value={mediaID}
              render={({ open }) => (
                <Button onClick={open}>{__('Add Background Image')}</Button>
              )}
            />
            {!!mediaID && (
              <Button onClick={removeBackgroundImage}>
                {__('Remove Background Image')}
              </Button>
            )}
          </MediaUploadCheck>
        </PanelBody>
      </InspectorControls>
      <section
        className={classes}
        data-align={align}
        data-mobile={'thumbnail' in mediaSizes && mediaSizes.thumbnail.url}
        data-desktop={'full' in mediaSizes && mediaSizes.full.url}
        style={{
          backgroundImage: 'full' in mediaSizes && `url(${mediaSizes.full.url})`
        }}
      >
        <InnerBlocks
          renderAppender={
            hasChildBlocks
              ? undefined
              : () => <InnerBlocks.ButtonBlockAppender />
          }
          templateLock={false}
        />
      </section>
    </>
  )
}

export default SectionEdit
