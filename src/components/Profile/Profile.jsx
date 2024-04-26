import s from './Profile.module.css'

const Profile = ({ userData }) => {
	const { firstName, lastName, image, age, email, phone, gender, address } = userData
	return (
		<div className={s.wrapper}>
			<div className={s.profile}>
				<div className={s.wrapperImage}>
					<img src={image} alt={firstName} />
				</div>
				<h2 className={s.title}>
					{firstName} {lastName}
				</h2>
				<p>Gender: {gender}</p>
				<p>Phone: {phone}</p>
				<p>Age: {age}</p>
				<p className={s.email}>Email: {email}</p>
				<p>
					Address: {address.address} {address.city}
				</p>
			</div>
		</div>
	)
}

export default Profile
