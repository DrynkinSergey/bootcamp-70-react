import { images } from './imgs.js'
import s from './Gallery.module.css'
import { useState } from 'react'
import clsx from 'clsx'

export const GalleryApp = () => {
	// 1. Відмалювати одне зображення з масиву
	// 2. Створити стейт для індексу зображення
	// 3. Додати кнопки для зміни стейту зображення

	const [currentImg, setCurrentImg] = useState(0)

	const increment = () => {
		if (currentImg === images.length - 1) {
			setCurrentImg(0)
			return
		}
		setCurrentImg(prev => prev + 1)
	}
	const decrement = () => {
		if (currentImg === 0) {
			setCurrentImg(images.length - 1)
			return
		}
		setCurrentImg(prev => prev - 1)
	}
	const handleClick = id => {
		setCurrentImg(id)
	}
	const getRandomNum = () => Math.floor(Math.random() * images.length)
	const handleRandomImg = () => {
		setCurrentImg(getRandomNum())
	}
	return (
		<div className={s.gallery_wrapper}>
			<div>
				<button onClick={decrement}>Prev</button>
				<div className={s.img_wrapper}>
					<img src={images[currentImg].thumbnail} />
				</div>
				<p>{images[currentImg].title}</p>
				<button onClick={increment}>Next</button>
			</div>
			<button onClick={handleRandomImg}>Get random image</button>
			<ul className={s.list}>
				{images.map((item, idx) => {
					return (
						<li
							className={clsx(idx === currentImg && s.active, s.imgContainer)}
							key={item.id}
							onClick={() => handleClick(idx)}
						>
							<img src={item.thumbnail} />
						</li>
					)
				})}
			</ul>
		</div>
	)
}
