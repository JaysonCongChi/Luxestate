// // Bài tập 1: Nhập vào 1 số bất kỳ, kiểm tra số đó có phải là số chẵn hay không? Kết quả trả về kiểu
// // true/false
function checkNumber(n) {
  return n % 2 === 0;
}
console.log(checkNumber(6));
// // Bai tap 2: Viết hàm kiểm tra số đó có chia hết cho 3 hay không?
function checkConstan(a) {
  return a % 3 === 0;
}
console.log(checkConstan(9));
// // Bai tap 3:Khai báo 2 số a = 4, b = 12, in kết quả bằng console. Tính tổng 2 số a và b? Lấy b chia a,
// // lấy phần dư? Lấy b chia a, lấy phần nguyên?
let a = 2,
  b = 4;
function calSum(a, b) {
  console.log("Tong la:", a + b);
  console.log("b/a lay phan du", b % a);
  console.log("b/a lay phan nguyen", Math.trunc(b / a));
}
calSum(3, 4);
// // bai tap 4: In ra họ và tên của mình bằng cách khai báo 1 biến chứa họ và biến chứa tên, có
// // khoảng trắng giữa họ và tên của bạn

function showFullName(fistName, lastName) {
  console.log(`${fistName} ${lastName}`);
}
showFullName("Mai", "Chi Cong");
// // bai tap 5: Viết hàm so sánh 2 số nguyên. nếu a > b thì trả về 1, nếu a < b thì trả về -1, nếu a == b thì
// // trả về 0.
// function integerNumber() {
//   let a = 2;
//   let b = 7;
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else if (a === b) {
//     return 0;
//   }
// }
// integerNumber();
function integerNumber(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}
integerNumber(2, 3);
console.log(integerNumber());
// // bai tap 6: Khai báo một chuỗi ký tự là “happy news year”
// // a. In ra tổng số ký tự có trong chuỗi (gợi ý dùng length)
let mystr = "happy news year";
function declarationName(texthny) {
  console.log(texthny.length);
}
declarationName(mystr);
// // b. In ra vị trí của chữ “y” từ đầu xuống (gợi ý dùng indexOf)
function viTriName(textpara) {
  let searchTerm = "y";
  let indexOfFirst = textpara.indexOf(searchTerm);
  console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
}
viTriName(mystr);
// // c. In ra vị trí của chữ “y” từ dưới lên (gợi ý dùng lastIndexOf)
function viTriName2(paragraph) {
  const searchTerm = "y";
  console.log(
    `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`
  );
}
viTriName2(mystr);
// // d. Dùng replace để thay thế từ “happy” bằng một từ tuỳ ý bạn.
function thayTheName() {
  const paragraphthe = "happy news year";
  console.log(paragraphthe.replace("happy", `good luck`));
}
thayTheName();
// // phan 1.2 bai 1:Viết hàm nhập vào điểm của một học sinh và in ra kết quả tương ứng nếu:
// // a. Điểm lớn hơn 8 thì in ra Excellence
// // b. Điểm lớn hơn 7 đến 8 thì in ra Good
// // c. Điểm từ 4 đến bằng 7 thì in ra Not Good
// // d. Nhỏ hơn 4 thì in ra Bad
// function scoresStudent(a) {
//   if (a > 8) {
//     console.log(`Excellence`);
//   } else if (a > 7 && a == 8) {
//     console.log(`Good`);
//   } else if (a >= 4 && a <= 7) {
//     console.log(`Not Good`);
//   } else if (a < 4) {
//     console.log(`Bad`);
//   }
// }
// scoresStudent(9);
// scoresStudent(8);
// scoresStudent(7);
// scoresStudent(1);
function getPointResult(pt) {
  if (pt > 8) return "Excellence";
  if (pt >= 7) return "Good";
  if (pt >= 4) return "Not Good";
  return "Bad";
}
console.log(getPointResult(1));
// // bai tap 2: Viết hàm nhập vào 1 chuỗi và chuẩn hóa chuỗi theo định dạng chữ cái đầu tiên của
// // chuỗi phải được in hoa. Các chữ còn lại viết thường. Ví dụ: HỌC lập TRình JavAScript thì
// // phải chuyển thành: Học Lập Trình Javascript
// // let randomString = "HỌC lập TRình JavAScript";
let randomString = "HỌC lập TRình JavAScript";
function capitalizeFirstLetter(randomString) {
  return randomString.replace(/\S+/g, function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    // return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); hoac dung cach nay
  });
}
console.log(`ket qua bai 2: ${capitalizeFirstLetter(randomString)}`);
// // phan 1.2 bai tap 3: Viết hàm định dạng số giây luôn có 2 chữ số. Ví dụ: Nếu người dùng nhập vào: 12 kết
// // quả là 12. nếu người dùng nhập vào: 5 kết quả là 05
// let second = 5;
// function formatSecond(second) {
//   return second.toString().padStart(2, "0");
// }
// console.log(`Kết quả bài 3: ${formatSecond(second)}`);
function dinhDangSoGiay(soGiay) {
  return String(soGiay.padStart(2, "0"));
}
console.log(dinhDangSoGiay(20));
console.log(dinhDangSoGiay(5));
// // bài tap 4: Viết hàm trích xuất domain như sau. Ví dụ: Nếu là cfdcircle@gmail.com kết quả là
// // gmail.com, nếu là learning @cfdcircle.vn kết quả là cfdcircle.vn
// let email = "cfdcircle@gmail.com";
// function getDomain(email) {
//   if (email.includes("@")) {
//     return email.substring(email.indexOf("@") + 1);
//   } else {
//     return "Chuỗi của bạn không phải email";
//   }
// }
// console.log(`Kết quả bài 4: ${getDomain(email)}`);
function extractDomain(email) {
  // B1: kiem tra chuoi co phai email khong ?
  // B2: Neu email, trich xuat invalid email
  const emailIndex = string(email).indexOf("@");
  // const isemail = str
  // vi tri cua @
  // -1
  if (emailIndex > 0) {
    let domain = email.split("@").pop();
    // hoac thay the pop dung thu [1]
    return domain;
  }
  return "Invalid Email";
}
let email1 = "cfdcircle@gmail.com";
let domain1 = extractDomain(email1);
console.log("Domail cua" + email1 + "la" + domain1);
let email2 = "learning@cfdcircle.vn";
let domain2 = extractDomain(email2);
console.log("Domail cua" + email2 + "la" + domain2);
// // bai tap 5: Viết hàm nhập vào 1 chuỗi và chuyển đổi chuỗi thành path URL. Ví dụ: "javascript cho
// // nguoi moi bat dau" kết quả là javascript-cho-nguoi-moi-bat-dau
// let inputString = "javascript cho nguoi moi bat dau";
// function convertToPath(inputString) {
//   return inputString.replaceAll(" ", "-");
// }
// console.log(`Kết quả bài 5: ${convertToPath(inputString)}`);
function covertStrToPathURL(str) {
  const newString = str.split(" ");
  return newString.join("-");
}
console.log(covertStrToPathURL());
// phan 2.1
// // bai tap 1
// let sum = 0;
// for (let i = 0; i < 10; i++) {
//   sum = sum + i;
//   console.log(`sum ${sum} khi i ${i}`);
// }
// console.log(`ket qua bai tap 1`);
function sumNumber1(n) {
  let i = 0;
  let sum = 0;
  while (condition) {
    // sum = sum + i;
    sum += i;
    i++;
  }
  return sum;
}
console.log(sumNumber1());
// // bai tap 2
// function evenNumberbt2() {
//   let i = 0;
//   while (i <= 20) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//     i++;
//   }
// }
// console.log(evenNumberbt2());
function evenNumber2(params) {
  let i = 2;
  while (i <= 20) {
    console.log(i);
    i = i + 2;
  }
}
console.log(evenNumber2());
// bai tap 3
// let fruits = ["Mango", "Pineapple", "Peach", "Cherry", "Coconut"];
// function bt3Array(ptr) {
//   return fruits.splice(-2);
// }
// console.log(bt3Array(fruits));
let arrayN1 = ["a", "b", "c", "d", "e", "f"];
function array_bt3(arrayN1) {
  console.log(arrayN1);
  let tmp = arrayN1.slice(-2, 2);
  return arrayN1;
}
console.log(array_bt3());
// // bai tap 4
// let listCourseCfd = [
//   "Frontend Newbie",
//   "Web Responsive",
//   "Frontend Master",
//   "ReactJS Master",
// ];
// function courseLength(khl) {
//   return khl.length;
// }
// console.log(`so luong khoa hoc: ${courseLength(listCourseCfd)}`);
// function chiSoIndex(khl, val) {
//   return khl.indexOf(val);
// }
// console.log(
//   `chi so index mang: ${chiSoIndex(listCourseCfd, "ReactJS Master")}`
// );
// function timGiaTriIndex(khl, index) {
//   return khl[index];
// }
// console.log(timGiaTriIndex(listCourseCfd, 1));

