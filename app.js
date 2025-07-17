//해커뉴스에서 데이터를 가져와서 화면에 출력하는 코드
const ajax = new XMLHttpRequest();
const newsURL = 'https://api.hnpwa.com/v0/news/1.json';
ajax.open('GET', newsURL, false);
ajax.send();

// JSON 데이터를 다루기 쉽도록 파싱하여 변수에 저장한다.
// 객체 형태로 출력됨
const newsFEED = JSON.parse(ajax.response);

// 화면에 출력하기 위해 ul 태그를 생성한다.
const ul = document.createElement('ul');

for(let i = 0; i < newsFEED.length; i++) {
    // li 태그를 생성하고, 뉴스 제목을 넣는다.
    const li = document.createElement('li');
    li.innerHTML = newsFEED[i].title;
    
    // ul 태그에 li 태그를 추가한다.
    ul.appendChild(li);
}

// 뉴스 제목이 담긴 ul 태그를 HTML 문서에 추가한다.
document.getElementById('root').appendChild(ul);
console.log(newsFEED);