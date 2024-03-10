/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	ToolbarGroup,
	ToolbarButton,
	RangeControl,
	SelectControl,
	ToggleControl,
	PanelBody,
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';
import {
	InspectorControls,
	BlockControls,
	MediaUploadCheck,
	MediaUpload,
	MediaPlaceholder,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	useRefEffect,
	useMergeRefs
} from '@wordpress/compose';
import {
	useEffect,
	useState
} from '@wordpress/element';
import {
	caption as captionIcon,
} from '@wordpress/icons';

/**
 * Internal dependencies
 */
import 'lightgallery.js';
import 'lightgallery.js/dist/css/lightgallery.css';

const Edit = (props) => {
	const {
		attributes: { items, columns, gap, crop, lightbox, lightbox_background, captions },
		setAttributes,
	} = props;

	const blockProps = useBlockProps({
		className: classnames('columns-' + columns, crop ? 'is-cropped' : '')
	});

	const units = useCustomUnits({
		availableUnits: ['px'],
		defaultValues: { px: 100 },
	});

	const displayItems = (items) => {
		return (
			items.map((item, index) => {
				return (
					<div className="exhibit-item" key={index}>
						<figure>
							{lightbox ?
								<a data-rel="collection" href={item.url} data-sub-html={item.caption}>
									<img className={`wp-image-${item.id}`} src={item.url} alt={item.alt} key={item.id} />
								</a>
								:
								<img className={`wp-image-${item.id}`} src={item.url} alt={item.alt} key={item.id} />
							}
							{captions && item.caption &&
								<figcaption className="wp-element-caption">
									{item.caption}
								</figcaption>
							}
						</figure>
					</div>
				)
			})
		)
	};

	const setItems = (media) => {
		setAttributes({ items: media })
	}

	const setColumns = (value) => {
		setAttributes({ columns: parseInt(value, 10) })
	}

	const setGap = (value) => {
		setAttributes({ gap: value })
	}

	const toggleCrop = () => {
		setAttributes({ crop: !props.attributes.crop });
	}

	const toggleLightbox = () => {
		setAttributes({ lightbox: !props.attributes.lightbox });
	}

	const setLightboxBackground = (value) => {
		setAttributes({ lightbox_background: value })
	}

	const toggleCaptions = () => {
		setAttributes({ captions: !props.attributes.captions });
	}

	const containerMasonryRef = useRefEffect((element) => {

		const { ownerDocument } = element;
		const { defaultView } = ownerDocument;

		console.log(defaultView);
		console.log(defaultView.Masonry);

		if (!defaultView.Masonry) {
			return;
		}

		const msnry = new defaultView.Masonry(element, {
			itemSelector: '.exhibit-item',
			columnWidth: '.grid-sizer',
			percentPosition: true,
			gutter: parseInt(gap),
		});

		return () => {
			msnry.destroy();
		}

	}, [items, columns, gap, crop, captions]);

	const containerLightboxRef = useRefEffect((element) => {

		if (lightbox) {
			lightGallery(element, {
				selector: 'a[data-rel^=collection]',
				addClass: lightbox_background,
				mode: 'lg-fade',
				preload: 4,
				counter: false,
				download: false,
				youtubePlayerParams: {
					autoplay: 0
				},
				vimeoPlayerParams: {
					autoplay: 0
				}
			});
		}

		return () => {
			window?.lgData[element?.getAttribute('lg-uid')]?.destroy(true);
		}

	}, [lightbox, lightbox_background]);

	const mergedRefs = useMergeRefs([
		containerMasonryRef,
		containerLightboxRef,
	]);

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Settings', 'exhibitpress')}
				>
					<RangeControl
						label={__('Columns', 'exhibitpress')}
						value={columns}
						onChange={setColumns}
						min={1}
						max={8}
					/>
					<UnitControl
						label={__('Gap between items', 'exhibitpress')}
						min="0"
						onChange={setGap}
						value={gap}
						units={units}
					/>
					<ToggleControl
						label={__('Crop thumbnails', 'exhibitpress')}
						checked={!!crop}
						onChange={toggleCrop}
					/>
					<ToggleControl
						label={__('Enable lightbox', 'exhibitpress')}
						checked={!!lightbox}
						onChange={toggleLightbox}
					/>
					{lightbox &&
						<SelectControl
							label={__('Lightbox background color', 'exhibitpress')}
							value={lightbox_background}
							options={[
								{ label: __('Black', 'exhibitpress'), value: 'black' },
								{ label: __('White', 'exhibitpress'), value: 'white' },
							]}
							onChange={setLightboxBackground}
						/>
					}
				</PanelBody>
			</InspectorControls>
			<BlockControls group="block">
				<ToolbarButton
					onClick={toggleCaptions}
					icon={captionIcon}
					isPressed={captions}
					label={
						captions
							? __('Hide captions', 'exhibitpress')
							: __('Show captions', 'exhibitpress')
					}
				/>
			</BlockControls>
			<BlockControls group="other">
				{items.length > 0 && (
					<ToolbarGroup>
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={['image']}
								multiple={true}
								gallery={true}
								value={items.map((item) => item.id)}
								onSelect={setItems}
								render={({ open }) => (
									<ToolbarButton onClick={open}>
										{__('Edit items', 'exhibitpress')}
									</ToolbarButton>)}
							/>
						</MediaUploadCheck>
					</ToolbarGroup>
				)}
			</BlockControls>
			<MediaUploadCheck>
				<div {...blockProps}>
					{items.length > 0 ?
						<div className="exhibit-items" style={{ '--gap': gap }} ref={mergedRefs}>
							<div className="grid-sizer"></div>
							{displayItems(items)}
						</div>
						:
						<MediaPlaceholder
							accept="image/*"
							allowedTypes={['image']}
							onSelect={setItems}
							multiple={true}
							gallery={true}
							addToGallery={true}
							handleUpload={true}
							labels={
								{ title: __('ExhibitPress: Masonry', 'exhibitpress') }
							}
						/>
					}
				</div>
			</MediaUploadCheck>
		</>
	);

};

export default Edit;