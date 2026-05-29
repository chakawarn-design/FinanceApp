const API_URL = 'https://script.google.com/macros/s/AKfycbyOUTYo8W19ci_OMXHJY7xmq0M8cD4BemZYzqiQ4SWT572dPB0YnDX7pLFhpSoG8nuG/exec';

async function loadDashboard() {

  try {

    const response = await fetch(API_URL + '?action=dashboard');
    const result = await response.json();

    console.log(result);

    if (!result.success) {
      document.body.innerHTML += `<p>โหลดข้อมูลไม่สำเร็จ</p>`;
      return;
    }

    const summary = result.data.summary;
    const transactions = result.data.transactions;

    let html = `
      <h1>สรุปข้อมูล</h1>

      <p>รายรับ: ${summary.totalIncome} บาท</p>
      <p>รายจ่าย: ${summary.totalExpense} บาท</p>
      <p>คงเหลือ: ${summary.netBalance} บาท</p>

      <hr>

      <h2>รายการทั้งหมด</h2>
    `;

    transactions.forEach(item => {

      html += `
        <div style="border:1px solid #ccc;padding:10px;margin:10px;">
          <p>ประเภท: ${item.type}</p>
          <p>รายการ: ${item.item}</p>
          <p>หมวดหมู่: ${item.category}</p>
          <p>จำนวนเงิน: ${item.amount} บาท</p>
        </div>
      `;

    });

    document.body.innerHTML = html;

  } catch(error) {

    console.error(error);

    document.body.innerHTML += `
      <p>เกิดข้อผิดพลาดในการโหลดข้อมูล</p>
    `;
  }
}

loadDashboard();