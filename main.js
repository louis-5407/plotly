let url =
  "https://raw.githubusercontent.com/ryanchung403/dataset/main/harry_potter.csv";
//get internet json
let myGraph = document.getElementById("myGraph");
// 使用 D3 加載 CSV 數據
d3.csv(url)
  .then((data) => {
    // 數據加載完成後，創建兩條折線圖的數據
    var trace1 = {
      x: data.map((row) => row.release_year), // 年份
      y: data.map((row) => parseInt(row.budget)), // 預算
      type: "scatter", // 折線圖類型
      mode: "lines+markers", // 折線與標記點
      name: "預算", // 圖例名稱
      marker: {
        color: "blue", // 標記點顏色
        size: 8, // 標記點大小
      },
      line: {
        color: "blue", // 線條顏色
      },
    };

    var trace2 = {
      x: data.map((row) => row.release_year), // 年份
      y: data.map((row) => parseInt(row.revenue)), // 收益
      type: "scatter", // 折線圖類型
      mode: "lines+markers", // 折線與標記點
      name: "收益", // 圖例名稱
      marker: {
        color: "green", // 標記點顏色
        size: 8, // 標記點大小
      },
      line: {
        color: "green", // 線條顏色
      },
    };

    var layout = {
      title: "哈利波特系列電影預算與收益隨年份的變化",
      xaxis: {
        title: "年份",
      },
      yaxis: {
        title: "美元",
        autorange: true,
      },
      hovermode: "closest",
    };

    Plotly.newPlot("myGraph", [trace1, trace2], layout);
  })
  .catch((error) => console.error("Error loading the CSV file:", error));
