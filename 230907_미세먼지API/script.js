var xhr = new XMLHttpRequest();

var url = 'http://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureSidoLIst'; /*URL*/ /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'6h06MN4YuByhKlHD6J5K5LnZ%2FAc1yC%2FvV3Z0aEAnC4UCGHZ%2FROI337GENBAQ3l7yr5ZO61wNNG%2F6G%2BS3d5M4fA%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('json'); /*응답 데이터 타입 설정*/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /*한 페이지 결과 수*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /*페이지 번호 수*/
queryParams += '&' + encodeURIComponent('sidoName') + '=' + encodeURIComponent('대전'); /*조회할 데이터 시도 이름 설정*/
queryParams += '&' + encodeURIComponent('searchCondition') + '=' + encodeURIComponent('DAILY'); /*데이터 기간*/

xhr.open('GET', url + queryParams);

function updateData(){
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {  // 서버 응답 완료 상태 확인 
      if(this.status === 200) {  // HTTP 상태 코드가 200(성공)
        // 서버로부터 받은 JSON 형식의 문자열 데이터를 Javascript 객체로 변환
        // responseText : 객체가 서버로부터 응답 받은 문자열이 담긴 변수 
        let responsData = JSON.parse(this.responseText);
        // console.log(responsData.response.body.items)

        // responsData에서 원하는 데이터만 추출해서 html 표기
        if(responsData.response.body.items) {
          let items = responsData.response.body.items;

          // 데이터를 담을 html 요소 (div)
          let dataDisplay = document.getElementById('data');
          // 가장 최근 데이터를 저장 할 변수
          // 의도적으로 해당 변수에 아무런 데이터가 할당되지 않았음을 나타내기 위해 null
          let latestData = null;
          for(let i = 0; i < items.length; i++) {
            let item = items[i];

            if(item.cityName == '유성구') {
             // cityName이 '경주시'인 것 중에 dataTime 가장 최근 데이터 가져오기
              // latestData 값이 비어 있을 경우 = True
              // item.dataTime 값이 latestData.dataTime값보다 클 경우
              // latestData에 값이 없다 || latestData가 최근값이 아니다 = 참
              if(!latestData || item.dataTime > latestData.dataTime) {
                // latestData에 더 큰 값을 넣어서 latestData에 제일 최근 데이터를 담는다.
                latestData = item;
                console.log(latestData)
                
                // let dataItem = document.createElement('div');
                // // dataItem.innerHTML = item.cityName + '미세먼지 : ' + item.pm10Value;
                // dataItem.innerHTML = item.cityName + '미세먼지 : ' + latestData.pm10Value + latestData.dataTime;
                // dataDisplay.appendChild(dataItem);

                let dataItem = `
                <div class="dust-item">
                  <div>${latestData.sidoName}</div>
                  <div>${latestData.cityName}</div>
                  <div>${latestData.pm10Value}</div>
                </div>
              `
              dataDisplay.insertAdjacentHTML('beforeend', dataItem);

              let dustItem = document.querySelector('.dust-item');
              if(item.pm10Value >= 20) {
               dustItem.classList.add('not-good');
              } else {
               dustItem.classList.add('good');
              }
            }
          }
        }

        } else {
          console.log('데이터 구조 다시 확인바람')
        }
      } else {
        console.log('HTTP 요청 실패' + this.status)
      }
    }
  };
  xhr.send('');
}
// 처음에 한 번 함수 호출로 실행 
updateData();

// updatate 함수를 3600000(1시간)마다 실행
setInterval(updateData, 3600000)
