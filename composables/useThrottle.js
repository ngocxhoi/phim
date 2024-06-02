export function useThrottle(func, limit) {
  let canCall = true;
  // Trả về một hàm mới
  return function (...args) {
    // Nếu canCall là true, thực thi hàm func
    if (canCall) {
      // Gọi hàm func với các đối số
      func.apply(this, args);
      // Đặt canCall là false
      canCall = false;
      // Sau một khoảng thời gian limit, đặt canCall là true
      setTimeout(() => {
        canCall = true;
      }, limit);
    }
  };
}
