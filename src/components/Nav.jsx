import React, { useEffect, useState } from 'react'
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const trasitionNavBar = () => {
    if(window.scrollY > 100){
      handleShow(true);
    }
    else{
      handleShow(false);
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",trasitionNavBar);
    return () => window.removeEventListener("scroll",trasitionNavBar);
  },[]);
  return (
    <div className={`nav ${(show)?'nav_black':""}`}>
        <div className="nav_contents">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="netflix logo" className="nav_logo" />
          <img className='nav_avatar' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAb1BMVEUNfoD///8AenwAd3kAcnT5/Pzz+PgAbG5ln6EAb3Lh7OzP5ueOvr/Y5ubt9vYvi42819hPlpdaoaO20dLG3d47kJJmqqsbg4VRn6Cky8tFlZeGvb6VxMR7sbHN39+uzc6KtrY5hoh0paeav7+z19j+PG4vAAADuklEQVR4nO3a63qiMBAG4DABkWjkIJBCBTzd/zUubKurktZDsqH77Pf+N+MwIQQyjAEAAAAAAAAAAAAAAAAAAAAAAADYxKOIKIy4+8jEQ59R6FsLzemtkkKILiNOtgZ9CHFW5n1kWdXcSjrkvwvv02qpXFaHx5vgFHpRWohMLPcutLW72lAmL0N3ZBqa11cDep7MnGXTrK5DJ8osNMWtd8NVbWgubkN3htlUwe2IxkM+KE5GkYOtyX3Ds9HV6VeBuZNkmvFl9GRsEJofNCN6G3v/+GtqXBjPmxmUhrQjeovd3y8N7XSX0Vu/HplSqRvRSx0k86aN3L4+z/h+pR3SwepMpTayfP068u1ssmTerSez1yxm/2plKF1oh3Rxz9TayAb3zISrGdtpZ7jBajblc4YdNZFNnjP6tdnRDqDUlMZglg0249JUytb//ZbqxoVpjHLR3DV54WjXPF59KsMtLi/y6wEdvs/cvgOYvs8Mb5rV1YBms/a50PVlbYKNjQ8QvDyPKRrm8osGqffzfirP7Hx94L5qEinbTWzvi89jiPtxJaVMGmUvNPlRGIa+2+9Mp9B95MjxJy4AAAAAAAAAAAAAOCOf+CQfiO2jUB2SdWOnufHZ2GTctnc9XNH9Po9cOGxEPMVmRZYVto5y+suSVqfT2tzhYddH9HgpgmBWpTbSIYrn1Z8WnqBxPNH45xG+WBaG5yrEqWiSq26kg9vK8HN3VZBvTSYbkcqW+U07gONk/MvT9vyQspfK0xelbtbjngrXlbn6B4FcN/GznerEmSo7qel2E3O390x0ezlXotvHvv/o7/tHY9F0Qtu3t2r+5j/X8Md9b8FMrksW+fcK1D/jI7845GKm7dD0ZOkmhQtc23IXBIvNvlB9RrqUiPPIZ8W8v+H1eQxTrJzg0JnqUZv6yUy2VVkrv8/oWvzWdK3uJrlIhT08U23i9P7d3+qtFsdjtRxsjsej0HdPXl6EtqQptmUf6RTd3T/4sEAkJZssFTY88NJO6Htvn7SS3YuPKos4pdvFndl2n0iaYpJ9/63+Gb7vxJeL012BWB/myuq7hAniKtsmr5VHJNu50i7jk+mva5w2x2fzkdU+jdmPKcof/Uun2pVV+2BCs3a9fdspu6+qNg1v0arOlncrlBz2tWI/N5GzYccS8rg5JPlCitUpr2A2E1LmSdUUFN7fvv0ow16y3+DHdTH/kBZ1rIhH/2y33zDt6HNXRpa/5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwH/vFyPNKzle3IL1AAAAAElFTkSuQmCC" alt="" />

        </div>
    </div>
  )
}

export default Nav