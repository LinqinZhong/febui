import React from "react"
import { FIcon } from "#/base/icon/FIcon"
import { FebProps } from "@/types/component"

type Props = FebProps

export const FIconMessage = (props: Props) => {
    const path = {
fill:"currentColor",
        d: 'M939 107c17.673 0 32 14.327 32 32v640.286c0 17.673-14.327 32-32 32l-306.613-0.001-97.25 97.333c-12.374 12.384-32.37 12.508-44.897 0.371l-0.377-0.371-97.251-97.333H86c-17.496 0-31.713-14.041-32-31.47V139c0-17.673 14.327-32 32-32z m-32 64H118v576.285h287.875a32 32 0 0 1 22.274 9.026l0.363 0.357 83.987 84.058 83.99-84.058a32 32 0 0 1 22.127-9.378l0.509-0.004L907 747.285V171zM533.878 427.143c17.673 0 32 14.327 32 32 0 17.496-14.041 31.713-31.47 31.996l-0.53 0.004h-42.703c-17.673 0-32-14.327-32-32 0-17.497 14.042-31.713 31.47-31.996l0.53-0.004h42.703z m213.195 0c17.673 0 32 14.327 32 32 0 17.496-14.042 31.713-31.471 31.996l-0.53 0.004h-42.626c-17.673 0-32-14.327-32-32 0-17.497 14.042-31.713 31.471-31.996l0.53-0.004h42.626z m-426.5 0c17.673 0 32 14.327 32 32 0 17.496-14.042 31.713-31.471 31.996l-0.53 0.004h-42.626c-17.673 0-32-14.327-32-32 0-17.497 14.042-31.713 31.471-31.996l0.53-0.004h42.626z'
    }
    return (<FIcon name="message" {...props} path={path}></FIcon>)
}
