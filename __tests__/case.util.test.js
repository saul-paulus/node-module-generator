import { pascalCase, camelCase, kebabCase } from "../utils/case.util.js";

describe("Case Utility", () => {
  describe("pascalCase", () => {
    it("should convert a single word to PascalCase", () => {
      expect(pascalCase("hello")).toBe("Hello");
    });

    it("should convert multiple words to PascalCase", () => {
      expect(pascalCase("hello world")).toBe("HelloWorld");
      expect(pascalCase("hello-world")).toBe("HelloWorld");
      expect(pascalCase("hello_world")).toBe("HelloWorld");
    });

    it("should handle already PascalCase words", () => {
      expect(pascalCase("HelloWorld")).toBe("HelloWorld");
    });
  });

  describe("camelCase", () => {
    it("should convert a single word to camelCase", () => {
      expect(camelCase("Hello")).toBe("hello");
    });

    it("should convert multiple words to camelCase", () => {
      expect(camelCase("hello world")).toBe("helloWorld");
      expect(camelCase("hello-world")).toBe("helloWorld");
      expect(camelCase("Hello_World")).toBe("helloWorld");
    });

    it("should return empty string for empty input", () => {
      expect(camelCase("")).toBe("");
    });
  });

  describe("kebabCase", () => {
    it("should convert PascalCase to kebab-case", () => {
      expect(kebabCase("HelloWorld")).toBe("hello-world");
    });

    it("should convert space separated words to kebab-case", () => {
      expect(kebabCase("hello world")).toBe("hello-world");
    });

    it("should convert underscore separated words to kebab-case", () => {
      expect(kebabCase("hello_world")).toBe("hello-world");
    });
  });
});
