import { SvelteComponent } from "svelte";
import type { CollectionReference, DocumentData, Firestore, Query } from "firebase/firestore";
import { type CollectionWrappedData } from "../stores/firestore.js";
declare class __sveltets_Render<Data extends DocumentData> {
    props(): {
        ref: string | CollectionReference<Data, DocumentData> | Query<Data, DocumentData>;
        startWith?: CollectionWrappedData<Data>[] | undefined;
        children?: ((this: void, args_0: {
            data: [] | CollectionWrappedData<Data>[] | null;
            ref: CollectionReference<Data, DocumentData> | Query<Data, DocumentData> | null;
            count: number;
            firestore: Firestore | undefined;
        }) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {
            data: CollectionWrappedData<Data>[];
            ref: CollectionReference<Data, DocumentData> | Query<Data, DocumentData> | null;
            count: number;
            firestore?: Firestore | undefined;
        };
        loading: {};
    };
}
export type CollectionProps<Data extends DocumentData> = ReturnType<__sveltets_Render<Data>['props']>;
export type CollectionEvents<Data extends DocumentData> = ReturnType<__sveltets_Render<Data>['events']>;
export type CollectionSlots<Data extends DocumentData> = ReturnType<__sveltets_Render<Data>['slots']>;
export default class Collection<Data extends DocumentData> extends SvelteComponent<CollectionProps<Data>, CollectionEvents<Data>, CollectionSlots<Data>> {
}
export {};
