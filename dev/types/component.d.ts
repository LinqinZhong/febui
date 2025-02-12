declare type FebProps<T = {}, E = HTMLElement> = T & {
  children?: ReactNode
  className?: string,
  style?: HTMLAttributes<E>,
  onClick?: OnClickFn,
  ref?: (el: ReactNode) => void
}