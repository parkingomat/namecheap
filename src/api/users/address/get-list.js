import extractTags from 'rexml'

const COMMAND = 'namecheap.users.address.getList'

/**
 * Gets a list of address IDs and address names associated with the user account.
 * @example
 *
 * // Get the list of addresses added to the account.
 * await nc.users.address.getList()
 * // Result:
 * [
 *  {
 *    AddressId: 0,
 *    AddressName: 'Primary Address',
 *    IsDefault: true,
 *  }
 * ]
 */
async function getList() {
  const res = await this._query(COMMAND)
  const [{
    content: AddressGetListResult,
  }] = extractTags('AddressGetListResult', res)
  const List = extractTags('List', AddressGetListResult)
  const addresses = List.map(({ props }) => {
    /** @type {Address} */
    const a = props
    return a
  })
  return addresses
}

export default getList

/* documentary types/api/users/address/get-list.xml */
/**
 * @typedef {Object} Address
 * @prop {number} AddressId A unique integer value that represents the address profile.
 * @prop {number} AddressName The name of the address profile.
 * @prop {boolean} IsDefault Whether it is a default address.
 */