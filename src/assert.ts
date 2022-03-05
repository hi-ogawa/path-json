export function ok(value: unknown): asserts value {
  if (!value) {
    throw new Error();
  }
}

export function type<T>(_: unknown): asserts _ is T {}
