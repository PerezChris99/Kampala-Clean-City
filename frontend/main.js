const reportForm = document.getElementById('report-form');
const chartCanvas = document.getElementById('stats-chart').getContext('2d');

reportForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(reportForm);

    try {
        const response = await fetch('/api/reports', {
            method: 'POST',
            body: formData
        });

        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error(error);
    }
});

async function fetchData() {
    try {
        const response = await fetch('/api/reports/stats');
        const data = await response.json();

        // Use the data to create the chart
        new Chart(chartCanvas, {
            type: 'bar',
            data: {
                labels: ['Total Reports', 'Pending Reports', 'Resolved Reports'],
                datasets: [{
                    label: 'Report Statistics',
                    data: [data.totalReports, data.pendingReports, data.resolvedReports],
                    backgroundColor: ['#36A774', '#FF6B6B', '#797D7E']
                }]
            },
            options: {
                // ... chart options
            }
        });
    } catch (error) {
        console.error(error);
    }
}

fetchData();