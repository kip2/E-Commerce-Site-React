import { expect, it } from "vitest";
import add from "./add";

it("add test", () => {
    expect(add(1)).toBe(2)
    expect(add(2)).toBe(4)
    expect(add(3)).toBe(6)
});