// function chuoiTenKhoaHoc(khl) {
//   return khl.join(", ");
// }
// console.log(chuoiTenKhoaHoc(listCourseCfd));

// function addTwoValues(khl, val1, val2) {
//   khl.push(val1, val2);
//   return khl;
// }
// console.log(addTwoValues(listCourseCfd, "khoa hoc 5", "khoa hoc 6"));
let listCourseCfd = [
  "Frontend Newbie",
  "Web Responsive",
  "Frontend Master",
  "ReactJS Master",
];
function array_bt4(listCourseCfd) {
  console.log("so luong cac khoa hoc:", listCourseCfd.length);
  console.log("chi so index cua mang:");
  for (let a = 0; a < listCourseCfd.length; a++) {
    console.log(`${listCourseCfd[a]} tai vi tri index thu ${a + 1}`);
  }
  console.log("ten khoa hoc o vi tri index thu 2", listCourseCfd[2]);
  console.log(
    "chuoi ten cackhoa hoc cach nhay bang dau phay:",
    listCourseCfd.join()
  );
  console.log(listCourseCfd);
  console.log(listCourseCfd.push("Python", "C#"));
  console.log(listCourseCfd);
}
console.log(array_bt4());
// // bai tap 5
// let randomNumberArr = [1, 2, 3, 4, 5];
// function sumValues(khl) {
//   let sumResult = 0;
//   for (num of khl) {
//     sumResult = sumResult + num;
//   }
//   return sumResult;
// }
// console.log(sumValues(randomNumberArr));
const randomNumberArr = [1, 2, 3, 4, 5];
function exc5(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log("Tong cac phan tu trong mang:" + exc5(arr));
// phan 2.2
// bai tap 1
// let n = 20;
// function getRandomNumber() {
//   return Math.floor(Math.random() * n + 1);
// }
// console.log(getRandomNumber(n));
function checking(n) {
  return Math.trunc(Math.random() * n + 1);
}
checking(100);
console.log(Math.trunc());
// bai tap 2
function showInformation() {
  alert(`Day la thong bao khi vao trang web`);
}
setTimeout(() => {
  console.log(showInformation());
}, 4000);
// // bai tap 3
// function showTime() {
//   setInterval(() => {
//     let time = new Date().toLocaleTimeString();
//     document.querySelector("h1").innerHTML = time;
//   }, 1000);
// }
// console.log(showTime());
function handleDateTime() {
  const h1 = document.querySelector(".datetime");
  setInterval(() => {
    h1.innerHTML = new date().tolocalestring();
  }, 1000);
}
handleDateTime();
// // bai tap 4
let cfdCourseInfo = [
  {
    name: "Frontend Newbie",
    price: 4500000,
    date: new Date(2024, 3, 25),
  },
  {
    name: "Web Responsive",
    price: 580000,
    date: new Date(2024, 4, 2),
  },
  {
    name: "Frontend Master",
    price: 17500000,
    date: new Date(2024, 3, 25),
  },
  {
    name: "ReactJS Master",
    price: 7900000,
    date: new Date(2024, 5, 27),
  },
];

//   for (course of cfdCourseInfo) {
//     console.log(course);
//   }

//   for (course of cfdCourseInfo) {
//     console.log(`${course.name}: ${course.price}`);
//   }
// }
// priceObject();
function handleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  for (let i = 0; i < array.length; i++) {
    console.log(`${arr[i].name} có giá là ${arr[i].price}`);
  }
}
handleArray(cfdCourseInfo);
// // bai tap 5
let Car = {
  name: "mercedes",
  color: "white",
  price: 2000,
};

