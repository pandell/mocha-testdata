// TypeScript typings for "mocha-testdata@1.1.3".

/** Fluent interface returned by "given". */
interface MochaGivenMethods3<P1, P2, P3> {
    /** Defines a test case (for use with BDD interface). */
    it(title: string, test: (p1: P1, p2: P2, p3: P3) => void): any;

    /** Defines a test case (for use with TDD & qunit interfaces). */
    test(title: string, test: (p1: P1, p2: P2, p3: P3) => void): any;
}

/** Fluent interface returned by "given". */
interface MochaGivenMethods2<P1, P2> {
    /** Defines a test case (for use with BDD interface). */
    it(title: string, test: (p1: P1, p2: P2) => void): any;

    /** Defines a test case (for use with TDD & qunit interfaces). */
    test(title: string, test: (p1: P1, p2: P2) => void): any;
}

/** Fluent interface returned by "given". */
interface MochaGivenMethods1<P1> {
    /** Defines a test case (for use with BDD interface). */
    it(title: string, test: (p1: P1) => void): any;

    /** Defines a test case (for use with TDD & qunit interfaces). */
    test(title: string, test: (p1: P1) => void): any;
}


/**
 * Defines set of test data for a test case.
 *
 * @param { Tuple | Tuple[] } first
 *     Values to pass to the test. If the arguments themselves are arrays,
 *     they will be passed as multiple arguments to the test function.
 *     If a data item is an object, the "description" property is used
 *     to construct the individual test name.
 *
 * @param { Tuple[] } params
 *     Additional values to pass to the test.
 *
 * @returns
 *     Fluent interface to define the test that will receive the test data.
 *
 * @example
 * given([1,2,3], [3,2,1]).it("Has invariant sum", (a,b,c) => assert.strictEqual(a+b+c, 6));
 */
export function given<P1, P2, P3>(first: { 0: P1, 1: P2, 2: P3 } | { 0: P1, 1: P2, 2: P3 }[], ...params: { 0: P1, 1: P2, 2: P3 }[]): MochaGivenMethods3<P1, P2, P3>;

/**
 * Defines set of test data for a test case.
 *
 * @param { Tuple | Tuple[] } first
 *     Values to pass to the test. If the arguments themselves are arrays,
 *     they will be passed as multiple arguments to the test function.
 *     If a data item is an object, the "description" property is used
 *     to construct the individual test name.
 *
 * @param { Tuple[] } params
 *     Additional values to pass to the test.
 *
 * @returns
 *     Fluent interface to define the test that will receive the test data.
 *
 * @example
 * given([1,2], [2,1]).it("Has invariant sum", (a,b) => assert.strictEqual(a+b, 3));
 */
export function given<P1, P2>(first: { 0: P1, 1: P2 } | { 0: P1, 1: P2 }[], ...params: { 0: P1, 1: P2 }[]): MochaGivenMethods2<P1, P2>;

/**
 * Defines set of test data for a test case.
 *
 * @param { any[] } params
 *     Values to pass to the test. If a data item is an object, the "description"
 *     property is used to construct the individual test name.
 *
 * @returns
 *     Fluent interface to define the test that will receive the test data.
 *
 * @example
 * const data = [1,2,3,4];
 * given(data).it("Is a number", value => assert(typeof value === "number"));
 */
export function given<P1>(params: P1[]): MochaGivenMethods1<P1>;

/**
 * Defines set of test data for a test case.
 *
 * @param { any[] } params
 *     Values to pass to the test. If a data item is an object, the "description"
 *     property is used to construct the individual test name.
 *
 * @returns
 *     Fluent interface to define the test that will receive the test data.
 *
 * @example
 * given(1,2,3,4).it("Is a number", value => assert(typeof value === "number"));
 */
export function given<P1>(...params: P1[]): MochaGivenMethods1<P1>;



/** Signature of Mocha "done" handler that must be called at the end of asynchronous calls chain in order for the test to pass. */
type DoneHandler = { (): void };

