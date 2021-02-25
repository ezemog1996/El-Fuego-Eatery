import React from 'react';

function Images() {
    return (
        <section className="row mt-3" style={{overflow: "hidden"}}>
            <img className="col-12 col-sm-4 mt-3" style={{"objectFit": "cover"}} src={"https://munchies-images.vice.com/wp_upload/fancy-restaurants-LA.jpg?crop=1xw:0.8433382137628112xh;center,center&resize=900:*"} />
            <img className="col-12 col-sm-4 mt-3" style={{"objectFit": "cover"}} src={"https://hips.hearstapps.com/del.h-cdn.co/assets/16/10/1457725512-marry-me-chicken-2.jpg?crop=1xw:0.99975xh;center,top&resize=980:*"} />
            <img className="col-12 col-sm-4 mt-3" style={{"objectFit": "cover"}} src={"https://cdn.thepennyhoarder.com/wp-content/uploads/2017/07/05145246/GettyImages-636514364.jpg"} />
        </section>
    )
}

export default Images;