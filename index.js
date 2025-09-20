// 1. คิดต้นทุนต่อชิ้น
function addNumbers1() {
  const num1 = parseFloat(document.getElementById('num1-1').value) || 0; //document.getElementById('num1-1') → หยิบ <input> นั้นมา .value → เอาค่าที่ผู้ใช้กรอก parseFloat(...) → แปลงข้อความ (string) เป็นตัวเลข (float) || 0 → ถ้าใส่ค่าว่าง หรือไม่เป็นตัวเลข → ใช้ 0 แทน
  const num2 = parseFloat(document.getElementById('num2-1').value) || 0;
  const result = num2 !== 0 ? (num1 / num2).toFixed(2) : 0; //num2 !== 0 → ถ้าไม่ใช่ 0 → ให้คำนวณ (num1 / num2) → ต้นทุนรวม ÷ จำนวนชิ้น = ต้นทุนต่อชิ้น .toFixed(2) → ปัดเศษทศนิยมให้ 2 ตำแหน่ง เช่น 10.3333 → 10.33 : 0 → ถ้า num2 เท่ากับ 0 → ให้ result เป็น 0 ป้องกันหารศูนย์ (หาร 0 เกิด error)




  document.getElementById('result1').innerHTML = `<strong>ต้นทุนต่อชิ้น: ${result} บาท</strong>`; //ถ้าอยากแสดงผล → ต้องเพิ่ม .innerHTML = ...
}

// 2. หาค่าที่ต่อ1ชิ้น
function addNumbers2() {
  const num1 = parseFloat(document.getElementById('num1-2').value) || 0;
  const num2 = parseFloat(document.getElementById('num2-2').value) || 0;
  const result = num2 !== 0 ? (num1 / num2).toFixed(2) : 0;
  document.getElementById('result2').innerHTML = `<strong>ค่าที่ต่อชิ้น: ${result} บาท</strong>`;
}

// 3. หาค่าส่งต่อชิ้น
function addNumbers3() {
  const num1 = parseFloat(document.getElementById('num1-3').value) || 0;
  const num2 = parseFloat(document.getElementById('num2-3').value) || 0;
  const result = num2 !== 0 ? (num1 / num2).toFixed(2) : 0;
  document.getElementById('result3').innerHTML = `<strong>ค่าส่งต่อชิ้น: ${result} บาท</strong>`;
}

// 4. หาราคาถุง1ถุง
function addNumbers4() {
  const num1 = parseFloat(document.getElementById('num1-4').value) || 0;
  const num2 = parseFloat(document.getElementById('num2-4').value) || 0;
  const result = num2 !== 0 ? (num1 / num2).toFixed(2) : 0;
  document.getElementById('result4').innerHTML = `<strong>ราคาถุงต่อใบ: ${result} บาท</strong>`;
}

// 5. คิดราคาขายต่อชิ้น
function addNumbers5() {
  const num1 = parseFloat(document.getElementById('num1-5').value) || 0;
  const num2 = parseFloat(document.getElementById('num2-5').value) || 0;
  const num3 = parseFloat(document.getElementById('num3-5').value) || 0;
  const num4 = parseFloat(document.getElementById('num4-5').value) || 0;
  const result = (num1 + num2 + num3 + num4).toFixed(2);
  document.getElementById('result5').innerHTML = `<strong>ราคาขายต่อชิ้น: ${result} บาท</strong>`;
}

// 6. คำนวนรายจ่ายทั้งหมด
function addNumbers6() {
  const num1 = parseFloat(document.getElementById('num1-6').value) || 0;
  const num2 = parseFloat(document.getElementById('num2-6').value) || 0;
  const num3 = parseFloat(document.getElementById('num3-6').value) || 0;
  const num4 = parseFloat(document.getElementById('num4-6').value) || 0;
  const num5 = parseFloat(document.getElementById('num5-6').value) || 0;
  const num6 = parseFloat(document.getElementById('num6-6').value) || 0;
  const num7 = parseFloat(document.getElementById('num7-6').value) || 0;
  const result = (num1 + num2 + num3 + num4 + num5 + num6 + num7).toFixed(2);
  document.getElementById('result6').innerHTML = `<strong>รายจ่ายทั้งหมด: ${result} บาท</strong>`;
}

// 7. คิดกำไร
function addNumbers7() {
  const num1 = parseFloat(document.getElementById('num1-7').value) || 0;
  const num2 = parseFloat(document.getElementById('num2-7').value) || 0;
  const result = (num1 - num2).toFixed(2);
  const isProfit = result >= 0;
  document.getElementById('result7').innerHTML = `<strong>${isProfit ? '🎉 กำไร' : '😟 ขาดทุน'}: ${Math.abs(result)} บาท</strong>`;
}

// Interactive effects
document.addEventListener('DOMContentLoaded', function() {
  // Add hover effects to input groups
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.style.transform = 'scale(1)';
    });
  });

  // Add keyboard support for calculations
  document.querySelectorAll('input').forEach((input, index) => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        // Find which calculator box this input belongs to
        const calculatorBox = this.closest('.calculator-box');
        const calculateBtn = calculatorBox.querySelector('.calculate-btn');
        calculateBtn.click();
      }
    });
  });
});