// TypeScript typings for "mocha-testdata@1.1.3".

interface MochaGiven {
    <P1, P2, P3>(...params: { 0: P1, 1: P2, 2: P3 }[]): MochaGivenMethods3<P1, P2, P3>;
    <P1, P2>(...params: { 0: P1, 1: P2 }[]): MochaGivenMethods2<P1, P2>;
    <P1>(...params: P1[]): MochaGivenMethods1<P1>;
}

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

declare module "mocha-testdata" {
    const given: MochaGiven;
    export = given;
}
