import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { FieldProps } from 'formik';
import { PickerWrapper, ColorSampleWrapper } from './ColorPickerStyles';

interface TextProp {
	text: string;
}

export const ColorPicker: React.SFC<FieldProps & TextProp> = (props) => {
	const [displayPicker, setDisplayPicker] = useState(false);
	const { field, form, text } = props;
	const handlePickerClick = () => setDisplayPicker(!displayPicker);

	return (
		<PickerWrapper>
			<ColorSampleWrapper color={field.value} onClick={handlePickerClick}>
				<div className="sample" style={{ backgroundColor: field.value }}>
					<b>{text}</b>
				</div>
			</ColorSampleWrapper>

			{displayPicker && (
				<ChromePicker
					color={field.value}
					disableAlpha={true}
					onChangeComplete={(value) => {
						form.setFieldValue(field.name, value.hex);
						form.setFieldTouched(field.name);
					}}
				/>
			)}
		</PickerWrapper>
	);
};
