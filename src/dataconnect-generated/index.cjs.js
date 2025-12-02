const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'proyectoreactfuerte',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const insertConversationHistoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'InsertConversationHistory', inputVars);
}
insertConversationHistoryRef.operationName = 'InsertConversationHistory';
exports.insertConversationHistoryRef = insertConversationHistoryRef;

exports.insertConversationHistory = function insertConversationHistory(dcOrVars, vars) {
  return executeMutation(insertConversationHistoryRef(dcOrVars, vars));
};

const getConversationTopicRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetConversationTopic', inputVars);
}
getConversationTopicRef.operationName = 'GetConversationTopic';
exports.getConversationTopicRef = getConversationTopicRef;

exports.getConversationTopic = function getConversationTopic(dcOrVars, vars) {
  return executeQuery(getConversationTopicRef(dcOrVars, vars));
};

const updateUserDisplayNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUserDisplayName', inputVars);
}
updateUserDisplayNameRef.operationName = 'UpdateUserDisplayName';
exports.updateUserDisplayNameRef = updateUserDisplayNameRef;

exports.updateUserDisplayName = function updateUserDisplayName(dcOrVars, vars) {
  return executeMutation(updateUserDisplayNameRef(dcOrVars, vars));
};

const listUserPhrasesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListUserPhrases', inputVars);
}
listUserPhrasesRef.operationName = 'ListUserPhrases';
exports.listUserPhrasesRef = listUserPhrasesRef;

exports.listUserPhrases = function listUserPhrases(dcOrVars, vars) {
  return executeQuery(listUserPhrasesRef(dcOrVars, vars));
};
