/**
 * @typedef {Object} Service
 * @property {string} id - Unique identifier for the service
 * @property {string} serviceName - The name/title of the service
 * @property {string} icon - The icon class associated with the service
 * @property {string} description - A brief description of the service
 * @property {Package[]} packages - An array of packages associated with the service
 *
 * @typedef {Object} Package
 * @property {string} name - The name of the package
 * @property {number} price - The price of the package
 * @property {string|null} description - A brief description of the package
 */

/** @type {Service[]} */
export const offerings = [
	{
		id: 'therapeutic-massage',
		serviceName: 'Therapeutic Massage',
		icon: 'icon-heart',
		description:
			'Every session is customized to your needs, whether that’s relieving chronic pain, improving posture, enhancing mobility, or supporting recovery after activity. I use a combination of whatever techniques or tools I have—neuromuscular therapy, trigger point work, cupping, heated scraper, and adhesion release—to create lasting results, not just temporary relief.',
		packages: [
			{ name: '30 minutes', price: 65, description: null },
			{ name: '60 minutes', price: 125, description: null },
			{ name: '90 minutes', price: 165, description: null }
		]
	},
	{
		id: 'mobile-massage',
		serviceName: 'Mobile Massage (In-Home)',
		icon: 'icon-home-modern',
		description:
			'Enjoy professional therapeutic massage in the comfort of your own home. I bring everything needed for a session that fits seamlessly into your routine. Travel fee may apply outside of the Kansas City metro area. Check service area.',
		packages: []
	},
	{
		id: 'studio-sessions',
		serviceName: 'Studio Sessions',
		icon: 'icon-building-storefront',
		description:
			'For those who prefer an appointment outside the home, I also offer sessions at my downtown Kansas City studio. Currently, availability is limited to Mondays, as I rent space with my mentor at Legacy Massage.',
		packages: []
	},
	{
		id: 'chair-massage',
		serviceName: 'Chair Massage for Corporate & Events',
		icon: 'icon-chart-bar',
		description:
			'Bring the benefits of massage directly to your workplace or special event. Chair massage reduces stress, improves focus, and supports overall wellness.',
		packages: [
			{ name: 'Company-paid (per hour)', price: 100, description: 'Billed to company' },
			{
				name: 'Employee-paid (per minute)',
				price: 1.65,
				description: 'Paid individually by each employee'
			}
		]
	},
	{
		id: 'packages',
		serviceName: 'Packages (self-care investment)',
		icon: 'icon-currency-dollar',
		description: 'Invest in your health with discounted session bundles designed for ongoing care:',
		packages: [
			{ name: '4 × 60-minute sessions', price: 450, description: null },
			{ name: '4 × 90-minute sessions', price: 600, description: null }
		]
	},
	{
		id: 'gift-vouchers',
		serviceName: 'Gift Vouchers (personal & soft)',
		icon: 'icon-link',
		description:
			'Give the gift of wellness. A Sincerely, Selfcare gift voucher is a thoughtful way to support a friend, loved one, or colleague with the benefits of massage therapy. Vouchers can be purchased for any service or session length and redeemed for both in-home and studio appointments.',
		packages: []
	}
];
