var tabelnya = $("#example");
json_url = "./totalPenjualanLibrary.json";

function grabData() {
    fetch(json_url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        tabelnya.DataTable({
            searching: false,
            "data": data,
            "columns": [
                { "data": "product" },
                { "data": "rprice" },
                { "data": "bulan" },
                { "data": "jumlah_penjualan" }
            ]
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}

grabData();