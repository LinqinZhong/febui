export const classnames = function (...v: (string | undefined)[]) {
  const buffer: string[] = []
  const classnames = {
    add(...v: (string | undefined)[]) {
      v.forEach((c) => {
        if (!!c) buffer.push(c)
      })
    },
    toString() {
      return buffer.join(' ')
    }
  }
  classnames.add(...v)
  return classnames as (string & typeof classnames)
}