const select = document.getElementById("antibioticSelect");
const frame = document.getElementById("mapFrame");


// Загрузка карты

function loadMap(index) {

    const antibiotic = antibiotics[index];

    frame.src = antibiotic.map;

}


// Заполняем список антибиотиков

antibiotics.forEach((item, index) => {

    const option = document.createElement("option");

    option.value = index;

    option.textContent = item.name;

    select.appendChild(option);

});



// Создание таблицы

function createSmallTable() {

    const tableDiv = document.getElementById("smallTable");

    const selectedAntibiotic = antibiotics[select.value].name;


    let html = `

    <table class="small-consumption-table">

        <tr>

            <th>Region</th>

            <th>${selectedAntibiotic} (C-DID/year)</th>

        </tr>

    `;


    tableData.forEach(row => {

        html += `

        <tr>

            <td>${row.Region}</td>

            <td>
                ${
                row[selectedAntibiotic] !== undefined
                ? row[selectedAntibiotic].toFixed(6)
                : "NA"
                }
            </td>

        </tr>

        `;

    });


    html += `</table>`;


    tableDiv.innerHTML = html;

}



// Первоначальная загрузка

loadMap(0);

createSmallTable();



// Переключение антибиотика

select.addEventListener("change", function () {


    loadMap(this.value);


    createSmallTable();


});
// Создание полной таблицы

function createFullTable() {

    const tableDiv = document.getElementById("fullTable");


    let html = `

    <table>

        <tr>

            <th>Region</th>
            <th>Amoxicillin</th>
            <th>Ceftriaxone</th>
            <th>Ciprofloxacin</th>
            <th>Cefazolin</th>
            <th>Azithromycin</th>
            <th>Levofloxacin</th>
            <th>Gentamicin</th>
            <th>Doxycycline</th>
            <th>Ampicillin</th>
            <th>Amoxicillin/Clavulanate</th>

        </tr>

    `;


    tableData.forEach(row => {


        html += `

        <tr>

            <td>${row.Region}</td>
            <td>${row.Amoxicillin.toFixed(6)}</td>
            <td>${row.Ceftriaxone.toFixed(6)}</td>
            <td>${row.Ciprofloxacin.toFixed(6)}</td>
            <td>${row.Cefazolin.toFixed(6)}</td>
            <td>${row.Azithromycin.toFixed(6)}</td>
            <td>${row.Levofloxacin.toFixed(6)}</td>
            <td>${row.Gentamicin.toFixed(6)}</td>
            <td>${row.Doxycycline.toFixed(6)}</td>
            <td>${row.Ampicillin.toFixed(6)}</td>
            <td>${row["Amoxicillin/Clavulanate"].toFixed(6)}</td>

        </tr>

        `;


    });


    html += `</table>`;


    tableDiv.innerHTML = html;

}



createFullTable();
