import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';
import metadata from '$lib/data/meta.js';

const replacePlaceholders = (html: string, replacements: Record<string, string>): string => {
	for (const [placeholder, value] of Object.entries(replacements)) {
		html = html.replace(new RegExp(placeholder, 'g'), value);
	}
	return html;
};

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;

		return resolve(event, {
			transformPageChunk: ({ html }) => {
				// Replace placeholders before passing to paraglide
				html = replacePlaceholders(html, {
					'%paraglide.lang%': locale,
					'%meta.title%': metadata.title,
					'%meta.description%': metadata.description,
					'%meta.keywords%': metadata.keywords.join(', ')
				});
				return html;
			}
		});
	});

export const handle: Handle = handleParaglide;