console.log(Car.hasOwnProperty("speed"));
function checkOject() {
  let Car = {
    name: "mercedes",
    color: "white",
    price: 2000,
  };
  function checkSpeed(speed) {
    return speed.hasOwnProperty("speed");
  }
  console.log(checkSpeed(Car));
}
checkOject();
// phan 3.1
// bai 1: Tạo 1 mảng gồm tên các khoá học của CFD Circle. In ra số lượng các khoá học? In ra chỉ số
// index của mảng? In ra tên khoá học ở vị trí index thứ 2. In ra chuỗi tên các khoá học cách
// nhau bằng dấu phẩy? Tính tổng giá các khoá học? (bắt buộc dùng 1 trong những Phương
// thức xử lý mảng nâng cao đã học)
console.log("phan 3.1");
let objArr = [
  {
    name: "Frontend Newbie",
    price: 4500000,
    date: "25/03/2024",
  },
  {
    name: "Web Responsive",
    price: 580000,
    date: "02/04/2024",
  },
  {
    name: "Frontend Master",
    price: 17500000,
    date: "25/03/2024",
  },
  {
    name: "ReactJS Master",
    price: 7900000,
    date: "27/05/2024",
  },
];
console.log(`so luong khoa hoc: ${objArr.length}`);
objArr.forEach((item, index) => {
  console.log(`${item.name} tai vi tri thu ${index}`);
});
console.log("ten khoa hoc o vi tri thu 2:", objArr[2].name);
// function chiSoArray1(arr) {
//   return arr.reduce((accumulator, currentValue, currentIndex) => {
//     let result = "";
//     if (currentIndex === arr.length - 1) {
//       result = accumulator + currentValue;
//     } else {
//       result = accumulator + currentValue + ", ";
//     }
//     return result;
//   });
// }
// console.log(chiSoArray1(listCourseCfd));
function chiSoArray1(item) {
  const myCourse3 = objArr.map((item) => item.name).join(", ");
  return myCourse3;
}
console.log("chuoi ten khoa hoc", chiSoArray1());
// function sumPrice(arr) {
//   return arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue.price,
//     0
//   );
// }
// console.log(sumPrice(objArr));
// cach 2
function sumPrice(acc, item) {
  const totalPice = objArr.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  return totalPice;
}
console.log("Tong gia tri khoa hoc:", sumPrice());
// function sumPrice(acc1, val1) {
//   return arr.reduce((acc1, val1) => acc1 + val1.price, 0);
// }
// console.log(sumPrice(objArr));

