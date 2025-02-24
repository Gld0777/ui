import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export enum ChipVariant {
  positive,
  negative,
  warning,
  gray,
}

export type ChipVariants = keyof typeof ChipVariant

export type ChipProps = LidoComponentProps<
  'div',
  {
    wrapperRef?: React.RefObject<HTMLLabelElement>
    variant?: ChipVariants
  }
>
