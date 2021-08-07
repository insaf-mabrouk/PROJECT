import React from 'react'

export default function Banner({titleSearch,setTitleSearch}) {
    return (
        <div className="banner">
             <div className="search">
        
        <input type="text" placeholder="Search..." value={titleSearch} onChange={e=>setTitleSearch(e.target.value)}></input>
        <button type="submit"><i class="fa fa-search"></i></button>
        </div>

           <p className="one">Find things you'll love. Support independent artists. Only on ArtZone.</p> 
           <h3 className="two">Everyday finds</h3>
           <div className="images">
               <div className="img_div">
                    <img className="img" src="https://i.pinimg.com/736x/e5/b7/8e/e5b78e2658695fee31e49ac79d1f7a65.jpg" alt="..." />
                    <div className="banner_img_text">
                        <h5>Pensil <span className="arrow">&#8594;</span></h5>
                    </div>
               </div>
               <div className="img_div">
                    <img className="img" src="https://afremov.com/var/images/product/1200.1200/image.jpeg" alt="..." />
                    <div className="banner_img_text">
                        <h5>Oil  <span className="arrow">&#8594;</span></h5>
                    </div>
               </div>
                <div className="img_div">
                    <img className="img" src="https://skyeprattcom.files.wordpress.com/2019/12/75264907_129283805161627_5693595620388896768_o.jpg?w=1024" alt="..." />
                    <div className="banner_img_text">
                        <h5>Acrilic  <span className="arrow">&#8594;</span></h5>
                    </div>
                </div>
                
           </div>

        </div>
    )
}