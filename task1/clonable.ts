//https://medium.com/javascript-in-plain-english/deep-clone-an-object-and-preserve-its-type-with-typescript-d488c35e5574
//https://gist.github.com/erikvullings/ada7af09925082cbb89f40ed962d475e
export class Cloneable {
    public static deepCopy<T>(source: T): T {
        return Array.isArray(source)
            ? source.map(item => this.deepCopy(item))
            : source instanceof Date
                ? new Date(source.getTime())
                : source && typeof source === 'object'
                    ? Object.getOwnPropertyNames(source).reduce((copy, prop) => {
                        Object.defineProperty(copy, prop, Object.getOwnPropertyDescriptor(source, prop));
                        copy[prop] = this.deepCopy(source[prop]);
                        return copy;
                    }, Object.create(Object.getPrototypeOf(source)))
                    : source as T;
    }
}