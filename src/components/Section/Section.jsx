import clsx from 'clsx'
import s from './Section.module.css'
import { MdDeleteOutline } from 'react-icons/md'
import { LuListTodo } from 'react-icons/lu'
import MyIcon from '../../assets/svg/icon.svg'
const Section = ({ title = 'Default title', data = [] }) => {
	return (
		<div>
			{/* <h2 className={`${s.title} ${true && s.cursive} `}>{title}</h2> */}
			<h2
				className={clsx(s.title, 'cursive', 'big', 'label', {
					[s.cursive]: true,
				})}
			>
				<LuListTodo />
				{title}
			</h2>

			{data.length ? (
				<ul className={s.list}>
					{data.map(item => (
						<li className={s.item} key={item.id}>
							{item.title}

							<button>
								<img src={MyIcon} alt='icon' />
								<MdDeleteOutline size={48} className={s.btnDelete} />
							</button>
						</li>
					))}
				</ul>
			) : (
				<p>No data</p>
			)}
		</div>
	)
}

export default Section
