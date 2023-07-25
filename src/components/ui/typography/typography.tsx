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
  useMyTag?: any
} & ComponentPropsWithoutRef<'div'>
export const Typography = ({ variant = 'large', useMyTag, ...rest }: PropsType) => {
  const Tag = useMyTag || 'div'
  return <Tag className={`${style[variant]}`} {...rest} />
}
