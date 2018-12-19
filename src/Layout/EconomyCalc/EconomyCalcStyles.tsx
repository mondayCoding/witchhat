import styled from '../../Library/theme';
import { adjustHue } from 'polished';

export const StyleList = styled.div`
	overflow: hidden;

	.tag-monthly {
		color: ${({ theme }) => adjustHue(55, theme.primary)};
	}
	.tag-annual {
		color: ${({ theme }) => adjustHue(90, theme.primary)};
	}
	.tag-quarterly {
		color: ${({ theme }) => adjustHue(125, theme.primary)};
	}
	.tag-income {
		color: ${({ theme }) => adjustHue(55, theme.primary)};
	}
	.tag-expense {
		color: ${({ theme }) => adjustHue(125, theme.primary)};
	}
`;
