// 방문자 정보 가져오기
async function visitorsData(){
    const response = await fetch("./선수제공파일/B_Module/visitors.json");
    const data = await response.json();
    return data;
}

async function chartView() {
    let data = await visitorsData();
    const league = document.querySelector("#league").value;
    const week = document.querySelector("#week").value;

    data = data.data[league].visitors[week].visitor;
    return data;
}

async function widthChart() {
    const chartElem = document.querySelector("#chartDiv");
    chartElem.innerHTML = "";
    chartElem.className = "chart_width"
    const data = await chartView();
    Object.entries(data).forEach(([time,count])=>{
        chartElem.innerHTML += `
        <div class="width_parents">
          <p>${time}</p>
          <div class="width" style="width: ${count}px;">${count}명</div>
        </div>`
    })
    
}
