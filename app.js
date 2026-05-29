const API_URL = 'https://script.google.com/macros/s/AKfycbyOUTYo8W19ci_OMXHJY7xmq0M8cD4BemZYzqiQ4SWT572dPB0YnDX7pLFhpSoG8nuG/exec';

async function loadDashboard() {

  try {

    const response = await fetch(API_URL + '?action=dashboard');
    const result = await response.json();

    console.log(result);

    if (!result.success) {
      document.body.innerHTML = `<h1>โหลดข้อมูลไม่สำเร็จ</h1>`;
      return;
    }

    const summary = result.data.summary;
    const transactions = result.data.transactions;

    let html = `

      <h1>ระบบรายรับรายจ่าย</h1>

      <div class="summary">

        <div class="card">
          <h3>รายรับ</h3>
          <div class="amount">${summary.totalIncome} บาท</div>
        </div>

        <div class="card">
          <h3>รายจ่าย</h3>
          <div class="amount">${summary.totalExpense} บาท</div>
        </div>

        <div class="card">
          <h3>คงเหลือ</h3>
          <div class="amount">${summary.netBalance.toFixed(2)} บาท</div>
        </div>

      </div>

      <h2>รายการทั้งหมด</h2>

      <div class="transactions">
    `;

    transactions.reverse().forEach(item => {

      const cls =
        item.type === 'รายรับ'
          ? 'income'
          : 'expense';

      html += `

        <div class="item ${cls}">

          <p><strong>ประเภท:</strong> ${item.type}</p>

          <p><strong>รายการ:</strong> ${item.item}</p>

          <p><strong>หมวดหมู่:</strong> ${item.category}</p>

          <p class="amount">${item.amount} บาท</p>

        </div>
      `;
    });

    html += `</div>`;

    document.body.innerHTML = html;

  } catch(error) {

    console.error(error);

    document.body.innerHTML = `
      <h1>เกิดข้อผิดพลาด</h1>
    `;
  }
}

loadDashboard();