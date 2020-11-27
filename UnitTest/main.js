// pure functions: phu thuoc bien truyen vao, khong phu thuoc bien ben ngoai
export const isOddNumber = (number) => {
  return number % 2 === 1;
};

export const countEvenNumbers = (numberList) => {
  // neu numberList null thi return 0
  if (!Array.isArray(numberList)) return 0;
  return numberList.filter((x) => x % 2 === 0).length;
};
