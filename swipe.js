if(matchMedia("screen and (max-width: 1366px)").matches){

                let curPos = 0; // 현재 위치
                let position = 0;
                let start_x, end_x;
                const slideWrap = document.querySelector(".main .main_banner .main_slide_wrap");
                const slide = document.querySelector(".main_tit");
                let slide_WIDTH = slide.outerWidth(true); // outerWidth는 margin, padding, border 포함된 width 값을 가져옴
                alert(slide_WIDTH);

                // slideWrap에 터치 시작 이벤트 추가 
                // images.addEventListener('touchstart', touch_start); 
                slideWrap.addEventListener('touchstart', touch_start); 
                // slideWrap에 터치 끝 이벤트 추가
                slideWrap.addEventListener('touchend', touch_end); 
                
                function prev(){ 
                    if(curPos > 0){  // 현재 위치가 0,1,2 중 1,2(2,3번 슬라이드) 이라면
                        position += slide_WIDTH;
                        // images.style.transform = `translateX(${position}px)`;
                        slideWrap.style.transform = `translateX(${position}px)`;
                        curPos = curPos - 1; // 위치 1,2(2,3번 슬라이드)에서 0,1(1,2번 슬라이드)으로 이동
                    }
                }
                function next(){
                    if(curPos < 3){ // 현재 위치가 0,1,2 중 0,1,2() 라면
                        position -= slide_WIDTH;
                        // images.style.transform = `translateX(${position}px)`;
                        slideWrap.style.transform = `translateX(${position}px)`;
                        curPos = curPos + 1; // 위치 0,1,2에서 1,2,3으로 이동
                    }
                }
                
                // 터치 시작 이벤트 
                function touch_start(event) {
                    start_x = event.touches[0].pageX // pageX는 터치가 이루어진 지점의 위치
                }
                // 터치 끝 이벤트 
                function touch_end(event) {
                    end_x = event.changedTouches[0].pageX;
                    if(start_x > end_x){
                        next();
                    }else{
                        prev();
                    }
                }
}