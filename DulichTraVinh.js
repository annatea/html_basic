
    // Thiết lập trình chiếu tự động cho nhóm ảnh thứ nhất
    // Hiển thị ảnh đầu tiên khi trang được tải
    const slides1 = document.querySelectorAll(".hinh1");
    let current1 = 0;//ảnh đầu 
    slides1[0].classList.add("active");
     // Tự động chuyển sang ảnh tiếp theo sau mỗi 10 giây
    let timer1 = setInterval(() => changeSlide1(1), 10000);//tự chuyển ảnh kế bên
    // Hàm chuyển đổi ảnh trong nhóm ảnh thứ nhất
    function changeSlide1(direction) {
        // Xóa lớp active để ẩn ảnh hiện tại
        slides1[current1].classList.remove("active");
        // Xác định vị trí ảnh tiếp theo và quay lại ảnh đầu khi đến cuối danh sách
        current1 = (current1 + direction + slides1.length) % slides1.length;
        // Thêm lớp active để hiển thị ảnh mới được chọn
        slides1[current1].classList.add("active");
        // Dừng bộ đếm thời gian hiện tại
        clearInterval(timer1);
        // Khởi động lại bộ đếm thời gian sau khi chuyển ảnh
        timer1 = setInterval(() => changeSlide1(1), 10000);// khi nhấn nút, reset đồng hồ đếm 10 sec(10 sec=10000) lại từ đầu
    }
     // Thiết lập trình chiếu tự động cho nhóm ảnh thứ hai
    const slides2= document.querySelectorAll(".hinh2");
    let current2 =0;
    slides2[0].classList.add("active");
    // Tự động chuyển sang ảnh tiếp theo sau mỗi 10 giây
    let timer2=setInterval(()=>changeSlide2(1),10000);
     // Hàm chuyển đổi hình ảnh trong nhóm ảnh thứ hai
    function changeSlide2(direction) {
        slides2[current2].classList.remove("active");
        current2 = (current2 + direction + slides2.length) % slides2.length;
        slides2[current2].classList.add("active");
        clearInterval(timer2);
        timer2 = setInterval(() => changeSlide2(1), 10000);//10000=10 sec
        }
      // Thiết lập trình chiếu tự động cho nhóm ảnh thứ ba
    const slides3= document.querySelectorAll(".hinh3");
    let current3=0;
    slides3[0].classList.add("active");
    // Tự động chuyển sang ảnh tiếp theo sau mỗi 10 giây
    let timer3=setInterval(()=>changeSlide3(1),10000);
    // Hàm chuyển đổi hình ảnh trong nhóm ảnh thứ ba
    function changeSlide3(direction){
        slides3[current3].classList.remove("active");
        current3=(current3+direction+slides3.length)% slides3.length;
        slides3[current3].classList.add("active");
        clearInterval(timer3);
        timer3=setInterval(()=>changeSlide3(1),10000);
    }
    // Thiết lập trình chiếu tự động cho nhóm ảnh thứ tư
    const slides4= document.querySelectorAll(".hinh4");
    let current4=0;
    slides4[0].classList.add("active");
    // Tự động chuyển sang ảnh tiếp theo sau mỗi 10 giây
    let timer4= setInterval(()=>changeSlide4(1),10000);
    // Hàm chuyển đổi hình ảnh trong nhóm ảnh thứ tư
    function changeSlide4(direction){
        slides4[current4].classList.remove("active");
        current4=(current4+direction+slides4.length)% slides4.length;
        slides4[current4].classList.add("active");
        clearInterval(timer4);
        timer4=setInterval(()=>changeSlide4(1),10000);
    }
    // Thiết lập trình chiếu tự động cho nhóm ảnh thứ năm
    const slides5= document.querySelectorAll(".hinh5");
    let current5=0;
    slides5[0].classList.add("active");
    // Tự động chuyển sang ảnh tiếp theo sau mỗi 10 giây
    let timer5= setInterval(()=>changeSlide5(1),10000);
    // Hàm chuyển đổi hình ảnh trong nhóm ảnh thứ năm
    function changeSlide5(direction){
        slides5[current5].classList.remove("active");
        current5=(current5+direction+slides5.length)% slides5.length;
        slides5[current5].classList.add("active");
        clearInterval(timer5);
        timer5=setInterval(()=>changeSlide5(1),10000);
    }
    // Thiết lập trình chiếu tự động cho nhóm ảnh thứ sáu
    const slides6= document.querySelectorAll(".hinh6");
    let current6=0;
    slides6[0].classList.add("active");
    // Tự động chuyển sang ảnh tiếp theo sau mỗi 10 giây
    let timer6= setInterval(()=>changeSlide6(1),10000);
    // Hàm chuyển đổi hình ảnh trong nhóm ảnh thứ 6
    function changeSlide6(direction){
        slides6[current6].classList.remove("active");
        current6=(current6+direction+slides6.length)% slides6.length;
        slides6[current6].classList.add("active");
        clearInterval(timer6);
        timer6=setInterval(()=>changeSlide6(1),10000);
    }
    // Thiết lập trình chiếu tự động cho nhóm ảnh thứ bảy
    const slides7= document.querySelectorAll(".hinh7");
    let current7=0;
    slides7[0].classList.add("active");
    // Tự động chuyển sang ảnh tiếp theo sau mỗi 10 giây
    let timer7= setInterval(()=>changeSlide7(1),10000);
    // Hàm chuyển đổi hình ảnh trong nhóm ảnh thứ 7
    function changeSlide7(direction){
        slides7[current7].classList.remove("active");
        current7=(current7+direction+slides7.length)% slides7.length;
        slides7[current7].classList.add("active");
        clearInterval(timer7);
        timer7=setInterval(()=>changeSlide7(1),10000);}
    // Thiết lập trình chiếu tự động cho nhóm ảnh thứ 8
    const slides8= document.querySelectorAll(".hinh8");
    let current8=0;
    slides8[0].classList.add("active");
    // Tự động chuyển sang ảnh tiếp theo sau mỗi 10 giây
    let timer8= setInterval(()=>changeSlide8(1),10000);
    // Hàm chuyển đổi hình ảnh trong nhóm ảnh thứ 8
    function changeSlide8(direction){
        slides8[current8].classList.remove("active");
        current8=(current8+direction+slides8.length)% slides8.length;
        slides8[current8].classList.add("active");
        clearInterval(timer8);
        timer8=setInterval(()=>changeSlide8(1),10000);}
    // Thiết lập trình chiếu tự động cho nhóm ảnh thứ 9
    const slides9= document.querySelectorAll(".hinh9");
    let current9=0;
    slides9[0].classList.add("active");
    // Tự động chuyển sang ảnh tiếp theo sau mỗi 10 giây
    let timer9= setInterval(()=>changeSlide9(1),10000);
    // Hàm chuyển đổi hình ảnh trong nhóm ảnh thứ 9
    function changeSlide9(direction){
        slides9[current9].classList.remove("active");
        current9=(current9+direction+slides9.length)% slides9.length;
        slides9[current9].classList.add("active");
        clearInterval(timer9);
        timer9=setInterval(()=>changeSlide9(1),10000);}