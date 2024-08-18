document.getElementById('campoCidade').addEventListener('click', function() {
    document.getElementById('infoCampoCidade').style.display = 'block';
    document.getElementById('infoCidadeCampo').style.display = 'none';
});

document.getElementById('cidadeCampo').addEventListener('click', function() {
    document.getElementById('infoCampoCidade').style.display = 'none';
    document.getElementById('infoCidadeCampo').style.display = 'block';
});
