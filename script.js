function toast({title = '', message = '', type = 'success', duration = 4000}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        toast.classList.add('toast');
        const delay = (duration / 1000).toFixed(2);
        toast.style.animation = `slideLeft ease 0.3s, fadeOut ease 1s ${delay}s forwards`;
        const icons = {
            success: 'fa-solid fa-circle-check',
            primary: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-triangle-exclamation'
        };
        const icon = icons[type];
        toast.innerHTML = `
        <div class="toast__icon toast__icon--${type}"><i class="${icon}"></i></div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__message">${message}</p>
            </div>
            <div class="toast__close"><i class="fa-solid fa-xmark"></i></div>
        `;
        main.appendChild(toast);

        const autoOut = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoOut);
            }
        }
    }
}
const btnSuccess = document.querySelector('.btn--success');
const btnInfo = document.querySelector('.btn--primary');
const btnWarning = document.querySelector('.btn--warning');

btnSuccess.addEventListener('click', showSuccessToast);
btnInfo.addEventListener('click', showInfoToast);
btnWarning.addEventListener('click', showWarningToast);
function showSuccessToast(){
    toast({
        title: 'Success',
        message: 'Success button clicked successfully!',
        type:'success',
        duration: 5000
    });
}

function showInfoToast(){
    toast({
        title: 'Info',
        message: 'Info button clicked successfully!',
        type:'primary',
        duration: 5000
    });
}

function showWarningToast(){
    toast({
        title: 'Warning',
        message: 'Warning button clicked successfully!',
        type:'warning',
        duration: 5000
    });
}


