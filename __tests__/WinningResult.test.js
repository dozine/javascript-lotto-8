import Lotto from "../src/Lotto";
import WinningResult from "../src/WinningResult";

describe("Winning Result 클래스 테스트", () => {
  test("3개 일치 시 통계가 정확히 동작한다.", () => {
    const result = new WinningResult();
    const lotto = new Lotto([1, 2, 3, 10, 11, 12]);
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    result.checkWinning(lotto, winningNumbers, bonusNumber);
    const statistics = result.getStatistics();
    expect(statistics["3개 일치"]).toBe(1);
    expect(statistics["4개 일치"]).toBe(0);
  });

  test("총 상금을 정확히 계산한다.", () => {
    const result = new WinningResult();
    const lotto1 = new Lotto([1, 2, 3, 10, 11, 12]);
    const lotto2 = new Lotto([1, 2, 3, 4, 11, 12]);
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    result.checkWinning(lotto1, winningNumbers, bonusNumber);
    result.checkWinning(lotto2, winningNumbers, bonusNumber);

    const totalPrize = result.calculateTotalPrize();
    expect(totalPrize).toBe(5000 + 50000);
  });
});
