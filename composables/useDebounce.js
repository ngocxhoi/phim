export function useDebounce(func, delay) {
  // Biến lưu trữ id của timeout
  let timeoutId;
  // Trả về một hàm mới
  return function (...args) {
    // Nếu timeoutId đã tồn tại, hủy timeout trước đó
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // Tạo một timeout mới với thời gian delay
    timeoutId = setTimeout(() => {
      // Gọi hàm func với các đối số
      func.apply(this, args);
    }, delay);
  };
}
