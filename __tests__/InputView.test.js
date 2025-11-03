import { Console } from "@woowacourse/mission-utils";
import InputView from "../src/InputView";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLineAsync: jest.fn(),
    print: jest.fn(),
  },
}));

describe("InputView 클래스 테스트", () => {
  let inputView;
  beforeEach(() => {
    inputView = new InputView();
    jest.clearAllMocks();
  });
  describe("purchaseAmountInput", () => {
    test("양수가 아니면 에러가 발생한다.", async () => {
      Console.readLineAsync.mockResolvedValue("-1000");
      await expect(inputView.purchaseAmountInput()).rejects.toThrow("[ERROR] ");
    });

    test("숫자가 아니면 예외가 발생한다", async () => {
      Console.readLineAsync.mockResolvedValue("abc");
      await expect(inputView.purchaseAmountInput()).rejects.toThrow("[ERROR]");
    });
  });

  describe("winningNumbersInput", () => {
    test("정상적인 당첨 번호 입력 시 배열을 반환한다", async () => {
      Console.readLineAsync.mockResolvedValue("1,2,3,4,5,6");
      const numbers = await inputView.winningNumbersInput();
      expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test("6개가 아니면 예외가 발생한다", async () => {
      Console.readLineAsync.mockResolvedValue("1,2,3,4,5");
      await expect(inputView.winningNumbersInput()).rejects.toThrow(
        "[ERROR] 당첨 번호는 6개여야 합니다."
      );
    });
    test("중복된 번호가 있으면 예외가 발생한다", async () => {
      Console.readLineAsync.mockResolvedValue("1,2,3,4,5,5");
      await expect(inputView.winningNumbersInput()).rejects.toThrow(
        "[ERROR] 당첨 번호는 중복될 수 없습니다."
      );
    });
  });
});
