import { ComponentPropsWithoutRef } from 'react'

import style from './typography.module.scss'

type PropsType = {
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
} & ComponentPropsWithoutRef<'div'>
export const Typography = ({ variant = 'large', ...rest }: PropsType) => {
  return <div className={`${style[variant]}`} {...rest} />
}
