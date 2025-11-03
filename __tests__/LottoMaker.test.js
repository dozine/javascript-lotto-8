import LottoMaker from "../src/LottoMaker";

describe("LottoMaker 클래스 테스트", () => {
  test("생성된 로또 번호는 1~45 범위 내의 숫자다", () => {
    const lotto = LottoMaker.createLottoNumbers();
    const numbers = lotto.getNumbers();

    numbers.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(45);
    });
  });

  test("생성된 로또 번호는 중복이 없다", () => {
    const lotto = LottoMaker.createLottoNumbers();
    const numbers = lotto.getNumbers();
    const uniqueNumbers = new Set(numbers);

    expect(uniqueNumbers.size).toBe(6);
  });

  test("생성된 로또 번호는 오름차순으로 정렬되어 있다", () => {
    const lotto = LottoMaker.createLottoNumbers();
    const numbers = lotto.getNumbers();

    for (let i = 0; i < numbers.length - 1; i++) {
      expect(numbers[i]).toBeLessThan(numbers[i + 1]);
    }
  });
});
