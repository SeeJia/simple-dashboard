const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'doughnut',
    data: {
        labels: ['Snack', 'Drink', 'Book', 'Clothes'],
        datasets: [{
            data: [10, 20, 30, 60],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56','#4bc0c0'],
        }]
    }
});

const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mac', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Sales by Month',
            data: [3, 10, 5, 8, 12, 50, 25, 1, 10, 30, 16,45],
            borderColor: '#ff6384',
            backgroundColor: '#ff6384',
            fill: false
        }]
    }
});

const lineCtx2 = document.getElementById('lineChart2').getContext('2d');
const labels = ['2020', '2021', '2022', '2023', '2024'];
new Chart(lineCtx2, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Sales by Year',
            data: [65000, 59000, 80000, 81000, 56000, 55000, 40000, 25000, 90000, 24000, 45000,30000],
            backgroundColor: '#ff6384',
            borderColor: '#ff6384', 
        }],
        options: {
            plugins: {
                legend: {
                    display: false, // 隐藏图例
                }
            }
        }
    }
});