// console.log({ _sum });

// const sumPrice = objArr.reduce((acc, val1) => {
//   return acc + val1.price;
// }, 0);
// bai 2. Viết 1 hàm nhận vào 1 mảng số và trả về tổng giá trị các phần tử của mảng?
let randomArr2 = [1, 2, 3, 4, 5, 6];
// function returnTotal(arr) {
//   return arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );
// }
// console.log(returnTotal(randomArr2));
function returnTotal(accumulatorm, currentValue) {
  const sum = randomArr2.reduce((accumulatorm, currentValue) => {
    return accumulatorm + currentValue;
  });
  return sum;
}
console.log("Tong gia tri phan tu cua mang:", returnTotal());

// bai 3. Viết 1 hàm nhận vào 2 tham số là array và character. Hàm trả về 1 chuỗi là kết quả của việc
// nối các phần tử của array với character? (lưu ý: array là mảng nhận vào, character là ký tự để
// nối các phần tử của mảng).
console.log("phan 3.1: bai 3");
let array1 = ["toan", "ly", "hoa", "sinh", "su", "dia"];
let character = [", "];
// function joinArrayCustom(array, character) {
//   let newString = "";
//   array.forEach((val, index) => {
//     if (index === array.length - 1) {
//       newString = newString + val;
//     } else {
//       newString = newString + val + character;
//     }
//   });
//   return newString;
// }
// console.log(joinArrayCustom(randomArr3, " - "));
function concatArrayWithCharacter(arr, character) {
  return arr.join(character);
}
const result = concatArrayWithCharacter(array1, character);
console.log(concatArrayWithCharacter(array1, character));
// bai 4. Tạo 1 object User gồm: tên, tuổi, địa chỉ và 1 mảng chứa tên bạn bè. In ra array bạn bè? In ra
// tên của người bạn cuối cùng? In ra địa chỉ của user? Thêm 1 người bạn vào mảng bạn bè? in
// ra độ dài mảng bạn bè?
let User = {
  name: "Tom",
  age: 30,
  address: "HCM",
  friendList: ["tan", "van", "binh", "kiet"],
};

