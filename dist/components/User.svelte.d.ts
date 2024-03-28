import { SvelteComponent } from "svelte";
import type { User } from "firebase/auth";
declare const __propDef: {
    props: {
        children?: ((this: void, args_0: {
            user: User | null;
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
        };
        signedOut: {};
    };
};
export type UserProps = typeof __propDef.props;
export type UserEvents = typeof __propDef.events;
export type UserSlots = typeof __propDef.slots;
export default class User extends SvelteComponent<UserProps, UserEvents, UserSlots> {
}
export {};
