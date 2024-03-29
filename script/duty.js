function changeButton(){

    var icon = document.getElementById('imp');
    var imp_sec = document.getElementById('importance-section');
    icon.classList.toggle('bi-three-dots');
    icon.classList.toggle('bi-three-dots-vertical');
    if(imp_sec.style.display === 'flex'){
        imp_sec.style.display = 'none'; 
    }else{
        imp_sec.style.display = 'flex'
    }
}

function accessSubmitButton(){

    var submitButton = document.getElementById('buttonSubmit');
    var input = document.getElementById('floating-task');
    var radioButton1 = document.getElementById('flexRadioDefault1');
    var radioButton2 = document.getElementById('flexRadioDefault2');
    var radioButton3 = document.getElementById('flexRadioDefault3');


    if(input.value.length > 0 && (radioButton1.checked || radioButton2.checked || radioButton3.checked)){
        submitButton.disabled = false;
    }else{
        submitButton.disabled = true;
    }

}

function filterButton(){

    var sortButtonAZ = document.getElementById('filter-button0');
    var sortButtonZA = document.getElementById('filter-button1');
    var sortButtonDate = document.getElementById('filter-button3');
    var sortButtonImportance = document.getElementById('filter-button4');

    if(sortButtonAZ.style.display === 'flex' || sortButtonZA.style.display === 'flex' || sortButtonDate.style.display === 'flex' || sortButtonImportance.style.display === 'flex'){
        sortButtonAZ.style.display = 'none';
        sortButtonZA.style.display = 'none';
        sortButtonDate.style.display = 'none'; 
        sortButtonImportance.style.display = 'none';
    }else{
        sortButtonAZ.style.display = 'flex';
        sortButtonZA.style.display = 'flex';
        sortButtonDate.style.display = 'flex';
        sortButtonImportance.style.display = 'flex';
    }

}

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.filter-button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var paramName = button.getAttribute('name');
            window.location.href = 'duties.php?' + paramName + '=true';
        });
    });
});

function changeText(checkbox) {

    if (checkbox.dataset.id !== undefined) {
        var id = checkbox.dataset.id;
        var isChecked = checkbox.checked ? 1 : 0;

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "duties.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
            }
        };
        xhr.send("id=" + id + "&checked=" + isChecked);
    } else {
        console.error("Checkbox does not have 'data-id' attribute.");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var checkboxes = document.querySelectorAll('.form-check-input');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            var task = checkbox.closest('.duty');
            var text = task.querySelector('.duty-text');

            if (checkbox.checked) {
                text.style.textDecoration = 'line-through';
                text.style.color = '#bdbdbd';
            } else {
                text.style.textDecoration = 'none';
                text.style.color = 'black';
            }

            changeText(checkbox);
        });

        if (checkbox.checked) {
            var task = checkbox.closest('.duty');
            var text = task.querySelector('.duty-text');
            text.style.textDecoration = 'line-through';
            text.style.color = '#bdbdbd';
        }
    });
});