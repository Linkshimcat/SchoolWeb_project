 var heading = document.querySelector("#heading") /* js에선 var(재정의 가능),let(재정의X),const(상수)만 쓰임 */
        heading.onclick = function() { /* onclick 이벤트 , 기능*/
            heading.style.color = "green";
        }