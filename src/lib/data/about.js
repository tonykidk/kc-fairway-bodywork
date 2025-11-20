/**
 * @typedef {Object} TeamMember
 * @property {string} name - The name of the team member.
 * @property {string} role - The role of the team member.
 * @property {string} image - The URL of the team member's image.
 *
 * @typedef {Object} Value
 * @property {string} title - The title of the value.
 * @property {string} description - A description of the value.
 *
 * @typedef {Object} AboutData
 * @property {string} title - The title of the about page.
 * @property {string} aboutText - A brief description of the company.
 * @property {string} mission - The company's mission statement.
 * @property {string} vision - The company's vision statement.
 * @property {Value[]} values - A list of the company's core values.
 * @property {TeamMember[]} team - An array of team members.
 */
export const aboutData = {
	title: 'About Sincerely,Selfcare',
	aboutText: 'My name is Anthony Snell, and I created Sincerely, Selfcare with one mission: to help people feel better in their bodies. I specialize in therapeutic massage with a focus on recovery, pain relief, and improving mobility. From athletes to anyone managing tension, injuries, or chronic discomfort, I use techniques like neuromuscular therapy, trigger point work, cupping, heated scraper, and adhesion release to create meaningful, lasting results. Massage isn’t just a service to me—it’s a way to support your health, restore balance, and help you get back to doing what you love.',
	mission:
		'To provide quality bodywork that creates real improvement, encouraging you to be your best.',
	vision:
		'A community where golfers are inspired, supported, and equipped to move freely and play their best through high-quality, performance-focused bodywork.',
	values: [
		{
			title: 'Care that Drives Improvement',
			description:
				'Providing focused, intentional bodywork that creates real change.'
		},
		{
			title: 'Quality You Can Feel',
			description:
				'Delivering the level of care and precision golfers deserve.'
		},
		{
			title: 'Encouragement that Elevates',
			description:
				'Building confidence through every step of recovery both on and off the course.'
		},
		{
			title: 'The best web guy ever',
			description:
				'Fricken Slim Nate. GANG GANG.     Sorry though buddy, you will have to delete this box'
		}
	],
	team: [
		{
			name: 'John Doe',
			role: 'CEO',
			image: '/img/avatar-placeholder.webp'
		},
		{
			name: 'Jane Smith',
			role: 'CTO',
			image: '/img/avatar-placeholder.webp'
		},
		{
			name: 'Alice Johnson',
			role: 'COO',
			image: '/img/avatar-placeholder.webp'
		}
	]
};
