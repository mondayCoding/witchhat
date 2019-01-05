import { desaturate, adjustHue, transparentize } from 'polished';
import React, { useState, useEffect } from 'react';
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { database } from '../Firebase';

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };

export interface ThemeContextVal {
	currentTheme: ThemeInterface;
	setCurrentTheme(x: ThemeInterface): void;
}
export default styled;

interface ThemeInterface {
	primary: string;
	secondary: string;
	text_primary: string;
	text_secondary: string;
	main_background_color: string;
	nav_background_color: string;
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
}

export const defaultTheme: ThemeInterface = {
	/** Can be configured */
	primary: '#75ab35',
	secondary: '#222',
	text_primary: 'rgba(220, 220, 220, 1)',
	text_secondary: '#75ab35',
	main_background_color: 'rgba(50, 50, 50, 1)',
	nav_background_color: '#222',

	//** Cannot be configured */
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
	global_shadow_inset: `0 0 0.4rem ${transparentize(0.6, 'black')} inset`
};

export const lightTheme: ThemeInterface = {
	/** Can be configured */
	primary: '#75ab35',
	secondary: '#222',
	text_primary: '#222',
	text_secondary: '#222',
	main_background_color: 'rgba(240, 240, 240, 1)',
	nav_background_color: 'rgba(215, 215, 215, 1)',

	//** Cannot be configured */
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
	global_shadow_inset: `0 0 0.4rem ${transparentize(0.6, 'black')} inset`
};

export const ThemeContext = React.createContext({});

export const ThemeManager: React.SFC = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState(defaultTheme);
	useEffect(() => {
		database
			.collection('configuration')
			.doc('theme')
			.get()
			.then((document) => {
				const theme = document.data() as ThemeInterface;
				setCurrentTheme(theme);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
			<ThemeProvider theme={currentTheme}>
				<>{children}</>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

// UTILITIES TODO

const sizes = {
	desktop: 992,
	tablet: 768,
	phone: 576
};

const medias = {
	desktop: (args: TemplateStringsArray) => css`
		@media (max-width: ${sizes.desktop / 16}em) {
			${css(args)}
		}
	`,
	tablet: (args: TemplateStringsArray) => css`
		@media (max-width: ${sizes.tablet / 16}em) {
			${css(args)}
		}
	`,
	phone: (args: TemplateStringsArray) => css`
		@media (max-width: ${sizes.phone / 16}em) {
			${css(args)}
		}
	`
};
