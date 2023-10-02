import { describe, expect, test } from "bun:test";
import { getDevice } from "../src/tracker";
import userAgents from "./userAgents.json";

describe("tracker", () => {
  describe("getDevice", () => {
    test("it should return android", () => {
      userAgents["Android User Agents with Client Hints Support"].forEach((ele) => {
        expect(getDevice(ele.user_agent)).toBe("Android");
      });
      userAgents["Google Pixel"].forEach((ele) => {
        expect(getDevice(ele.user_agent)).toBe("Android");
      });
      userAgents.Motorola.forEach((ele) => {
        expect(getDevice(ele.user_agent)).toBe("Android");
      });
      userAgents.Samsung.forEach((ele) => {
        expect(getDevice(ele.user_agent)).toBe("Android");
      });
      userAgents["Various Popular Android Models"].forEach((ele) => {
        expect(getDevice(ele.user_agent)).toBe("Android");
      });
      userAgents["Android - Tab"].forEach((ele) => {
        expect(getDevice(ele.user_agent)).toBe("Android");
      });
    });

    test("it should return iPhone", () => {
      userAgents.iPhone.forEach((ele) => {
        expect(getDevice(ele.user_agent)).toBe("iPhone");
      });
    });

    test("it should return Tablet for iPad", () => {
      userAgents.iPad.forEach((ele) => {
        expect(getDevice(ele.user_agent)).toBe("Tablet");
      });
    });

    test("it should return Android for Android Tabs", () => {
      userAgents["Android - Tab"].forEach((ele) => {
        expect(getDevice(ele.user_agent)).toBe("Android");
      });
    });

    test("it should return android for: Various Popular Android Models", () => {
      userAgents["Various Popular Android Models"].forEach((ele) => {
        expect(getDevice(ele.user_agent)).toBe("Android");
      });
    });

    test("it should return bot for: Bots", () => {
      userAgents.Bots.forEach((ele) => {
        expect(getDevice(ele.user_agent)).toBe("Bot");
      });
    });
  });
});
