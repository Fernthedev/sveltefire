import { SvelteComponent } from "svelte";
import { signOut, type User, type Auth } from "firebase/auth";
declare const __propDef: {
    props: {
        children?: ((this: void, args_0: {
            user: User | null;
            auth: Auth;
            signOut: () => Promise<void>;
        }) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            user: User;
            auth: Auth;
            signOut: () => Promise<void>;
        };
    };
};
export type SignedInProps = typeof __propDef.props;
export type SignedInEvents = typeof __propDef.events;
export type SignedInSlots = typeof __propDef.slots;
export default class SignedIn extends SvelteComponent<SignedInProps, SignedInEvents, SignedInSlots> {
}
export {};
