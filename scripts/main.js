const faqItem = document.querySelectorAll('.faqItem')

for(let i=0; i<faqItem.length;i++)
{
  faqItem[i].addEventListener(
    'click',
    function()
    {
      let temp = document.querySelector('.is-open')
      if(!this.classList.contains('is-open') && temp != null)
      {
          temp.classList.remove('is-open')
      }
      this.classList.toggle('is-open')
    }
  )
}
