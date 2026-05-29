const API_URL = 'https://script.google.com/macros/s/AKfycbyOUTYo8W19ci_OMXHJY7xmq0M8cD4BemZYzqiQ4SWT572dPB0YnDX7pLFhpSoG8nuG/exec';

async function loadDashboard() {
    try {
        const response = await fetch(API_URL + '?action=dashboard');
        const result = await response.json();

        console.log(result);

        const summary = result.data.summary;

        document.getElementById("dashboard").innerHTML = `
  <h2>สรุปข้อมูล</h2>
  <p>รายรับ: ${data.income.toFixed(2)} บาท</p>
  <p>รายจ่าย: ${data.expense.toFixed(2)} บาท</p>
  <p>คงเหลือ: ${data.balance.toFixed(2)} บาท</p>
`;

    } catch (error) {
        console.error('โหลดข้อมูลไม่สำเร็จ', error);
    }
}

loadDashboard();