import { ErrorMessage, Field } from 'formik'

export const OtherField = ({ type, label, name, placeholder = 'Оберіть варіант', options = [] }) => {
	return (
		<label className='label'>
			<span>{label}</span>
			{type === 'select' && (
				<Field as={type} className='input' name={name}>
					<option value=''>{placeholder}</option>
					{options.map(option => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</Field>
			)}
			{type === 'textarea' && <Field as={type} className='input' name={name} placeholder={placeholder} />}
			<ErrorMessage name={name} component='span' className='error' />
		</label>
	)
}