/** Fluent interface returned by "givenAsync". */
interface MochaGivenAsyncMethods3<P1, P2, P3> {
    /** Defines an async test case (for use with BDD interface). */
    it(title: string, test: (done: DoneHandler, p1: P1, p2: P2, p3: P3) => void): any;

    /** Defines an async test case (for use with TDD & qunit interfaces). */
    test(title: string, test: (done: DoneHandler, p1: P1, p2: P2, p3: P3) => void): any;
}

/** Fluent interface returned by "givenAsync". */
interface MochaGivenAsyncMethods2<P1, P2> {
    /** Defines an async test case (for use with BDD interface). */
    it(title: string, test: (done: DoneHandler, p1: P1, p2: P2) => void): any;

    /** Defines an async test case (for use with TDD & qunit interfaces). */
    test(title: string, test: (done: DoneHandler, p1: P1, p2: P2) => void): any;
}

/** Fluent interface returned by "givenAsync". */
interface MochaGivenAsyncMethods1<P1> {
    /** Defines an async test case (for use with BDD interface). */
    it(title: string, test: (done: DoneHandler, p1: P1) => void): any;

    /** Defines an async test case (for use with TDD & qunit interfaces). */
    test(title: string, test: (done: DoneHandler, p1: P1) => void): any;
}


/**
 * Defines set of test data for an asynchronous test case.
 *
 * @param { Tuple | Tuple[] } first
 *     Values to pass to the test. If the arguments themselves are arrays,
 *     they will be passed as multiple arguments to the test function.
 *     If a data item is an object, the "description" property is used
 *     to construct the individual test name.
 *
 * @param { Tuple[] } params
 *     Additional values to pass to the test.
 *
 * @returns
 *     Fluent interface to define the asynchronous test that will receive the test data.
 *
 * @example
 * givenAsync([1,2,3], [3,2,1]).it("Has invariant sum", (done,a,b,c) => { assert.strictEqual(a+b+c, 6); done(); });
 */
export function givenAsync<P1, P2, P3>(first: { 0: P1, 1: P2, 2: P3 } | { 0: P1, 1: P2, 2: P3 }[], ...params: { 0: P1, 1: P2, 2: P3 }[]): MochaGivenAsyncMethods3<P1, P2, P3>;

/**
 * Defines set of test data for an asynchronous test case.
 *
 * @param { Tuple | Tuple[] } first
 *     Values to pass to the test. If the arguments themselves are arrays,
 *     they will be passed as multiple arguments to the test function.
 *     If a data item is an object, the "description" property is used
 *     to construct the individual test name.
 *
 * @param { Tuple[] } params
 *     Additional values to pass to the test.
 *
 * @returns
 *     Fluent interface to define the asynchronous test that will receive the test data.
 *
 * @example
 * givenAsync([1,2], [2,1]).it("Has invariant sum", (done,a,b) => { assert.strictEqual(a+b, 3); done(); });
 */
export function givenAsync<P1, P2>(first: { 0: P1, 1: P2 } | { 0: P1, 1: P2 }[], ...params: { 0: P1, 1: P2 }[]): MochaGivenAsyncMethods2<P1, P2>;

/**
 * Defines set of test data for an asynchronous test case.
 *
 * @param { any[] } params
 *     Values to pass to the test. If a data item is an object, the "description"
 *     property is used to construct the individual test name.
 *
 * @returns
 *     Fluent interface to define the asynchronous test that will receive the test data.
 *
 * @example
 * const data = [1,2,3,4];
 * givenAsync(data).it("Is a number", (done,value) => { assert(typeof value === "number"); done(); });
 */
export function givenAsync<P1>(params: P1[]): MochaGivenAsyncMethods1<P1>;

/**
 * Defines set of test data for an asynchronous test case.
 *
 * @param { any[] } params
 *     Values to pass to the test. If a data item is an object, the "description"
 *     property is used to construct the individual test name.
 *
 * @returns
 *     Fluent interface to define the asynchronous test that will receive the test data.
 *
 * @example
 * givenAsync(1,2,3,4).it("Is a number", (done,value) => { assert(typeof value === "number"); done(); });
 */
export function givenAsync<P1>(...params: P1[]): MochaGivenAsyncMethods1<P1>;
