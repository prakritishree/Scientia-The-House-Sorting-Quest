function DisplayData(event) {
    event.preventDefault();
    let numbers = [];
    numbers.push(parseInt(document.getElementById('num1').value));
    numbers.push(parseInt(document.getElementById('num2').value));
    numbers.push(parseInt(document.getElementById('num3').value));
    numbers.push(parseInt(document.getElementById('num4').value));
    numbers.sort((a, b) => a - b);
  
    document.getElementById('house1').textContent = numbers[0];
    document.getElementById('house2').textContent = numbers[1];
    document.getElementById('house3').textContent = numbers[2];
    document.getElementById('house4').textContent = numbers[3];
  }