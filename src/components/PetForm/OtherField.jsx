import { Field } from 'formik'

export const OtherField = ({ type, label, name, placeholder, options = [] }) => {
	return (
		<label className='label'>
			<span>{label}</span>
			{type === 'select' && (
				<Field as={type} className='input' name={name}>
					{options.map(option => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</Field>
			)}
			{type === 'textarea' && <Field as={type} className='input' name={name} placeholder={placeholder} />}
		</label>
	)
}