console.log(User.friendList);
// console.log(User.friendList.slice(-1));
console.log(
  "ten nguoi ban cuoi cung la",
  User.friendList[User.friendList.length - 1]
);
console.log("dia chi cua user:", User.address);

console.log("do dai cua mang ban be:", User.friendList.length);
User.friendList.push("ban nhat");
console.log("them 1 ban be vao mang", User.friendList);

// bai 5. Cho mảng gồm các phần tử 2,4,5,7,32,67,30,100. Trả về và in ra mảng mới gồm các phần tử có
// giá trị gấp đôi giá trị của từng phần tử mảng đã khởi tạo? Gợi ý dùng hàm map()
let ArrayNumber2 = [2, 4, 5, 7, 32, 67, 30, 100];
// function multilyByN(newArray, n) {
//   return newArray.map((x) => x * n);
// }
// console.log(multilyByN(newArray, 2));
// cach 2
function newArrayNumber123(item) {
  return ArrayNumber2.map((item) => item * 2);
}
console.log("bai 5:", newArrayNumber123());
// phan 3.2
// bai 1. Viết 1 hàm nhận vào 1 tham số là mảng và trả về ngẫu nhiên 1 phần tử của mảng?
// let friendList = ["dao", "le", "nhat", "uyen"];
// function getRandomVarFrArry(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }
// console.log(getRandomVarFrArry(friendList));
let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function ramdomNumer1(arr) {
  let randomIndex = Math.trunc(Math.random() * arr.length);
  return arr[randomIndex];
}
// ramdomIndex(numberList);
console.log("bai 1:", ramdomNumer1(numberList));
// bai 2. Tạo 1 đối tượng student trống: Thêm thuộc tính name với giá trị là tên student? Thêm thuộc tính
// age với giá trị là tuổi? Thay đổi giá trị name của student thành tên bất kỳ? Xóa thuộc tính age ra
// khỏi đối tượng?
let student = {};
student.name = "Tom";
student.age = 24;
console.log(student);
student.name = "Uyen";
console.log(student);
delete student.age;
console.log(student);
// bai 3. Tạo 1 mảng gồm các object là các student gồm tên và điểm trung bình. Viết 1 hàm nhận vào 1
// tham số là mảng vừa tạo và trả về các object có điểm trung bình lớn hơn 5?
let listInfoStudent = [
  { name: "Jerry", score: 8 },
  { name: "Binh", score: 10 },
  { name: "Uyen", score: 9 },
  { name: "Thao", score: 5 },
  { name: "Quynh", score: 3 },
];
function returnScore(objectArr) {
  const newArrayN = objectArr.filter((item) => item.score > 5);
  return newArrayN;
}
console.log("bai 3:", returnScore(listInfoStudent));
// bai 4. Tạo 1 mảng chứa các object có thuộc tính là tên các nhân viên và giá trị là tiền lương. Viết hàm
// trả về tổng tất cả lương của các nhân viên trong object?
let staffInfoList = [
  { name: "Jerry", salary: 6000000 },
  { name: "Trang", salary: 9200000 },
  { name: "Hien", salary: 10000000 },
  { name: "Uyen", salary: 8300000 },
  { name: "Quyen", salary: 2400000 },
];
function sumSalary2(objectArr) {
  return objectArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue.salary,
    0
  );
}
console.log(sumSalary2(staffInfoList));
// bai 5. Cho mảng gồm các phần tử 2,4,5,7,32,67,30,100. Tìm và in ra phần tử đầu tiên thoả điều kiện phần
// tử đó > 20?
let newArrayNumber = [2, 4, 5, 7, 32, 67, 30, 100];
// function findFistVal(arr) {
//   return arr.find((item) => item > 20);
// }
// console.log(findFistVal(newArrayNumber));
function findNumberArr(array) {
  const result = array.find((item) => item > 20);
  return result;
}
console.log("bai 5:", findNumberArr(newArrayNumber));
// function findFistVal(arr) {
//   const result = arr.find((item) => item > 20);
//   return result;
// }
// findFistVal({ result });
// console.log(findFistVal(newArrayNumber));
// console.log(findFistVal(newArrayNumber));
// bai 6. Cho mảng diemso gồm các phần tử 5, 7, 8, 9, 3. Sử dụng hàm every để kiểm tra điểm số của học
// sinh được lưu dưới dạng mảng có đủ để đỗ kỳ thì không. Điều kiện tất cả điểm số >= 5. Nếu đủ
// điều kiện thì in ra “Đủ điểm đỗ” ngược lại thì “Không đủ điểm đỗ”?
let diemso = [5, 7, 8, 9, 3];
// function checkPass(diemso) {
//   let result = diemso.every((x) => x >= 5);
//   if (result) return "Du diem do";
//   return "Khong du diem do";
// }
// console.log(checkPass(diemso));
function checkStudent(array) {
  const result = array.every((item) => item >= 5);
  return result ? "Du diem do" : "Khong du diem do";
}
console.log(checkStudent(diemso));
// bai tap ES6
// bai 1: Viết 1 function nhận vào số lượng tham số không giới hạn. Hàm trả về độ dài của tất cả tham số. Gợi ý:
// dùng rest parameter. Ví dụ: getLength(1, 3, 5, 7, 9) => 5
// let getRandomLimit = (...rest) => rest.length;
// console.log(getRandomLimit(1, 3, 5, 7, 9));
console.log("ES6 BAI 1");
let getNumberlimit = (...rest) => rest.length;
console.log(getNumberlimit(1, 3, 5, 7, 9));
// bai 2: Cho mảng gồm số chẵn và lẻ. Viết hàm nhận vào mảng đó và trả về mảng mới gồm những số lẻ được
// nhân đôi. Áp dụng các phương thức mảng đã học và arrow function để viết càng ngắn gọn càng tốt.
// Ví dụ: getNum([1, 3, 6, 9]) => [6, 18]
let getNumberArr = [1, 2, 3, 5, 6, 9, 18];
// function doubleOldNumber(arr) {
//   const oldNumber = arr.filter(function (num) {
//     return num % 2 !== 0;
//   });
//   const doubleOldNumber = oldNumber.map(function (num) {
//     return num * 2;
//   });
//   const eventNumber = arr.filter(function (num) {
//     return num % 2 === 0;
//   });
//   return [...doubleOldNumber, ...eventNumber];
// }
// const result1 = doubleOldNumber(getNumberArr);
// console.log(doubleOldNumber(result1));
// const returnScorecjc = (...rest) =>
//   rest.filter((num) => num % 2 !== 0).map((num) => num * 2);
// console.log(returnScorecjc(1, 2, 3, 4, 5, 7, 8, 9));
// cach 2
// // const [, , ...rest] = array2;
// function ramdomNumerArr(arr) {
//   let getNum([1, 3, 6, 9]);
//   return arr.filter((x) => x > 0);
// }
// const getNewNumer = (...rest) => {
//   getNewNumer.filter((number = number % 2 == 0)).map((number = number * 2));
// };
// console.log(getNewNumer());
// bai 3: Cho 1 mảng gồm 5 object có tên và giá khóa học, viết hàm trả về tổng giá tiền 3 khóa học cuối cùng. Áp
// dụng kiến thức ES6 đã học như destructuring, rest parameter và arrow function

