import style from './checkbox.module.scss'
import * as CheckboxRadixUi from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

type PropsType = {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}
export const Checkbox = ({ checked, ...rest }: PropsType) => (
  <CheckboxRadixUi.Root className={style.root} {...rest}>
    <CheckboxRadixUi.Indicator>{checked === true && <CheckIcon />}</CheckboxRadixUi.Indicator>
  </CheckboxRadixUi.Root>
)
