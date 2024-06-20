// Toast function
function toast({
    title = '',
    message = '',
    duration = 3000,
    type = 'info',
}) {
    const main = document.getElementById('toast');
    if(main) {
        const toast = document.createElement('div');

        toast.onclick = function(e){
            console.log(e.target);
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(removeId);
            }
        }

        const icons = {
            success:'fa-regular fa-circle-check',
            info:'fa-solid fa-circle-info',
            warning:'fa-solid fa-triangle-exclamation',
            error:'fa-solid fa-bug',
        }
        const icon = icons[type]
        const delay = (duration/1000).toFixed(2)
        toast.classList.add('toast',`toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML =`
             <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                
                <p class="toast__msg">${message}</p> 
            </div>
                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
            </div>   
        `;
        main.appendChild(toast);
        const removeId = setTimeout(function(){
            main.removeChild(toast);
        },duration + 1000)
    }
}

function showSuccessToast(){
    toast({
        title: 'Thanh Cong !',
        message: 'Ban da dang ky thanh cong',
        duration: 5000,
        type: 'success',
    });
}
function showErrorToast(){
    toast({
        title: 'Loi roi',
        message: 'Da xay ra loi',
        duration: 5000,
        type: 'error',
    });
}