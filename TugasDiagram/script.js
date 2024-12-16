const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", 
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const thn2022 = [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945];
const thn2023 = [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689];
const tableBody = document.querySelector("#dataTable tbody");
const tableHead = document.querySelector("#dataTable thead tr:nth-child(2)");

function dataList(year, data) {
    let row = `<tr><td style="color:greenyellow">${year}</td>`; 

    for (let i = 0; i < data.length; i++) {
        row += `<td style="color:greenyellow">${data[i]}</td>`; 
    }

    row += `</tr>`; 
    tableBody.innerHTML += row;
}

function dataBulan(bulan) {
    let row = ``;

    for (let i = 0; i < bulan.length; i++) {
        row += `<td style="color:greenyellow">${bulan[i]}</td>`; 
    }

    tableHead.innerHTML += row;
}

dataBulan(bulan);
dataList(2022, thn2022);
dataList(2023, thn2023);

const diagram = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(diagram, {
    type: 'bar',
    data: {
        labels: bulan,
        datasets: [
            {
                label: '2022',
                data: thn2022,
                backgroundColor: 'yellow',
                borderColor: 'lightgreen',
                borderWidth: 1
            },
            {
                label: '2023',
                data: thn2023,
                backgroundColor: 'green',
                borderColor: 'lightcyan',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            x: {
                ticks: {
                    color: 'lime', // Warna teks pada sumbu x
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'greenyellow'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'gold'
                }
            },
            title: {
                display: true,
                text: 'Penjualan 2022 vs 2023',
                color: 'lime', // Warna teks judul
                font: {
                    size: 18
                }
            }
        }
    }
});