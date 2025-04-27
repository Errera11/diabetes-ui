import * as _ from 'lodash'

export function objLowercase<T extends Record<string, any>>(payload: object): T {
  const parsedObj = _.mapKeys(payload, (__: string, key: string) => {
    return _.lowerFirst(key)
  })

  return parsedObj as unknown as T
}
