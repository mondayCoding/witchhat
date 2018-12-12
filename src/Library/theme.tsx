import { desaturate, adjustHue, transparentize } from 'polished';
import React, { useState } from 'react';
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;

interface ThemeInterface {
	primary: string;
	secondary: string;
	tertiary: string;
	link: string;
	gray_light: string;
	gray_medium: string;
	gray_heavy: string;
	gray_black: string;
	error_color: string;
	info_color: string;
	warning_color: string;
	success_color: string;
	font_body: string;
	font_headings: string;
	global_border_radius: string;
	global_shadow: string;
	global_shadow_inset: string;
	global_padding: string;
}

export const defaultTheme: ThemeInterface = {
	primary: '#75ab35',
	secondary: '#c4f56b',
	tertiary: '#c4f56b',
	link: '#23d5ab',
	gray_light: 'rgba(220, 220, 220, 1)',
	gray_medium: 'rgba(110, 110, 110, 1)',
	gray_heavy: 'rgba(50, 50, 50, 1)',
	gray_black: '#222',
	error_color: '#db6154',
	info_color: '#accff0',
	warning_color: '#ff970e',
	success_color: '#75ab35',
	font_body: "'Rubik', sans-serif",
	font_headings: "'Rubik', sans-serif",
	global_border_radius: '.5rem',
	global_shadow: `0 0 0.4rem ${transparentize(0.6, 'black')}`,
	global_shadow_inset: `0 0 0.4rem ${transparentize(0.6, 'black')} inset`,
	global_padding: '1rem'
};

export const themed_alt = {
	main_color: '#db6154',
	alt_color: '#db6154',
	link: '#db6154',
	gray_light: '#fff',
	gray_medium: '#fff',
	gray_heavy: '#fff',
	gray_black: '#db6154',
	error_color: '#db6154',
	infor_color: '#db6154',
	warning_color: '#db6154',
	success_color: '#db6154',
	font_body: "'Georgia', sans-serif",
	font_headings: "'Georgia', sans-serif",
	global_border_radius: '1rem',
	global_shadow: `0 0 0.4rem ${transparentize(0.6, 'black')}`,
	global_shadow_inset: `0 0 0.4rem ${transparentize(0.6, 'black')} inset`,
	global_padding: '1rem'
};

export const themeContext = React.createContext({});

export const ThemeManager: React.SFC = ({ children }) => {
	const [UITheme, setUITheme] = useState(defaultTheme);

	const setNewUITheme = (theme: typeof defaultTheme) => {
		setUITheme(theme);
	};

	return (
		<themeContext.Provider value={setNewUITheme}>
			<ThemeProvider theme={UITheme}>
				<>{children}</>
			</ThemeProvider>
		</themeContext.Provider>
	);
};

// UTILITIES TODO

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
