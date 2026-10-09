(function(){var d=document.getElementById('lb');if(!d||!d.showModal)return;var im=d.querySelector('img'),cp=d.querySelector('figcaption');
document.querySelectorAll('.th').forEach(function(b){b.addEventListener('click',function(){var s=b.querySelector('img');im.src=s.src;im.alt=s.alt;cp.textContent=s.alt;d.showModal()})});
d.querySelector('.x').addEventListener('click',function(){d.close()});
d.addEventListener('click',function(e){if(e.target===d)d.close()});
})();
