import { Comment } from 'react-loader-spinner'
import s from './Posts.module.css'
export const Loader = () => {
	return (
		<div className={s.loader}>
			<Comment
				visible={true}
				height='380'
				width='380'
				ariaLabel='comment-loading'
				wrapperStyle={{}}
				wrapperClass='comment-wrapper'
				color='#fff'
				backgroundColor='#0000f6'
			/>
		</div>
	)
}
