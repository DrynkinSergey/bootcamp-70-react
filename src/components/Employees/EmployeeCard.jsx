import clsx from 'clsx'
import s from './Employee.module.css'
export const EmployeeCard = ({ id, name, email, bio, skills, onDeleteUser, isOpenToWork }) => {
	return (
		<li className={clsx(s.userCard, isOpenToWork && 'isOpenToWork')}>
			<h3>{name}</h3>
			<p>{email}</p>
			<p>{bio}</p>
			<ul className={s.skillList}>
				{skills.map(skill => (
					<li className={s.skillLabel} key={skill}>
						{skill}
					</li>
				))}
			</ul>
			<button className={s.btn} onClick={() => onDeleteUser(id)}>
				Delete
			</button>
		</li>
	)
}
