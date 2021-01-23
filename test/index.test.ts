import nestedObjectMutation from "../src/";

describe("removeNullish 1 depth =>", () => {
  test("Returns same empty object", () => {
    expect(nestedObjectMutation.removeNullish({})).toEqual({})
  });

  test("Returns empty object with one null value", () => {
    expect(nestedObjectMutation.removeNullish({ a: null })).toEqual({})
  });

  test("Returns empty object with one undefined value", () => {
    expect(nestedObjectMutation.removeNullish({ a: undefined })).toEqual({})
  });

  test("Returns object only nullish", () => {
    expect(nestedObjectMutation.removeNullish({ a: undefined, b: 1, c: 'string' })).toEqual({ b: 1, c: 'string' })
  });
});


describe("removeNullish 2 depth =>", () => {
  test("Returns empty object with one null value", () => {
    expect(nestedObjectMutation.removeNullish({ a: { b: null } })).toEqual({ a: {} })
  });
});
