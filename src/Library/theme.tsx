import { css } from 'styled-components';
import { desaturate, adjustHue, transparentize } from 'polished';

export const themed = {
	main_color: '#75ab35',
	alt_color: '#c4f56b',
	link: '#23d5ab',
	gray_light: 'rgba(220, 220, 220, 1)',
	gray_medium: 'rgba(110, 110, 110, 1)',
	gray_heavy: 'rgba(50, 50, 50, 1)',
	gray_black: '#222',
	black: 'rgb(0, 0, 0)',
	white: '#fff',
	error_color: '#db6154',
	infor_color: '#accff0',
	warning_color: '#ff970e',
	success_color: '#75ab35',
	font_body: "'Rubik', sans-serif",
	font_headings: "'Rubik', sans-serif",
	global_border_radius: '.5rem',
	global_shadow: `0 0 0.4rem ${transparentize(0.6, 'black')}`,
	global_shadow_inset: `0 0 0.4rem ${transparentize(0.6, 'black')} inset`,
	global_padding: '1rem'
};

export const disableStyle = css`
	cursor: not-allowed;
	filter: grayscale(90%);
	opacity: 0.7;
	pointer-events: none;
`;

const sizes: any = {
	desktop: 992,
	tablet: 768,
	phone: 576
};

// Iterate through the sizes and create a media template
// export const media2 = Object.keys(sizes).reduce((acc: any, label: any) => {
// 	acc[label] = (...args: any) => css`
// 		@media (max-width: ${sizes[label] / 16}em) {
// 			${css(args ? ...args : null)}
// 		}
// 	`;
// 	return acc;
// }, {});

// const media = {
// 	desktop: (args: any) => css`
// 		@media (max-width: ${992 / 16}em) {
// 			${css(...args)}
// 		}
// 	`
// };
