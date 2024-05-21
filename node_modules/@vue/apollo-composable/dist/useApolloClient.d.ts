import { ApolloClient } from '@apollo/client/core/index.js';
export declare const DefaultApolloClient: unique symbol;
export declare const ApolloClients: unique symbol;
type ClientId = string;
type ClientDict<T> = Record<ClientId, ApolloClient<T>>;
type ResolveClient<TCacheShape, TReturn = ApolloClient<TCacheShape>> = (clientId?: ClientId) => TReturn;
export interface UseApolloClientReturn<TCacheShape> {
    resolveClient: ResolveClient<TCacheShape>;
    readonly client: ApolloClient<TCacheShape>;
}
export declare function useApolloClient<TCacheShape = any>(clientId?: ClientId): UseApolloClientReturn<TCacheShape>;
export declare function provideApolloClient<TCacheShape = any>(client: ApolloClient<TCacheShape>): <TFnResult = any>(fn: () => TFnResult) => TFnResult;
export declare function provideApolloClients<TCacheShape = any>(clients: ClientDict<TCacheShape>): <TFnResult = any>(fn: () => TFnResult) => TFnResult;
export {};
