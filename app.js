const API_URL = 'https://script.google.com/macros/s/AKfycbyOUTYo8W19ci_OMXHJY7xmq0M8cD4BemZYzqiQ4SWT572dPB0YnDX7pLFhpSoG8nuG/exec';

async function loadDashboard() {
    try {
        const response = await fetch(API_URL + '?action=dashboard');
        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.error('โหลดข้อมูลไม่สำเร็จ', error);
    }
}

loadDashboard();