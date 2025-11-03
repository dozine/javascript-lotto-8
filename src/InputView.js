import { Console } from "@woowacourse/mission-utils";
class InputView {
  async purchaseAmountInput() {
    const purchaseAmount = await Console.readLineAsync(
      "구입 금액을 입력해 주세요.\n"
    );
    return Number(purchaseAmount);
  }

  async winningNumbersInput() {
    const winningNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해주세요.\n"
    );
    return winningNumbers.split(",").map((num) => Number(num.trim()));
  }

  async bonusNumberInput() {
    const bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해주세요.\n"
    );
    return Number(bonusNumber.trim());
  }
}

export default InputView;
