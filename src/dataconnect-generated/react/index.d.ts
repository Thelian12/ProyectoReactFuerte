import { InsertConversationHistoryData, InsertConversationHistoryVariables, GetConversationTopicData, GetConversationTopicVariables, UpdateUserDisplayNameData, UpdateUserDisplayNameVariables, ListUserPhrasesData, ListUserPhrasesVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useInsertConversationHistory(options?: useDataConnectMutationOptions<InsertConversationHistoryData, FirebaseError, InsertConversationHistoryVariables>): UseDataConnectMutationResult<InsertConversationHistoryData, InsertConversationHistoryVariables>;
export function useInsertConversationHistory(dc: DataConnect, options?: useDataConnectMutationOptions<InsertConversationHistoryData, FirebaseError, InsertConversationHistoryVariables>): UseDataConnectMutationResult<InsertConversationHistoryData, InsertConversationHistoryVariables>;

export function useGetConversationTopic(vars: GetConversationTopicVariables, options?: useDataConnectQueryOptions<GetConversationTopicData>): UseDataConnectQueryResult<GetConversationTopicData, GetConversationTopicVariables>;
export function useGetConversationTopic(dc: DataConnect, vars: GetConversationTopicVariables, options?: useDataConnectQueryOptions<GetConversationTopicData>): UseDataConnectQueryResult<GetConversationTopicData, GetConversationTopicVariables>;

export function useUpdateUserDisplayName(options?: useDataConnectMutationOptions<UpdateUserDisplayNameData, FirebaseError, UpdateUserDisplayNameVariables>): UseDataConnectMutationResult<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;
export function useUpdateUserDisplayName(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserDisplayNameData, FirebaseError, UpdateUserDisplayNameVariables>): UseDataConnectMutationResult<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;

export function useListUserPhrases(vars: ListUserPhrasesVariables, options?: useDataConnectQueryOptions<ListUserPhrasesData>): UseDataConnectQueryResult<ListUserPhrasesData, ListUserPhrasesVariables>;
export function useListUserPhrases(dc: DataConnect, vars: ListUserPhrasesVariables, options?: useDataConnectQueryOptions<ListUserPhrasesData>): UseDataConnectQueryResult<ListUserPhrasesData, ListUserPhrasesVariables>;
