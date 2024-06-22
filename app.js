// จงเรียงข้อมูลใน arr โดยเรียงตามค่า element ยกกำลัง 2 จากน้อยไปหามาก

const arr = [-3, 2, 0, -7, 4, 6];
const arr2 = arr.map(arr => Math.pow(arr, 2))
const sortArr2 = arr2.sort((a, b) => a - b)
console.log(sortArr2)