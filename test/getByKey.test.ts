import NOM from "../src";

describe("getByKey =>", () => {
  test("Returns null if keys are not exists", () => {
    const source = { a: 1 };
    const actual = NOM.getByKey(source, "", ".");
    const expected = null;
    expect(actual).toEqual(expected);
  });

  test("Returns null if not exists", () => {
    const source = { a: 1 };
    const actual = NOM.getByKey(source, "b");
    const expected = null;
    expect(actual).toEqual(expected);
  });

  test("Returns value if key exists", () => {
    const source = { a: 1 };
    const actual = NOM.getByKey(source, "a");
    const expected = 1;
    expect(actual).toEqual(expected);
  });
});

describe("getByKey 2 depth =>", () => {
  test("Returns null if not exists", () => {
    const source = { a: 1, b: { c: 2 } };
    const actual = NOM.getByKey(source, "b.d");
    const expected = null;
    expect(actual).toEqual(expected);
  });

  test("Returns value if key exists", () => {
    const source = { a: 1, b: { c: 2 } };
    const actual = NOM.getByKey(source, "b.c");
    const expected = 2;
    expect(actual).toEqual(expected);
  });

  test("Returns null if access deep nested inside", () => {
    const source = { a: 1, b: { c: 2 } };
    const actual = NOM.getByKey(source, "a.d.e");
    const expected = null;
    expect(actual).toEqual(expected);
  });

  test("Returns object if key exists", () => {
    const source = { a: { b: {} } };
    const actual = NOM.getByKey(source, "a.b");
    const expected = {};
    expect(actual).toEqual(expected);
  });

  test("Returns object if key exists", () => {
    const source = { a: { b: { c: 1 } } };
    const actual = NOM.getByKey(source, "a.b");
    const expected = { c: 1 };
    expect(actual).toEqual(expected);
  });
});

describe("getByKey more than 3 depth =>", () => {
  test("Returns null if key exists", () => {
    const source = { a: { b: { c: 1 } } };
    const actual = NOM.getByKey(source, "a.b.c.d");
    const expected = null;
    expect(actual).toEqual(expected);
  });

  test("Returns value if key exists", () => {
    const source = { a: { b: { c: 1 } } };
    const actual = NOM.getByKey(source, "a.b.c");
    const expected = 1;
    expect(actual).toEqual(expected);
  });

  test("Returns null if key exists", () => {
    const source = { a: { b: { c: 1 } } };
    const actual = NOM.getByKey(source, "a.b.c.d.e.f.g");
    const expected = null;
    expect(actual).toEqual(expected);
  });
});