let objArr123 = [
  {
    name: "Frontend Newbie",
    price: 4500000,
  },
  {
    name: "Web Responsive",
    price: 580000,
  },
  {
    name: "Frontend Master",
    price: 17500000,
  },
  {
    name: "ReactJS Master",
    price: 7900000,
  },
];
const totalListCourse = (objArr123) => {
  const [, , ...infoCourse] = objArr123.slice(-3);
  const result = infoCourse.reduce((acc, { price }) => acc + price, 0);
  return result;
};
console.log(totalListCourse(objArr123));
// bai 4:
// Viết hàm có thể nhận vào tham số là các số nguyên dương. Hàm trả về tổng các đối số nhận vào. Áp dụng
// kiến thức ES6. Ví dụ: calcSum(1, 3, 5) => 9
const sumNumber = (...rest) => {
  const result = rest.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return result;
};
console.log(sumNumber(1, 3, 5));
console.log(sumNumber(4, 5, 6, 7));
console.log(sumNumber(10));
console.log(sumNumber());
// bai 5 Cho 1 đối tượng User có address là 1 object. Trong object address lại chứa home là 1 mảng. Trong mảng
// home đó chứa 2 object có name là tên chủ nhà, district là tên đường, number là số nhà. Áp dụng
// destructuring để in ra district của object thứ 2.
// const Users = [
//   {
//     home: {
//       name: "John",
//       district: "Dinh Tien Hoang street",
//       number: 10,
//     },
//   },
//   {
//     home: {
//       name: "David",
//       district: "Lac Long Quan street",
//       number: 20,
//     },
//   },
//   {
//     home: {
//       name: "Boby",
//       district: "Phan Van Tri street",
//       number: 30,
//     },
//   },
// ];
// const [, { home }] = Users;
// console.log(home.district);
// CACH 2
// const User1 = {
//   address: {
//     home: [
//       { Name: "Tom", district: "quan 1", number: 20 },
//       { Name: "Bob", district: "quan 2", number: 30 },
//     ],
//   },
// };
// const {
//   address: {
//     home: [, { district }],
//   },
// } = User1;
// console.log(district);
// cach 2
const user = {
  address: {
    home: [
      { name: "Tom", district: "quan 1", number: 120 },
      { name: "Cong", district: "quan 2", number: 20 },
    ],
  },
};
const {
  address: {
    home: [, { district }],
  },
} = user;
console.log(district);
// bai 6: Viết hàm nhận vào tham số là các số nguyên dương. Hàm trả về object có key là chuỗi bất kỳ (tự định
// nghĩa) + với index tương ứng mỗi lần lặp, value là 1 số (của param truyền vào) tương ứng với mỗi lần lặp
// nhân 2. Ví dụ: generateNum(1, 2, 3, 4) => {string1: 2, string2: 2, string3: 6, string4: 8}

