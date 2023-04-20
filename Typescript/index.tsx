export const removeNilEntries = (obj: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(obj).filter(
      ([, value]) => value !== undefined && value !== null
    )
  );

const data = {
  prop1: "hello",
  prop2: undefined,
  prop3: null,
  prop4: {
    innerProp: null,
    innerProp2: "world",
  },
};

function removeEmpty(data) {
  //transform properties into key-values pairs and filter all the empty-values
  const entries = Object.entries(data).filter(([, value]) => value != null);

  //map through all the remaining properties and check if the value is an object.
  //if value is object, use recursion to remove empty properties
  const clean = entries.map(([key, v]) => {
    const value = typeof v == "object" ? removeEmpty(v) : v;
    return [key, value];
  });

  //transform the key-value pairs back to an object.
  return Object.fromEntries(clean);
}

const clean = removeEmpty(data);
