import { Console } from "@woowacourse/mission-utils";
import WinningResult from "./WinningResult.js";

class OutputView {
  static printPurchaseResult(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  }

  static printLottoNumbers(lotto) {
    Console.print(`[${lotto.getNumbers().join(", ")}]`);
  }

  static printStatistics(statistics, totalPrize, purchaseAmount) {
    Console.print("\n당첨 통계");
    Console.print("---");

    for (const [rank, prize] of Object.entries(WinningResult.PRIZE)) {
      const label = prize.label;
      const count = statistics[label];
      Console.print(
        `${label} (${prize.prize.toLocaleString()}원) - ${count}개`
      );
    }

    const rateOfReturn = ((totalPrize / purchaseAmount) * 100).toFixed(1);
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default OutputView;
