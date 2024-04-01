import type { Query, CollectionReference, DocumentReference, Firestore } from "firebase/firestore";
interface DocStore<T> {
    subscribe: (cb: (value: T | null) => void) => void;
    ref: DocumentReference<T> | null;
    id: string;
}
/**
 * @param  {Firestore} firestore firebase firestore instance
 * @param  {string|DocumentReference} ref document path or reference
 * @param  {T} startWith optional default data
 * @returns a store with realtime updates on document data
 */
export declare function docStore<T = any>(firestore: Firestore, ref: string | DocumentReference<T>, startWith?: T): DocStore<T>;
export type CollectionWrappedData<T> = T & {
    id: string;
    ref: DocumentReference<T>;
};
interface CollectionStore<T> {
    subscribe: (cb: (value: CollectionWrappedData<T>[] | [] | null) => void) => void;
    ref: CollectionReference<T> | Query<T> | null;
}
/**
 * @param  {Firestore} firestore firebase firestore instance
 * @param  {string|Query|CollectionReference} ref collection path, reference, or query
 * @param  {[]} startWith optional default data
 * @returns a store with realtime updates on collection data
 */
export declare function collectionStore<T>(firestore: Firestore, ref: string | Query<T> | CollectionReference<T>, startWith?: CollectionWrappedData<T>[]): CollectionStore<T>;
export {};