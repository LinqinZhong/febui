import React from "react"
import { FIcon } from "#/base/icon/FIcon"
import { FebProps } from "@/types/component"

type Props = FebProps

export const FIconInfoFilled = (props: Props) => {
  const path = {
fill:"currentColor",
    d: 'M512.5 54c123.228 0 238.798 48.882 324.208 134.292C922.118 273.702 971 389.272 971 512.5c0 123.228-48.882 238.798-134.292 324.208C751.298 922.118 635.728 971 512.5 971c-123.228 0-238.797-48.882-324.209-134.292C102.881 751.298 54 635.728 54 512.5c0-123.228 48.882-238.797 134.292-324.209C273.702 102.881 389.272 54 512.5 54z m85.3 703.75l0.53-0.004c17.428-0.283 31.47-14.5 31.47-31.996 0-17.673-14.327-32-32-32h-42.638V427.2l-0.004-0.53c-0.282-17.428-14.5-31.47-31.995-31.47h-42.65l-0.53 0.004c-17.429 0.283-31.47 14.5-31.47 31.996l0.004 0.53c0.282 17.428 14.5 31.47 31.995 31.47h10.65v234.55h-42.637l-0.53 0.004c-17.428 0.283-31.47 14.5-31.47 31.996 0 17.673 14.327 32 32 32H597.8z m-85.3-522.475c-29.443 0-53.313 23.87-53.313 53.312 0 29.444 23.87 53.313 53.313 53.313s53.313-23.87 53.313-53.313-23.87-53.312-53.313-53.312z'
  }
  return (<FIcon name="info-filled" {...props} path={path}></FIcon>)
}

