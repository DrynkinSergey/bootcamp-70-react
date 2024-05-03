import { ErrorMessage, Field } from 'formik'

export const InputField = ({ label, name, placeholder, type = 'text' }) => {
	return (
		<label className='label'>
			<span>{label}</span>
			<Field type={type} placeholder={placeholder} className='input' name={name} />
			<ErrorMessage name={name} component='span' className='error' />
		</label>
	)
}
