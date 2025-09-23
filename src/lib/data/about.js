/**
 * @typedef {Object} TeamMember
 * @property {string} name - The name of the team member.
 * @property {string} role - The role of the team member.
 * @property {string} image - The URL of the team member's image.
 *
 * @typedef {Object} AboutData
 * @property {string} subtitle - A brief description of the company.
 * @property {string} mission - The company's mission statement.
 * @property {string} vision - The company's vision statement.
 * @property {string[]} values - A list of the company's core values.
 * @property {TeamMember[]} team - An array of team members.
 */
export const aboutData = {
	subtitle:
		'We are a forward-thinking company dedicated to providing innovative solutions to our customers. Our mission is to deliver excellence in every aspect of our business.',
	mission:
		'To empower businesses and individuals with cutting-edge technology and unparalleled support, enabling them to achieve their goals.',
	vision:
		'To be a global leader in our industry, recognized for our commitment to innovation, quality, and customer satisfaction.',
	values: [
		'Integrity and transparency',
		'Customer-centric approach',
		'Innovation and creativity',
		'Commitment to excellence'
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
