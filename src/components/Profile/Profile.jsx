const Profile = ({ userData }) => {
	const { firstName, lastName, image, age, email, phone, gender, address } = userData
	return (
		<div>
			<img src={image} alt={firstName} />
			<h2>
				{firstName} {lastName}
			</h2>
			<p>Gender: {gender}</p>
			<p>Phone: {phone}</p>
			<p>Age: {age}</p>
			<p>Email: {email}</p>
			<p>
				Address: {address.address} {address.city}
			</p>
		</div>
	)
}

export default Profile
