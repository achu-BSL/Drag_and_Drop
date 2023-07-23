// autobind decorator
export function autobind(_, _2, descriptor) {
    const orginalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = orginalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
