# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetConversationTopic*](#getconversationtopic)
  - [*ListUserPhrases*](#listuserphrases)
- [**Mutations**](#mutations)
  - [*InsertConversationHistory*](#insertconversationhistory)
  - [*UpdateUserDisplayName*](#updateuserdisplayname)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetConversationTopic
You can execute the `GetConversationTopic` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getConversationTopic(vars: GetConversationTopicVariables): QueryPromise<GetConversationTopicData, GetConversationTopicVariables>;

interface GetConversationTopicRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetConversationTopicVariables): QueryRef<GetConversationTopicData, GetConversationTopicVariables>;
}
export const getConversationTopicRef: GetConversationTopicRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getConversationTopic(dc: DataConnect, vars: GetConversationTopicVariables): QueryPromise<GetConversationTopicData, GetConversationTopicVariables>;

interface GetConversationTopicRef {
  ...
  (dc: DataConnect, vars: GetConversationTopicVariables): QueryRef<GetConversationTopicData, GetConversationTopicVariables>;
}
export const getConversationTopicRef: GetConversationTopicRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getConversationTopicRef:
```typescript
const name = getConversationTopicRef.operationName;
console.log(name);
```

### Variables
The `GetConversationTopic` query requires an argument of type `GetConversationTopicVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetConversationTopicVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetConversationTopic` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetConversationTopicData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetConversationTopicData {
  conversationTopic?: {
    id: UUIDString;
    name: string;
    description: string;
    difficultyLevel?: string | null;
  } & ConversationTopic_Key;
}
```
### Using `GetConversationTopic`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getConversationTopic, GetConversationTopicVariables } from '@dataconnect/generated';

// The `GetConversationTopic` query requires an argument of type `GetConversationTopicVariables`:
const getConversationTopicVars: GetConversationTopicVariables = {
  id: ..., 
};

// Call the `getConversationTopic()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getConversationTopic(getConversationTopicVars);
// Variables can be defined inline as well.
const { data } = await getConversationTopic({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getConversationTopic(dataConnect, getConversationTopicVars);

console.log(data.conversationTopic);

// Or, you can use the `Promise` API.
getConversationTopic(getConversationTopicVars).then((response) => {
  const data = response.data;
  console.log(data.conversationTopic);
});
```

### Using `GetConversationTopic`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getConversationTopicRef, GetConversationTopicVariables } from '@dataconnect/generated';

// The `GetConversationTopic` query requires an argument of type `GetConversationTopicVariables`:
const getConversationTopicVars: GetConversationTopicVariables = {
  id: ..., 
};

// Call the `getConversationTopicRef()` function to get a reference to the query.
const ref = getConversationTopicRef(getConversationTopicVars);
// Variables can be defined inline as well.
const ref = getConversationTopicRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getConversationTopicRef(dataConnect, getConversationTopicVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.conversationTopic);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.conversationTopic);
});
```

## ListUserPhrases
You can execute the `ListUserPhrases` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listUserPhrases(vars: ListUserPhrasesVariables): QueryPromise<ListUserPhrasesData, ListUserPhrasesVariables>;

interface ListUserPhrasesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListUserPhrasesVariables): QueryRef<ListUserPhrasesData, ListUserPhrasesVariables>;
}
export const listUserPhrasesRef: ListUserPhrasesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listUserPhrases(dc: DataConnect, vars: ListUserPhrasesVariables): QueryPromise<ListUserPhrasesData, ListUserPhrasesVariables>;

interface ListUserPhrasesRef {
  ...
  (dc: DataConnect, vars: ListUserPhrasesVariables): QueryRef<ListUserPhrasesData, ListUserPhrasesVariables>;
}
export const listUserPhrasesRef: ListUserPhrasesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listUserPhrasesRef:
```typescript
const name = listUserPhrasesRef.operationName;
console.log(name);
```

### Variables
The `ListUserPhrases` query requires an argument of type `ListUserPhrasesVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListUserPhrasesVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `ListUserPhrases` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListUserPhrasesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListUserPhrasesData {
  userPhrases: ({
    id: UUIDString;
    phraseText: string;
    translation?: string | null;
    notes?: string | null;
  } & UserPhrase_Key)[];
}
```
### Using `ListUserPhrases`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listUserPhrases, ListUserPhrasesVariables } from '@dataconnect/generated';

// The `ListUserPhrases` query requires an argument of type `ListUserPhrasesVariables`:
const listUserPhrasesVars: ListUserPhrasesVariables = {
  userId: ..., 
};

// Call the `listUserPhrases()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUserPhrases(listUserPhrasesVars);
// Variables can be defined inline as well.
const { data } = await listUserPhrases({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listUserPhrases(dataConnect, listUserPhrasesVars);

console.log(data.userPhrases);

// Or, you can use the `Promise` API.
listUserPhrases(listUserPhrasesVars).then((response) => {
  const data = response.data;
  console.log(data.userPhrases);
});
```

### Using `ListUserPhrases`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUserPhrasesRef, ListUserPhrasesVariables } from '@dataconnect/generated';

// The `ListUserPhrases` query requires an argument of type `ListUserPhrasesVariables`:
const listUserPhrasesVars: ListUserPhrasesVariables = {
  userId: ..., 
};

// Call the `listUserPhrasesRef()` function to get a reference to the query.
const ref = listUserPhrasesRef(listUserPhrasesVars);
// Variables can be defined inline as well.
const ref = listUserPhrasesRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listUserPhrasesRef(dataConnect, listUserPhrasesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.userPhrases);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.userPhrases);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## InsertConversationHistory
You can execute the `InsertConversationHistory` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
insertConversationHistory(vars: InsertConversationHistoryVariables): MutationPromise<InsertConversationHistoryData, InsertConversationHistoryVariables>;

interface InsertConversationHistoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: InsertConversationHistoryVariables): MutationRef<InsertConversationHistoryData, InsertConversationHistoryVariables>;
}
export const insertConversationHistoryRef: InsertConversationHistoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertConversationHistory(dc: DataConnect, vars: InsertConversationHistoryVariables): MutationPromise<InsertConversationHistoryData, InsertConversationHistoryVariables>;

interface InsertConversationHistoryRef {
  ...
  (dc: DataConnect, vars: InsertConversationHistoryVariables): MutationRef<InsertConversationHistoryData, InsertConversationHistoryVariables>;
}
export const insertConversationHistoryRef: InsertConversationHistoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertConversationHistoryRef:
```typescript
const name = insertConversationHistoryRef.operationName;
console.log(name);
```

### Variables
The `InsertConversationHistory` mutation requires an argument of type `InsertConversationHistoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface InsertConversationHistoryVariables {
  topicId: UUIDString;
  userId: UUIDString;
  createdAt: TimestampString;
  duration?: number | null;
  score?: number | null;
}
```
### Return Type
Recall that executing the `InsertConversationHistory` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertConversationHistoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertConversationHistoryData {
  conversationHistory_insert: ConversationHistory_Key;
}
```
### Using `InsertConversationHistory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertConversationHistory, InsertConversationHistoryVariables } from '@dataconnect/generated';

// The `InsertConversationHistory` mutation requires an argument of type `InsertConversationHistoryVariables`:
const insertConversationHistoryVars: InsertConversationHistoryVariables = {
  topicId: ..., 
  userId: ..., 
  createdAt: ..., 
  duration: ..., // optional
  score: ..., // optional
};

// Call the `insertConversationHistory()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertConversationHistory(insertConversationHistoryVars);
// Variables can be defined inline as well.
const { data } = await insertConversationHistory({ topicId: ..., userId: ..., createdAt: ..., duration: ..., score: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertConversationHistory(dataConnect, insertConversationHistoryVars);

console.log(data.conversationHistory_insert);

// Or, you can use the `Promise` API.
insertConversationHistory(insertConversationHistoryVars).then((response) => {
  const data = response.data;
  console.log(data.conversationHistory_insert);
});
```

### Using `InsertConversationHistory`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertConversationHistoryRef, InsertConversationHistoryVariables } from '@dataconnect/generated';

// The `InsertConversationHistory` mutation requires an argument of type `InsertConversationHistoryVariables`:
const insertConversationHistoryVars: InsertConversationHistoryVariables = {
  topicId: ..., 
  userId: ..., 
  createdAt: ..., 
  duration: ..., // optional
  score: ..., // optional
};

// Call the `insertConversationHistoryRef()` function to get a reference to the mutation.
const ref = insertConversationHistoryRef(insertConversationHistoryVars);
// Variables can be defined inline as well.
const ref = insertConversationHistoryRef({ topicId: ..., userId: ..., createdAt: ..., duration: ..., score: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertConversationHistoryRef(dataConnect, insertConversationHistoryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.conversationHistory_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.conversationHistory_insert);
});
```

## UpdateUserDisplayName
You can execute the `UpdateUserDisplayName` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUserDisplayName(vars: UpdateUserDisplayNameVariables): MutationPromise<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;

interface UpdateUserDisplayNameRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserDisplayNameVariables): MutationRef<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;
}
export const updateUserDisplayNameRef: UpdateUserDisplayNameRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUserDisplayName(dc: DataConnect, vars: UpdateUserDisplayNameVariables): MutationPromise<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;

interface UpdateUserDisplayNameRef {
  ...
  (dc: DataConnect, vars: UpdateUserDisplayNameVariables): MutationRef<UpdateUserDisplayNameData, UpdateUserDisplayNameVariables>;
}
export const updateUserDisplayNameRef: UpdateUserDisplayNameRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserDisplayNameRef:
```typescript
const name = updateUserDisplayNameRef.operationName;
console.log(name);
```

### Variables
The `UpdateUserDisplayName` mutation requires an argument of type `UpdateUserDisplayNameVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserDisplayNameVariables {
  id: UUIDString;
  displayName: string;
}
```
### Return Type
Recall that executing the `UpdateUserDisplayName` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserDisplayNameData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserDisplayNameData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUserDisplayName`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUserDisplayName, UpdateUserDisplayNameVariables } from '@dataconnect/generated';

// The `UpdateUserDisplayName` mutation requires an argument of type `UpdateUserDisplayNameVariables`:
const updateUserDisplayNameVars: UpdateUserDisplayNameVariables = {
  id: ..., 
  displayName: ..., 
};

// Call the `updateUserDisplayName()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUserDisplayName(updateUserDisplayNameVars);
// Variables can be defined inline as well.
const { data } = await updateUserDisplayName({ id: ..., displayName: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUserDisplayName(dataConnect, updateUserDisplayNameVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUserDisplayName(updateUserDisplayNameVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUserDisplayName`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserDisplayNameRef, UpdateUserDisplayNameVariables } from '@dataconnect/generated';

// The `UpdateUserDisplayName` mutation requires an argument of type `UpdateUserDisplayNameVariables`:
const updateUserDisplayNameVars: UpdateUserDisplayNameVariables = {
  id: ..., 
  displayName: ..., 
};

// Call the `updateUserDisplayNameRef()` function to get a reference to the mutation.
const ref = updateUserDisplayNameRef(updateUserDisplayNameVars);
// Variables can be defined inline as well.
const ref = updateUserDisplayNameRef({ id: ..., displayName: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserDisplayNameRef(dataConnect, updateUserDisplayNameVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

