import styled, { defaultTheme } from '../../Library/theme';
import { adjustHue } from 'polished';

export const StyleList = styled.div`
	.tag-monthly {
		color: ${adjustHue(55, defaultTheme.primary)};
	}
	.tag-annual {
		color: ${adjustHue(90, defaultTheme.primary)};
	}
	.tag-quarterly {
		color: ${adjustHue(125, defaultTheme.primary)};
	}
	.tag-income {
		color: ${adjustHue(55, defaultTheme.primary)};
	}
	.tag-expense {
		color: ${adjustHue(125, defaultTheme.primary)};
	}
`;
