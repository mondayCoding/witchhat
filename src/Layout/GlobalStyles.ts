import { createGlobalStyle } from '../Library/theme';
import { mix, darken } from 'polished';

export const GlobalStyle = createGlobalStyle`

   *, *::after, *::before {
      box-sizing: border-box;
      margin: 0;
	   padding: 0;
   }

   html {
      box-sizing: border-box;
      font-size: 1rem;
      height: 100vh;
   }
   
   body {
      box-sizing: border-box;
      color: $gray-light;
      font-family: ${({ theme }) => theme.font_body};
      font-size: 1rem;
      height: 100vh;
      line-height: 1.6;
   }

   h1, h2, h3, h4, h5, h6 {
      font-family: ${({ theme }) => theme.font_headings};
      margin-bottom: 0.5rem;
   }

   ul > li {
      margin-left: 1rem;
   }

   label {
      display: inline-block;
      margin: 0;
   }

   img {
      display: block;
      width: 100%;
   }

   input {
      background: none;
      border: 0;
      outline: none;
      width: 100%;
   }

   /* PLUGIN | TOASTIFY  */
   
   .Toastify__toat--toast--success {
		background-color: ${({ theme }) => theme.warning_color} !important;
   }
   
   /* PLUGIN | REACT-TABLE */

   .ReactTable {
      border: 0.1rem solid ${({ theme }) => theme.gray_black};
      border-radius: ${({ theme }) => theme.global_border_radius};
      box-shadow: ${({ theme }) => theme.global_shadow};
      background-color: ${({ theme }) => darken(0.03, theme.main_background_color)};
      display: flex;
      flex-direction: column;
      margin-bottom: 0.75rem;

      .rt-tbody {
         border-top: .1rem solid ${({ theme }) => theme.gray_black};   
         
         .rt-tr-group {            
            position: relative;
            transition: background-color 0.2s ease-in-out;            

            &:hover,
            &:nth-child(odd):hover {
               background-color: ${({ theme }) => mix(0.85, theme.primary, 'white')};
               color: white;
            }

            &:nth-child(odd) {
               background-color: ${({ theme }) => theme.main_background_color};
            }

            &:last-child {
               border-bottom-left-radius: ${({ theme }) =>
						theme.global_border_radius};
               border-bottom-right-radius: ${({ theme }) =>
						theme.global_border_radius};
            } 

            .rt-td {
               padding: .3rem;
            }

            /* .rt-td:not(:last-child) {
               border-right: 0.1rem solid ${({ theme }) => theme.gray_black};
            } */
         }
      }
   }

   /* PLUGIN | REACT-SELECT */

   .react-select {
      min-width: 25%;
      cursor: pointer;

      .react-select__control {
         background-color: ${({ theme }) => theme.main_background_color};
         color: ${({ theme }) => theme.primary};
         border-color:${({ theme }) => theme.primary};
         border-radius: ${({ theme }) => theme.global_border_radius};


         &:hover {
            border-color: ${({ theme }) => theme.primary};
         }

         .reactselect__value-container, .react-select__value-container--has-value {
            color: ${({ theme }) => theme.text_primary};
            padding: .1rem;

            .react-select__single-value {
               color: ${({ theme }) => theme.text_primary} !important;
            }
         }

         .reactselect__indicators {
            color: ${({ theme }) => theme.text_primary};
            padding: .2rem;

         }
      }

      .react-select__control--is-focused {
         border-color: ${({ theme }) => theme.primary};
      }

      .react-select__menu {
         background-color: ${({ theme }) => theme.main_background_color};

         .react-select__menu-list {
            .react-select__option:hover {
               background: ${({ theme }) => theme.primary};
            }

            .react-select__option--is-focused {
               background: ${({ theme }) => theme.primary};
            }

            .react-select__option--is-selected {
               background: ${({ theme }) =>
						mix(0.5, theme.primary, theme.secondary)};
            }
            
         }
      }
   }
`;
