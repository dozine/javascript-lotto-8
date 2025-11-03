import { Console, Random } from "@woowacourse/mission-utils";
class App {
  async run() {
    const purchaseAmount = await Console.readLineAsync(
      "구입 금액을 입력해 주세요: "
    );
    const count = Math.floor(Number(purchaseAmount) / 1000);
    Console.print(`${count}개를 구매했습니다.`);
    const winningNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해주세요.: "
    );
    const bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해주세요: "
    );
    let statistics = {
      "3개 일치": 0,
      "4개 일치": 0,
      "5개 일치": 0,
      "5개 일치, 보너스 볼 일치": 0,
      "6개 일치": 0,
    };
    const winningAmounts = {
      "3개 일치": 5000,
      "4개 일치": 50000,
      "5개 일치": 1500000,
      "5개 일치, 보너스 볼 일치": 30000000,
      "6개 일치": 2000000000,
    };
    for (let i = 0; i < count; i++) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(`[${randomNumbers.join(", ")}]`);

      for (const number of randomNumbers) {
        let cnt = 0;
        let bonusCnt = 0;
        if (winningNumbers.includes(number)) {
          cnt++;
        }
        if (bonusNumber.includes(number)) {
          bonusCnt++;
        }
        if (cnt === 3) {
          statistics["3개 일치"] += 1;
        } else if (cnt === 4) {
          statistics["4개 일치"] += 1;
        } else if (cnt === 5) {
          statistics["5개 일치"] += 1;
        } else if (cnt === 5 && bonusCnt === 1) {
          statistics["5개 일치, 보너스 볼 일치"] += 1;
        } else if (cnt === 6) {
          statistics["6개 일치"] += 1;
        }
      }
    }

    let totalEarning = 0;
    for (let key in statistics) {
      if (statistics[key] !== 0) {
        totalEarning += statistics[key] * winningAmounts[key];
      }
    }

    const rateOfReturn = (totalEarning / purchaseAmount) * 100;

    Console.print("당첨 통계");
    Console.print("---");
    for (let key in statistics) {
      Console.print(`${key} (${winningAmounts[key]}원) - ${statistics[key]}개`);
    }
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default App;
