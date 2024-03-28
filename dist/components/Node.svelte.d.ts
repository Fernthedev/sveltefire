import { SvelteComponent } from "svelte";
import type { DatabaseReference, Database } from "firebase/database";
declare const __propDef: {
    props: {
        path: string;
        startWith?: any;
        children?: ((this: void, args_0: {
            data: any;
            ref: DatabaseReference;
            rtdb: Database | undefined;
        }) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            data: any;
            ref: DatabaseReference | null;
            rtdb?: Database | undefined;
        };
        loading: {};
    };
};
export type NodeProps = typeof __propDef.props;
export type NodeEvents = typeof __propDef.events;
export type NodeSlots = typeof __propDef.slots;
export default class Node extends SvelteComponent<NodeProps, NodeEvents, NodeSlots> {
}
export {};
