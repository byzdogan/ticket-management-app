import React from 'react'
import CustomLink from 'src/components/shared/CustomLink/Link'

const Header = () => {
  return (
    <>
      <span id='headerTitle'>
        Başvurunuz alındı!
      </span>
      <span id='headerText'>
        Bizi tercih ettiğiniz için teşekkür ederiz.
        En kısa zamanda tarafınıza dönüş yapılacaktır.
        Aşağıdaki takip kodunu kullanarak, <CustomLink path='/basvuru-sorgula' text='başvuru sorgulama' /> sayfasından
        başvuru durumunuzu görüntüleyebilirsiniz.
      </span>
    </>
  )
}

export default Header
