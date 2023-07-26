import style from './card.module.scss'
import { ComponentPropsWithoutRef } from 'react'
export const Card = ({ className = 'dark', ...rest }: ComponentPropsWithoutRef<'div'>) => {
  return <div className={style[className]} {...rest}></div>
}
