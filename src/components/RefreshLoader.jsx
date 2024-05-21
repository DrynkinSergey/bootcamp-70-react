import { ThreeCircles } from 'react-loader-spinner'

export const RefreshLoader = () => {
	return (
		<ThreeCircles
			visible={true}
			height='200'
			width='200'
			ariaLabel='three-circles-loading'
			innerCircleColor='#fb0404'
			middleCircleColor='#1d04fb'
			outerCircleColor='#de04fb'
			wrapperClass='flex justify-center items-center min-h-screen'
		/>
	)
}
