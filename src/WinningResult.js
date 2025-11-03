class WinningResult {
  static PRIZE = {
    THREE: { match: 3, bonus: false, prize: 5000, label: "3개 일치" },
    FOUR: { match: 4, bonus: false, prize: 50000, label: "4개 일치" },
    FIVE: { match: 5, bonus: false, prize: 1500000, label: "5개 일치" },
    FIVE_BONUS: {
      match: 5,
      bonus: true,
      prize: 30000000,
      label: "5개 일치, 보너스 볼 일치",
    },
    SIX: { match: 6, bonus: false, prize: 2000000000, label: "6개 일치" },
  };

  constructor() {
    this.statistics = {
      "3개 일치": 0,
      "4개 일치": 0,
      "5개 일치": 0,
      "5개 일치, 보너스 볼 일치": 0,
      "6개 일치": 0,
    };
  }

  checkWinning(lotto, winningNumbers, bonusNumber) {
    const matchCount = lotto.countMatches(winningNumbers);
    const hasBonus = lotto.hasBonus(bonusNumber);

    if (matchCount === 6) {
      this.statistics["6개 일치"]++;
    } else if (matchCount === 5 && hasBonus) {
      this.statistics["5개 일치, 보너스 볼 일치"]++;
    } else if (matchCount === 5) {
      this.statistics["5개 일치"]++;
    } else if (matchCount === 4) {
      this.statistics["4개 일치"]++;
    } else if (matchCount === 3) {
      this.statistics["3개 일치"]++;
    }
  }

  calculateTotalPrize() {
    let total = 0;
    for (const [rank, prize] of Object.entries(WinningResult.PRIZE)) {
      const label = prize.label;
      total += this.statistics[label] * prize.prize;
    }
    return total;
  }

  getStatistics() {
    return { ...this.statistics };
  }
}

export default WinningResult;
