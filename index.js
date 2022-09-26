function pressed() {
            var text = document.getElementById('inp').value;
            document.getElementById('header').style.color = text;
        }


document.addEventListener('input', pressed)

