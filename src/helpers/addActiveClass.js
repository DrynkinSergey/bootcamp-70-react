import clsx from 'clsx'

export const buildLinkClass = (isActive, classname) => {
	return clsx(isActive && classname)
}
