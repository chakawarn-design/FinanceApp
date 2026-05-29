const API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnSGrYgov2wDOleB2ILwSZh7LiP3Xw_FWSBwuVt8N9eOFURGeJ--AbUVKf_6FxiV0qRlTfLGqxkYwM4Du8tjTMfkpqWhpbr6HuAm-K6z0y9o8OiloLupahXX5S1LhOmFhI-o6U2H3qEbF_9YD-dnZDCz44OEmJjk-4Ti_8KFUSO8J9E0Oz8rLV_02NIxk3KerIfxHpOTtIFxVq6NGz5EZcennqb95YijeSQ87zfzWKdHzb7wx3s&lib=MJr2XP3oQKglezWOE01x7urSTbnvLL5dA";

async function loadDashboard() {

  try {

    const response = await fetch(
      API_URL + "&action=dashboard"
    );

    const result = await response.json();

    console.log(result);

  } catch (error) {

    console.error("โหลดข้อมูลไม่สำเร็จ", error);

  }
}

loadDashboard();