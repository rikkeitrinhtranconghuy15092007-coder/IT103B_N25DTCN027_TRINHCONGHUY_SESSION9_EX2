const bookingReservation = {
  bookingId: "BK-2024-8891",
  guestName: "Trần Minh Quang",
  roomType: "Deluxe Ocean View",
  roomPrice: 1500000,
  checkInHour: 9,
  discountCode: "SUMMER10"
};

const isVoucherValid = false;

const priceKey = "roomPrice";
// SỬA LỖI 1: Dùng Bracket Notation để lấy giá trị từ biến động thay vì Dot Notation
const basePrice = bookingReservation[priceKey];

let earlySurcharge = 0;
if (bookingReservation.checkInHour < 12) {
  earlySurcharge = basePrice * 0.3;
  bookingReservation.earlySurcharge = earlySurcharge;
}

const totalAmount = basePrice + earlySurcharge;
bookingReservation.totalAmount = totalAmount;

// SỬA LỖI 2: Dùng toán tử delete để xóa hoàn toàn thuộc tính khỏi bộ nhớ
if (!isVoucherValid) {
  delete bookingReservation.discountCode;
}

// Kiểm tra lại bằng toán tử 'in' theo yêu cầu đề bài
console.log("Kiểm tra discountCode còn tồn tại không:", 'discountCode' in bookingReservation); 

console.log("--- CHI TIẾT PHIẾU ĐẶT PHÒNG ---");
// SỬA LỖI 3: Dùng Bracket Notation trong vòng lặp for...in
for (const key in bookingReservation) {
  console.log(key + ": " + bookingReservation[key]);
}
