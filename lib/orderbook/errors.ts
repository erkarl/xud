import errorCodesPrefix from '../constants/errorCodesPrefix';

const codesPrefix = errorCodesPrefix.ORDERBOOK;
const errorCodes = {
  PAIR_DOES_NOT_EXIST: codesPrefix.concat('.1'),
  DUPLICATE_ORDER: codesPrefix.concat('.2'),
  OWN_ORDER_NOT_FOUND: codesPrefix.concat('.3'),
  CURRENCY_DOES_NOT_EXIST: codesPrefix.concat('.4'),
  CURRENCY_CANNOT_BE_REMOVED: codesPrefix.concat('.5'),
  CURRENCY_ALREADY_EXISTS: codesPrefix.concat('.6'),
  PAIR_ALREADY_EXISTS: codesPrefix.concat('.7'),
  ORDER_NOT_FOUND: codesPrefix.concat('.8'),
  PEER_ORDER_NOT_FOUND: codesPrefix.concat('.9'),
};

const errors = {
  PAIR_DOES_NOT_EXIST: (pairId: string) => ({
    message: `trading pair ${pairId} does not exist`,
    code: errorCodes.PAIR_DOES_NOT_EXIST,
  }),
  DUPLICATE_ORDER: (localId: string) => ({
    message: `order with local id ${localId} already exists`,
    code: errorCodes.DUPLICATE_ORDER,
  }),
  OWN_ORDER_NOT_FOUND: (localId: string) => ({
    message: `own order with local id ${localId} could not be found`,
    code: errorCodes.OWN_ORDER_NOT_FOUND,
  }),
  CURRENCY_DOES_NOT_EXIST: (currency: string) => ({
    message: `currency ${currency} does not exist`,
    code: errorCodes.CURRENCY_DOES_NOT_EXIST,
  }),
  CURRENCY_CANNOT_BE_REMOVED: (currency: string, pairId: string) => ({
    message: `currency ${currency} cannot be removed because it is used for ${pairId}`,
    code: errorCodes.CURRENCY_CANNOT_BE_REMOVED,
  }),
  CURRENCY_ALREADY_EXISTS: (currency: string) => ({
    message: `currency ${currency} already exists`,
    code: errorCodes.CURRENCY_ALREADY_EXISTS,
  }),
  PAIR_ALREADY_EXISTS: (pair_id: string) => ({
    message: `trading pair ${pair_id} already exists`,
    code: errorCodes.PAIR_ALREADY_EXISTS,
  }),
  ORDER_NOT_FOUND: (orderId: string) => ({
    message: `order with id ${orderId} could not be found`,
    code: errorCodes.ORDER_NOT_FOUND,
  }),
  PEER_ORDER_NOT_FOUND: (orderId: string, peerPubKey: string) => ({
    message: `peer order ${orderId} of peer ${peerPubKey} could not be found`,
    code: errorCodes.PEER_ORDER_NOT_FOUND,
  }),
};

export { errorCodes };
export default errors;
