// Бинарный поиск - работает только с отсортированными данными.
const binarySearch = (list, item) => {
  /*
   * В переменных left и right хранятся границы
   * той части списка, в которой выполняется поиск.
   */

  let left = 0;
  let right = list.length - 1;

  /// пока эта чатсть не сократиться до одного элемента
  while (left <= right) {
    let mid = Math.round((left + right) / 2); /// проверяем средний элемент
    let guess = list[mid];

    /// значение найдено
    if (guess === item) {
      return mid;
    }

    /// много
    if (guess > item) {
      right = mid - 1;
    } else {
      /// мало
      left = mid + 1;
    }
  }

  return null; /// значение не существует
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(array, 8)); /// 7
console.log(binarySearch(array, 10)); /// null
