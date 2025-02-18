async function filterProducts() {
    // 获取用户选择的值
    let usage = document.getElementById("usage").value;
    let distance = document.getElementById("distance").value;

    // 读取 JSON 数据
    let response = await fetch("products.json");
    let products = await response.json();

    // 过滤符合条件的产品
    let filtered = products.filter(p => 
        p.type === usage && p.best_viewing_distance === distance
    );

    // 显示结果
    let resultList = document.getElementById("result");
    resultList.innerHTML = ""; // 清空旧结果
    if (filtered.length > 0) {
        filtered.forEach(product => {
            let li = document.createElement("li");
            li.innerHTML = `<strong>${product.name}</strong> - 价格: ${product.price} 元`;
            resultList.appendChild(li);
        });
    } else {
        resultList.innerHTML = "<li>没有找到合适的产品</li>";
    }
}