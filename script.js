let display = document.getElementById("display");

// Dəyər əlavə et
function appendValue(value) {
  display.value += value;
}

// Hamısını təmizlə
function clearDisplay() {
  display.value = "";
}

// Son simvolu sil
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Hesabla
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Klaviatura dəstəyi + vizual düymə effekti
document.addEventListener("keydown", function(e) {
  let key = e.key;

  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
    appendValue(key);
    highlightButton(key);
  } else if (key === 'Enter') {
    calculate();
    highlightButton('=');
  } else if (key === 'Backspace') {
    deleteLast();
    highlightButton('⌫');
  } else if (key === 'Escape') {
    clearDisplay();
    highlightButton('C');
  }
});

// Vizual highlight funksiyası
function highlightButton(symbol) {
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    if (btn.textContent.trim() === symbol) {
      btn.classList.add("active");
      setTimeout(() => btn.classList.remove("active"), 150);
    }
  });
}
