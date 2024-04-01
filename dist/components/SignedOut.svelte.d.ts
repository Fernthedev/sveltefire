import { SvelteComponent } from "svelte";
import type { Auth } from 'firebase/auth';
declare const __propDef: {
    props: {
        children?: ((this: void, args_0: {
            auth: Auth;
        }) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            auth: Auth;
        };
    };
};
export type SignedOutProps = typeof __propDef.props;
export type SignedOutEvents = typeof __propDef.events;
export type SignedOutSlots = typeof __propDef.slots;
export default class SignedOut extends SvelteComponent<SignedOutProps, SignedOutEvents, SignedOutSlots> {
}
export {};