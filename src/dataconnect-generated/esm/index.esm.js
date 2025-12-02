import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'proyectoreactfuerte',
  location: 'us-east4'
};

export const insertConversationHistoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'InsertConversationHistory', inputVars);
}
insertConversationHistoryRef.operationName = 'InsertConversationHistory';

export function insertConversationHistory(dcOrVars, vars) {
  return executeMutation(insertConversationHistoryRef(dcOrVars, vars));
}

export const getConversationTopicRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetConversationTopic', inputVars);
}
getConversationTopicRef.operationName = 'GetConversationTopic';

export function getConversationTopic(dcOrVars, vars) {
  return executeQuery(getConversationTopicRef(dcOrVars, vars));
}

export const updateUserDisplayNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUserDisplayName', inputVars);
}
updateUserDisplayNameRef.operationName = 'UpdateUserDisplayName';

export function updateUserDisplayName(dcOrVars, vars) {
  return executeMutation(updateUserDisplayNameRef(dcOrVars, vars));
}

export const listUserPhrasesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListUserPhrases', inputVars);
}
listUserPhrasesRef.operationName = 'ListUserPhrases';

export function listUserPhrases(dcOrVars, vars) {
  return executeQuery(listUserPhrasesRef(dcOrVars, vars));
}

