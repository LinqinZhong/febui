declare type FMenuItem = {
  name: string,
  label: string,
  children?: FMenuItem[]
  disabled?: boolean
  icon?: FebIconComponent
}