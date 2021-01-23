import nestedObjectMutation from "../src";

describe("removeNullish 1 depth =>", () => {
  test("Returns same empty object", () => {
    expect(nestedObjectMutation.removeNullish({})).toEqual({});
  });

  test("Returns empty object with one null value", () => {
    expect(nestedObjectMutation.removeNullish({ a: null })).toEqual({});
  });

  test("Returns empty object with one undefined value", () => {
    expect(nestedObjectMutation.removeNullish({ a: undefined })).toEqual({});
  });

  test("Returns object only nullish", () => {
    expect(
      nestedObjectMutation.removeNullish({ a: undefined, b: 1, c: "string" })
    ).toEqual({ b: 1, c: "string" });
  });
});

describe("removeNullish 2 depth =>", () => {
  test("Returns empty object with one null value", () => {
    expect(nestedObjectMutation.removeNullish({ a: { b: null } })).toEqual({
      a: {}
    });
  });

  test("Returns empty object with one undefined value", () => {
    expect(
      nestedObjectMutation.removeNullish({ a: { b: undefined } })
    ).toEqual({ a: {} });
  });

  test("Returns empty object with undefined and null both", () => {
    expect(
      nestedObjectMutation.removeNullish({ a: { b: undefined, c: null } })
    ).toEqual({ a: {} });
  });

  test("Returns empty object with complex keys", () => {
    const source = {
      a: null,
      b: {
        c: undefined,
        d: null
      },
      e: "Hello World"
    };
    expect(nestedObjectMutation.removeNullish(source)).toEqual({
      b: {},
      e: "Hello World"
    });
  });
});

describe("removeNullish 3 depth =>", () => {
  test("Returns empty object with deep nested null", () => {
    const source = { a: { b: { C: null } } };
    expect(nestedObjectMutation.removeNullish(source)).toEqual({
      a: { b: {} }
    });
  });

  test("Returns empty object with deep nested undefined", () => {
    const source = { a: { b: { C: undefined } } };
    expect(nestedObjectMutation.removeNullish(source)).toEqual({
      a: { b: {} }
    });
  });

  test("Returns empty object with complex keys", () => {
    const complex = {
      a: null,
      b: {
        c: undefined,
        d: null
      },
      e: {
        f: {
          g: null
        }
      }
    };
    const expectedResult = { b: {}, e: { f: {} } };
    expect(nestedObjectMutation.removeNullish(complex)).toEqual(expectedResult);
  });
});
