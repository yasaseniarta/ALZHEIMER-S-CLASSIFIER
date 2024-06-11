document.getElementById('browse-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', handleFiles);

document.getElementById('drop-area').addEventListener('dragover', (event) => {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('drop-area').classList.add('drag-over');
});

document.getElementById('drop-area').addEventListener('dragleave', (event) => {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('drop-area').classList.remove('drag-over');
});

document.getElementById('drop-area').addEventListener('drop', (event) => {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('drop-area').classList.remove('drag-over');
    handleFiles(event.dataTransfer);
});

document.getElementById('clear-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('file-input').value = '';
    document.getElementById('preview-img').src = 'images/img-icon.png';
    document.getElementById('preview-img').style.display = 'block';
    document.getElementById('result-img').src = 'images/brain normal.png';
});

document.getElementById('scan-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const previewImgSrc = document.getElementById('preview-img').src;
    document.getElementById('result-img').src = previewImgSrc;
});

function handleFiles(files) {
    if (files instanceof DataTransfer) {
        files = files.files;
    } else {
        files = files.target.files;
    }

    if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('preview-img').src = event.target.result;
            document.getElementById('preview-img').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}
