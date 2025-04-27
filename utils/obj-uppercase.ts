import * as _ from 'lodash'

export function objUppercase(payload: object) {
  return _.mapKeys(payload, (__: string, key: string) => {
    return _.upperFirst(key)
  })
}
