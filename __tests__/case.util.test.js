const { pascalCase, camelCase } = require("../utils/case.util");

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
});
