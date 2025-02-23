let toastBox = document.getElementById('toastBox');
let successMsg = 'Successfully submitted';
let errorMsg = 'Error occured';
let invalidMsg = 'Invalid input';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
}