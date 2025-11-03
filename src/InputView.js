import { Console } from "@woowacourse/mission-utils";

class InputView {
  async purchaseAmountInput() {
    const input = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
    const amount = Number(input);

    if (isNaN(amount) || amount <= 0) {
      throw new Error("[ERROR] 구입 금액은 양수여야 합니다.");
    }

    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
    }

    return amount;
  }

  async winningNumbersInput() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해주세요.\n");
    const numbers = input.split(",").map((num) => Number(num.trim()));

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }

    if (numbers.some((num) => isNaN(num) || num < 1 || num > 45)) {
      throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error("[ERROR] 당첨 번호는 중복될 수 없습니다.");
    }

    return numbers;
  }

  async bonusNumberInput() {
    const input = await Console.readLineAsync(
      "\n보너스 번호를 입력해주세요.\n"
    );
    const number = Number(input.trim());

    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }

    return number;
  }
}

export default InputView;
