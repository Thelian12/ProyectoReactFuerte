import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface ConversationHistory_Key {
  id: UUIDString;
  __typename?: 'ConversationHistory_Key';
}

export interface ConversationTopic_Key {
  id: UUIDString;
  __typename?: 'ConversationTopic_Key';
}

export interface GetConversationTopicData {
  conversationTopic?: {
    id: UUIDString;
    name: string;
    description: string;
    difficultyLevel?: string | null;
  } & ConversationTopic_Key;
}

export interface GetConversationTopicVariables {
  id: UUIDString;
}

export interface InsertConversationHistoryData {
  conversationHistory_insert: ConversationHistory_Key;
}

export interface InsertConversationHistoryVariables {
  topicId: UUIDString;
  userId: UUIDString;
  createdAt: TimestampString;
  duration?: number | null;
  score?: number | null;
}

export interface Language_Key {
  id: UUIDString;
  __typename?: 'Language_Key';
}

export interface ListUserPhrasesData {
  userPhrases: ({
    id: UUIDString;
    phraseText: string;
    translation?: string | null;
    notes?: string | null;
  } & UserPhrase_Key)[];
}

export interface ListUserPhrasesVariables {
  userId: UUIDString;
}

export interface UpdateUserDisplayNameData {
  user_update?: User_Key | null;
}

export interface UpdateUserDisplayNameVariables {
  id: UUIDString;
  displayName: string;
}

export interface UserPhrase_Key {
  id: UUIDString;
  __typename?: 'UserPhrase_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface InsertConversationHistoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: InsertConversationHistoryVariables): MutationRef<InsertConversationHistoryData, InsertConversationHistoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: InsertConversationHistoryVariables): MutationRef<InsertConversationHistoryData, InsertConversationHistoryVariables>;
  operationName: string;
}
export const insertConversationHistoryRef: InsertConversationHistoryRef;

export function insertConversationHistory(vars: InsertConversationHistoryVariables): MutationPromise<InsertConversationHistoryData, InsertConversationHistoryVariables>;
export function insertConversationHistory(dc: DataConnect, vars: InsertConversationHistoryVariables): MutationPromise<InsertConversationHistoryData, InsertConversationHistoryVariables>;

interface GetConversationTopicRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetConversationTopicVariables): QueryRef<GetConversationTopicData, GetConversationTopicVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetConversationTopicVariables): QueryRef<GetConversationTopicData, GetConversationTopicVariables>;
  operationName: string;
}
export const getConversationTopicRef: GetConversationTopicRef;

export function getConversationTopic(vars: GetConversationTopicVariables): QueryPromise<GetConversationTopicData, GetConversationTopicVariables>;
export function getConversationTopic(dc: DataConnect, vars: GetConversationTopicVariables): QueryPromise<GetConversationTopicData, GetConversationTopicVariables>;

interface UpdateUserDisplayNameRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserDisplayNameVariables): MutationRef<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserDisplayNameVariables): MutationRef<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;
  operationName: string;
}
export const updateUserDisplayNameRef: UpdateUserDisplayNameRef;

export function updateUserDisplayName(vars: UpdateUserDisplayNameVariables): MutationPromise<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;
export function updateUserDisplayName(dc: DataConnect, vars: UpdateUserDisplayNameVariables): MutationPromise<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;

interface ListUserPhrasesRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListUserPhrasesVariables): QueryRef<ListUserPhrasesData, ListUserPhrasesVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListUserPhrasesVariables): QueryRef<ListUserPhrasesData, ListUserPhrasesVariables>;
  operationName: string;
}
export const listUserPhrasesRef: ListUserPhrasesRef;

export function listUserPhrases(vars: ListUserPhrasesVariables): QueryPromise<ListUserPhrasesData, ListUserPhrasesVariables>;
export function listUserPhrases(dc: DataConnect, vars: ListUserPhrasesVariables): QueryPromise<ListUserPhrasesData, ListUserPhrasesVariables>;

