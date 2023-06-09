import { Carousel } from 'react-carousel-minimal';

function HeroCarousal() {
    const data = [
        {
            caption: "Suits",
            image: require("../../images/ravixkarunaSquare.jpg")
        },
        {
            caption: "Sherwanis",
            image: require("../../images/sherwaniSquare.jpg")
        },
        {
            caption: "Sadris",
            image: require("../../images/sadriSquare.jpg")
        },
        {
            caption: "Formals",
            image: require("../../images/formalsSquare.png")
        },
        {
            caption: "Jodhpuris",
            image: require("../../images/jodhpurisSquare.jpg")
        },
        {
            caption: "IndoWestern",
            image: require("../../images/indowesternSquare.jpg")
        },
        {
            caption: "Pagdis",
            image: require("../../images/pagdiSquare.jpg")
        },
        {
            caption: "Loafers",
            image: require("../../images/loaferSquare.jpg")
        },
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <div className="heroCarousal" >
            <div style={{ textAlign: "center" }}>
                <h3 style={{ fontFamily: "Bahnschrift SemiBold" }}>Custom Made <br />Clothes Gallery</h3>
                <p style={{ marginBottom: "0px" }}>We make clothes with the choice of yours and the best fit you can get.</p>
                <div style={{
                    padding: "0 10px"
                }}>
                    <Carousel
                        data={data}
                        time={3000}
                        width="100%"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={false}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={false}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="white"
                        slideImageFit="cover"
                        thumbnails={false}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            minWidth: "200px",
                            minHeight: "200px",
                            margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroCarousal;