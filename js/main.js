let cog = document.querySelector('.cog'),
    color = document.querySelector('.color-option');

cog.onclick = function()
{
    if(color.style.display==='none')
         color.style.display='block';
    else
         color.style.display='none';
   
}
