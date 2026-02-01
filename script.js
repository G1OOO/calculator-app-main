const display = document.getElementById('display');
let num = '0';
let prev = '';
let op = '';
let reset = false;

function show() {
  display.textContent = num;
}

document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('click', () => {
    let text = btn.textContent;

    if (btn.classList.contains('operator')) {
      op = text === 'x' ? '*' : text;
      prev = num;
      reset = true;
    }
    else if (btn.classList.contains('equal')) {
      if (op && prev) {
        let result = 0;
        if (op === '+') {
          result = Number(prev) + Number(num);
        } else if (op === '-') {
          result = Number(prev) - Number(num);
        } else if (op === '*') {
          result = Number(prev) * Number(num);
        } else if (op === '/') {
          result = Number(prev) / Number(num);
        }
        num = result.toString();
        op = '';
        prev = '';
        reset = true;
      }
    }
    else if (btn.classList.contains('reset')) {
      num = '0';
      op = '';
      prev = '';
    }

    else if (btn.classList.contains('del')) {
      if (num.length > 1) {
        num = num.slice(0, -1);
      } else {
        num = '0';
      }
    }

    else if (text === '.') {
      if (num.indexOf('.') === -1) {
        num += '.';
      }
    }

    else if (text >= '0' && text <= '9') {
      if (num === '0' || reset) {
        num = text;
        reset = false;
      } else {
        num += text;
      }
    }

    show();
  });
});

show();