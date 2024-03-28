import { SvelteComponent } from "svelte";
import type { DocumentData, DocumentReference, Firestore } from "firebase/firestore";
declare class __sveltets_Render<Data extends DocumentData> {
    props(): {
        ref: string | DocumentReference<Data, DocumentData>;
        startWith?: Data | undefined;
        children?: ((this: void, args_0: {
            data: Data | null;
            ref: DocumentReference<Data, DocumentData> | null;
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
            data: Data;
            ref: DocumentReference<Data, DocumentData> | null;
            firestore?: Firestore | undefined;
        };
        loading: {};
    };
}
export type DocProps<Data extends DocumentData> = ReturnType<__sveltets_Render<Data>['props']>;
export type DocEvents<Data extends DocumentData> = ReturnType<__sveltets_Render<Data>['events']>;
export type DocSlots<Data extends DocumentData> = ReturnType<__sveltets_Render<Data>['slots']>;
export default class Doc<Data extends DocumentData> extends SvelteComponent<DocProps<Data>, DocEvents<Data>, DocSlots<Data>> {
}
export {};
