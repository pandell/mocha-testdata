// TypeScript typings for "mocha-testdata@1.1.3".

declare module "mocha-testdata" {

    // for synchronous tests

    interface MochaGivenMethods3<P1, P2, P3> {
        it(title: string, test: (p1: P1, p2: P2, p3: P3) => void): any;
        test(title: string, test: (p1: P1, p2: P2, p3: P3) => void): any;
    }

    interface MochaGivenMethods2<P1, P2> {
        it(title: string, test: (p1: P1, p2: P2) => void): any;
        test(title: string, test: (p1: P1, p2: P2) => void): any;
    }

    interface MochaGivenMethods1<P1> {
        it(title: string, test: (p1: P1) => void): any;
        test(title: string, test: (p1: P1) => void): any;
    }

    export function given<P1, P2, P3>(first: { 0: P1, 1: P2, 2: P3 } | { 0: P1, 1: P2, 2: P3 }[], ...params: { 0: P1, 1: P2, 2: P3 }[]): MochaGivenMethods3<P1, P2, P3>;
    export function given<P1, P2>(first: { 0: P1, 1: P2 } | { 0: P1, 1: P2 }[], ...params: { 0: P1, 1: P2 }[]): MochaGivenMethods2<P1, P2>;
    export function given<P1>(params: P1[]): MochaGivenMethods1<P1>;
    export function given<P1>(...params: P1[]): MochaGivenMethods1<P1>;


    // for asynchronous tests

    type DoneHandler = { (): void };

    interface MochaGivenAsyncMethods3<P1, P2, P3> {
        it(title: string, test: (done: DoneHandler, p1: P1, p2: P2, p3: P3) => void): any;
        test(title: string, test: (done: DoneHandler, p1: P1, p2: P2, p3: P3) => void): any;
    }

    interface MochaGivenAsyncMethods2<P1, P2> {
        it(title: string, test: (done: DoneHandler, p1: P1, p2: P2) => void): any;
        test(title: string, test: (done: DoneHandler, p1: P1, p2: P2) => void): any;
    }

    interface MochaGivenAsyncMethods1<P1> {
        it(title: string, test: (done: DoneHandler, p1: P1) => void): any;
        test(title: string, test: (done: DoneHandler, p1: P1) => void): any;
    }

    export function givenAsync<P1, P2, P3>(first: { 0: P1, 1: P2, 2: P3 } | { 0: P1, 1: P2, 2: P3 }[], ...params: { 0: P1, 1: P2, 2: P3 }[]): MochaGivenAsyncMethods3<P1, P2, P3>;
    export function givenAsync<P1, P2>(first: { 0: P1, 1: P2 } | { 0: P1, 1: P2 }[], ...params: { 0: P1, 1: P2 }[]): MochaGivenAsyncMethods2<P1, P2>;
    export function givenAsync<P1>(params: P1[]): MochaGivenAsyncMethods1<P1>;
    export function givenAsync<P1>(...params: P1[]): MochaGivenAsyncMethods1<P1>;

}
