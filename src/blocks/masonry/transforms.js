/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	createBlock
} from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: ['occ/exhibitpress-horizontal'],
			transform: (attributes) => {
				return createBlock('occ/exhibitpress-masonry', {
					items: attributes.items,
					gap: attributes.gap,
					captions: attributes.captions,
				});
			},
		},
		{
			type: 'block',
			blocks: ['occ/exhibitpress-slider'],
			transform: (attributes) => {
				return createBlock('occ/exhibitpress-masonry', {
					items: attributes.items,
					captions: attributes.captions,
					align: attributes.align
				});
			},
		},
		{
			type: 'block',
			blocks: ['occ/exhibitpress-grid'],
			transform: (attributes) => {
				return createBlock('occ/exhibitpress-masonry', {
					items: attributes.items,
					columns: attributes.columns,
					gap: attributes.gap,
					crop: attributes.crop,
					lightbox: attributes.lightbox,
					lightbox_background: attributes.lightbox_background,
					captions: attributes.captions,
					align: attributes.align
				});
			},
		},
	]
}

export default transforms;