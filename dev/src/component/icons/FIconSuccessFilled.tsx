
import React from "react"
import { FIcon } from "#/base/icon/FIcon"
import { FebIconComponent, FebProps } from "@/types/component"

type Props = FebProps
export const FIconSuccessFilled: FebIconComponent = (props: Props) => {
    const path = {
fill:"currentColor",
        d: 'M512.5 54c123.228 0 238.798 48.882 324.208 134.292C922.118 273.702 971 389.272 971 512.5c0 123.228-48.882 238.798-134.292 324.208C751.298 922.118 635.728 971 512.5 971c-123.228 0-238.797-48.882-324.209-134.292C102.881 751.298 54 635.728 54 512.5c0-123.228 48.882-238.797 134.292-324.209C273.702 102.881 389.272 54 512.5 54z m235.877 307.923c-12.496-12.497-32.758-12.497-45.254 0L469.85 595.195 364.527 489.873l-0.377-0.372c-12.524-12.124-32.506-12-44.877 0.372-12.497 12.496-12.497 32.758 0 45.254l127.95 127.95 0.377 0.372c12.524 12.124 32.506 12 44.877-0.372l255.9-255.9 0.372-0.377c12.124-12.524 12-32.506-0.372-44.877z'
    }
    return (<FIcon name="success-filled" {...props} path={path}></FIcon>)
}

