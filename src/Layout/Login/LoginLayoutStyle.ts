import styled, { keyframes } from '../../Library/theme';

const keyframes_rotate = keyframes`
   0% {
      background-position: 0% 50%
   }
   50% {

      background-position: 100% 50%
   }
   100% {
      background-position: 0% 50%
   }
`;

export const ThemedLogin = styled.div`
	height: 100vh;
	background: ${({ theme }) => theme.gray_heavy};
	display: flex;
	flex-direction: column;
	position: relative;
	justify-content: center;
	align-items: center;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: ${keyframes_rotate} 15s ease infinite;
`;
