import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import LottoMaker from "./LottoMaker.js";
import WinningResult from "./WinningResult.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const inputView = new InputView();

      const purchaseAmount = await inputView.purchaseAmountInput();
      const count = Math.floor(purchaseAmount / 1000);

      OutputView.printPurchaseResult(count);

      const lottos = [];
      for (let i = 0; i < count; i++) {
        const lotto = LottoMaker.createLottoNumbers();
        lottos.push(lotto);
        OutputView.printLottoNumbers(lotto);
      }

      const winningNumbers = await inputView.winningNumbersInput();
      const bonusNumber = await inputView.bonusNumberInput();

      const result = new WinningResult();
      for (const lotto of lottos) {
        result.checkWinning(lotto, winningNumbers, bonusNumber);
      }

      const totalPrize = result.calculateTotalPrize();
      OutputView.printStatistics(
        result.getStatistics(),
        totalPrize,
        purchaseAmount
      );
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
