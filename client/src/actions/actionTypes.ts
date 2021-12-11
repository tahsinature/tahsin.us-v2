const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const defaultTypes = [REQUEST, SUCCESS, FAILURE] as const;
type DefaultTypes = typeof defaultTypes[number];

/**
 * PROFILE -> { REQUEST: 'PROFILE_REQUEST', SUCCESS: 'PROFILE_SUCCESS', FAILURE: 'PROFILE_FAILURE' }
 * "PROFILE", ["FOO", "BAR"] -> { FOO: 'PROFILE_FOO', BAR: 'PROFILE_BAR' }
 */
function createRequestTypes<K extends string = DefaultTypes>(base: string, types = defaultTypes as any): Record<K, string> {
  const res: Record<string, string> = {};
  types.forEach((type: string) => (res[type] = `${base}_${type}`));
  return res;
}

export const CHAT = createRequestTypes<'STORE' | 'STORE_MULTIPLE' | 'SEND' | 'SEND_REQUESTING' | 'SEND_REQUESTED' | 'SEND_SUCCESS'>('CHAT', [
  'STORE',
  'STORE_MULTIPLE',
  'SEND',
  'SEND_REQUESTING',
  'SEND_REQUESTED',
  'SEND_SUCCESS',
]);

export const APP = createRequestTypes<'TOGGLE_THEME' | 'GET_BASIC_DATE_REQUEST' | 'GET_BASIC_DATE_SUCCESS' | 'LOAD_APP_START' | 'LOAD_APP_DONE'>('APP', [
  'TOGGLE_THEME',
  'GET_BASIC_DATE_REQUEST',
  'GET_BASIC_DATE_SUCCESS',
  'LOAD_APP_START',
  'LOAD_APP_DONE',
]);
