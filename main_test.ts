import * as assertsTs from "https://deno.land/std@0.224.0/testing/asserts.ts";
import * as mainTs from "./main.ts";

Deno.test("rotateText with default shift", () => {
  assertsTs.assertEquals(mainTs.rotateText("ABC"), "DEF");
});

Deno.test("rotateText with custom positive shift", () => {
  assertsTs.assertEquals(mainTs.rotateText("ABC", 5), "FGH");
});

Deno.test("rotateText with custom negative shift", () => {
  assertsTs.assertEquals(mainTs.rotateText("DEF", -3), "ABC");
});

Deno.test("rotateText with non-alphabetic characters", () => {
  assertsTs.assertEquals(mainTs.rotateText("A!B@C#"), "D$E%F^");
});
