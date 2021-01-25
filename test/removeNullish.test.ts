import NOM from "../src";

describe("removeNullish 1 depth =>", () => {
  test("Returns same empty object", () => {
    expect(NOM.removeNullish({})).toEqual({});
  });

  test("Returns empty object with one null value", () => {
    expect(NOM.removeNullish({ a: null })).toEqual({});
  });

  test("Returns empty object with one undefined value", () => {
    expect(NOM.removeNullish({ a: undefined })).toEqual({});
  });

  test("Returns object only nullish", () => {
    const actual = NOM.removeNullish({ a: undefined, b: 1, c: "string" });
    const expected = { b: 1, c: "string" };
    expect(actual).toEqual(expected);
  });
});

describe("removeNullish 2 depth =>", () => {
  test("Returns empty object with one null value", () => {
    expect(NOM.removeNullish({ a: { b: null } })).toEqual({
      a: {}
    });
  });

  test("Returns empty object with one undefined value", () => {
    expect(NOM.removeNullish({ a: { b: undefined } })).toEqual({ a: {} });
  });

  test("Returns empty object with undefined and null both", () => {
    const actual = NOM.removeNullish({ a: { b: undefined, c: null } });
    const expected = { a: {} };
    expect(actual).toEqual(expected);
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
    expect(NOM.removeNullish(source)).toEqual({
      b: {},
      e: "Hello World"
    });
  });
});

describe("removeNullish 3 depth =>", () => {
  test("Returns empty object with deep nested null", () => {
    const source = { a: { b: { C: null } } };
    expect(NOM.removeNullish(source)).toEqual({
      a: { b: {} }
    });
  });

  test("Returns empty object with deep nested undefined", () => {
    const source = { a: { b: { C: undefined } } };
    expect(NOM.removeNullish(source)).toEqual({
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
    expect(NOM.removeNullish(complex)).toEqual(expectedResult);
  });
});