// const generateNum = (...numbers1) => {
//   const result = {};
//   numbers1.forEach((num, index) => {
//     const key = `string${index + 1}`;
//     return ([key] = num * 2);
//   });
//   return result;
// };
// console.log(generateNum(1, 2, 3, 4));
// let generateNum = (1, 2, 3, 4);
// const generateNum = (...numbersArr) => {
//   const result = {};
//   numbersArr.forEach((num, index) => {
//     const keys = `string${index + 1}`;
//     return ([keys] = num * 2);
//   });
//   return result;
// };
// console.log(generateNum(1, 2));
const generateNum = (...numberArr) => {
  const result = {};
  numberArr.forEach((num, index) => {
    const key = `string${index + 1}`;
    return ([key] = num * 2);
  });
  return result;
};
console.log(getNumberArr(result));
// DOM
// const btnMenu = document.querySelector(".btnmenu");
// const accordionItem = document.querySelectorAll(
//   "faq__list .accordion .accordion__content"
// );
// cach 3
// btnMenu.addEventListener('click', function () {
//   console.log(2);
// })
// btnMenu.addEvenListener('click', showText())
function showText() {
  console.log("showtext");
}
function sumNumber() {
  console.log("sumNumber");
}
btnMenu.addEvenListener("click", function () {
  showText();
  sumNumber();
});
btnMenu.addEvenListener("mouseover", function () {
  sumNumber();
});
