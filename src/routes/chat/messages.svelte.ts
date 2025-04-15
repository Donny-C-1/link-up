type shared = {
    messages: string[];
}

export const shared: shared = $state({
    messages: []
});