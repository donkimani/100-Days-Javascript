(function(){
      "use strict";

      // DOM elements
      const prevOperandElement = document.getElementById('previous-operand');
      const currOperandElement = document.getElementById('current-operand');
      
      // state
      let currentOperand = '0';
      let previousOperand = '';
      let operation = undefined;
      let resetNext = false;    // after equals or operator, start fresh

      // ---------- helper functions ----------
      function updateDisplay() {
        // format current operand
        if (currentOperand === undefined || currentOperand === null) currentOperand = '0';
        
        // limit length for display comfort (no scientific, but keeps clean)
        if (currentOperand.length > 12) {
          currOperandElement.innerText = parseFloat(currentOperand).toExponential(4);
        } else {
          currOperandElement.innerText = currentOperand;
        }
        
        // previous operand + operator
        if (operation != null && previousOperand !== '') {
          prevOperandElement.innerText = `${previousOperand} ${operation}`;
        } else {
          prevOperandElement.innerText = '';
        }
      }

      function clearAll() {
        currentOperand = '0';
        previousOperand = '';
        operation = undefined;
        resetNext = false;
      }

      function deleteLast() {
        if (currentOperand === '0' || currentOperand === '') return;
        if (currentOperand.length === 1) {
          currentOperand = '0';
        } else {
          currentOperand = currentOperand.slice(0, -1);
        }
      }

      function appendNumber(number) {
        // avoid multiple zeros at start
        if (resetNext) {
          currentOperand = '';
          resetNext = false;
        }
        
        if (number === '.' && currentOperand.includes('.')) return; // already has dot
        if (number === '.' && (currentOperand === '' || currentOperand === '0')) {
          currentOperand = '0.';
          return;
        }
        
        // replace leading zero if not decimal
        if (currentOperand === '0' && number !== '.') {
          currentOperand = number;
        } else {
          currentOperand = currentOperand.toString() + number.toString();
        }
      }

      function chooseOperation(op) {
        // map displayed operators to actual js op
        let rawOp = op;
        if (op === '÷') rawOp = '/';
        if (op === '×') rawOp = '*';
        if (op === '−') rawOp = '-';   // minus sign from button
        
        if (currentOperand === '' || currentOperand === null) {
          // if no current, just update operator
          if (previousOperand !== '') {
            operation = op;   // keep displayed version
          }
          return;
        }
        
        // if previous exists, compute before new operator
        if (previousOperand !== '' && operation != null) {
          compute();
        }
        
        operation = op; // store the original visual operator (÷, ×, −, +)
        previousOperand = currentOperand;
        currentOperand = '';
        resetNext = false;
      }

      function compute() {
        let computation;
        const prev = parseFloat(previousOperand);
        const curr = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(curr)) return;
        
        // map visual operator to actual operation
        switch (operation) {
          case '+':
            computation = prev + curr;
            break;
          case '−':
            computation = prev - curr;
            break;
          case '×':
            computation = prev * curr;
            break;
          case '÷':
            if (curr === 0) {
              alert('cannot divide by zero');
              return;
            }
            computation = prev / curr;
            break;
          default:
            return;
        }
        
        // avoid floating point mess – round to reasonable
        computation = Math.round(computation * 1e12) / 1e12;
        currentOperand = computation.toString();
        previousOperand = '';
        operation = undefined;
        resetNext = true;
      }

      // handle equals
      function handleEquals() {
        if (operation == null || previousOperand === '' || currentOperand === '') {
          // nothing to compute – but we can just keep current
          return;
        }
        compute();
        resetNext = true;
      }

      // ---------- event listeners ----------
      const buttons = document.querySelectorAll('.btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const element = e.currentTarget;
          
          // data-value for numbers & decimal & operators
          if (element.hasAttribute('data-value')) {
            const val = element.getAttribute('data-value');
            // check if it's operator (we have separate operator class, but safe)
            if (element.classList.contains('operator')) {
              chooseOperation(val);
            } else {
              // number or decimal
              appendNumber(val);
            }
            updateDisplay();
            return;
          }
          
          // data-action: clear, delete, equals
          if (element.hasAttribute('data-action')) {
            const action = element.getAttribute('data-action');
            switch (action) {
              case 'clear':
                clearAll();
                break;
              case 'delete':
                deleteLast();
                break;
              case 'equals':
                handleEquals();
                break;
            }
            updateDisplay();
            return;
          }
          
          // fallback for equals button without data-action but with class .equals
          if (element.classList.contains('equals')) {
            handleEquals();
            updateDisplay();
          }
        });
      });

      // initial display
      updateDisplay();

      // optional: keyboard support (very basic, keeps simplicity)
      window.addEventListener('keydown', (e) => {
        const key = e.key;
        if (key >= '0' && key <= '9') appendNumber(key);
        if (key === '.') appendNumber('.');
        if (key === '+' || key === '-') chooseOperation(key);
        if (key === '*') chooseOperation('×');
        if (key === '/') {
          e.preventDefault();   // avoid quick find
          chooseOperation('÷');
        }
        if (key === 'Enter' || key === '=') handleEquals();
        if (key === 'Backspace') { deleteLast(); e.preventDefault(); }
        if (key === 'Escape') { clearAll(); }
        if (key === 'Delete') { clearAll(); }
        updateDisplay();
      });
    })();