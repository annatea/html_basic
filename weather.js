// Lấy nút tìm kiếm từ giao diện người dùng
const search = document.querySelector('.search-box button');
// Lắng nghe sự kiện khi người dùng nhấn nút tìm kiếm
search.addEventListener('click', async () => {
    // Lấy tên thành phố được người dùng nhập vào
    const city = document.querySelector('.search-box input').value;
    // Kiểm tra dữ liệu nhập vào, nếu rỗng thì dừng chương trình
    if (city === '') return;

    // Gửi yêu cầu đến API Geocoding để tìm thông tin vị trí của thành phố
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=vi`);
    // Chuyển dữ liệu nhận được từ API sang định dạng JSON
    const geoData = await geoRes.json();
     // Kiểm tra xem thành phố có tồn tại trong cơ sở dữ liệu hay không
    if (!geoData.results) {
        // Hiển thị thông báo khi không tìm thấy thành phố
        alert('Không tìm thấy địa điểm!');
        // Dừng thực thi chương trình
        return;
    }
    // Lấy vĩ độ và kinh độ của thành phố vừa tìm được
    const { latitude, longitude } = geoData.results[0];

    // Gửi yêu cầu đến API Open-Meteo để lấy dữ liệu thời tiết hiện tại
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,windspeed_10m,weathercode`);
    // Chuyển dữ liệu thời tiết nhận được sang định dạng JSON
    const weatherData = await weatherRes.json();
    // Hiển thị dữ liệu thời tiết trong Console để kiểm tra
    console.log(weatherData.current);
    // Lưu thông tin thời tiết hiện tại vào biến current
    const current = weatherData.current;
    // Lấy mã thời tiết để xác định trạng thái thời tiết
    const code = current.weathercode;

    // Lấy phần tử hiển thị hình ảnh thời tiết
    const image = document.querySelector('.weather-box img');
    // Lấy phần tử hiển thị nhiệt độ
    const nhietdo = document.querySelector('.weather-box .nhietdo');
    // Lấy phần tử hiển thị mô tả thời tiết
    const mota = document.querySelector('.weather-box .mota');
    // Lấy phần tử hiển thị độ ẩm không khí
    const doam = document.querySelector('.weather-details .info-doam span');
    // Lấy phần tử hiển thị tốc độ gió
    const gio = document.querySelector('.weather-details .info-gio span');
    
    // Khai báo biến lưu hình ảnh và mô tả thời tiết
    let imgSrc, moTa;
    // Trường hợp thời tiết quang đãng
    if (code === 0) {
        imgSrc = "sunny.gif";
        moTa = "Nắng đẹp";
        // Trường hợp thời tiết có mây
    } else if (code <= 3) {
        imgSrc = "may.gif";
        moTa = "Có mây";
        // Trường hợp có mưa
    } else if (code <= 67) {
        imgSrc = "mua.gif";
        moTa = "Có mưa";
        // Trường hợp có tuyết
    } else if (code <= 77) {
        imgSrc = "tuyet.gif";
        moTa = "Có tuyết";
         // Trường hợp mưa lớn
    } else if (code <= 82) {
        imgSrc = "mua.gif";
        moTa = "Mưa to";
        // Các trạng thái thời tiết còn lại
    } else {
        imgSrc = "mist.gif";
        moTa = "Sương mù";
    }
    // Cập nhật hình ảnh minh họa thời tiết
    image.src = imgSrc;
    // Hiển thị nhiệt độ hiện tại lên giao diện
    nhietdo.innerHTML = `${parseInt(current.temperature_2m)}<span>°C</span>`;
    // Hiển thị mô tả trạng thái thời tiết
    mota.innerHTML = moTa;
    // Hiển thị độ ẩm không khí
    doam.innerHTML = `${current.relative_humidity_2m}%`;
    // Hiển thị tốc độ gió hiện tại
    gio.innerHTML = `${parseInt(current.windspeed_10m)} Km/h`;
});