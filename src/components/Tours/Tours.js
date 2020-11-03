import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import { TourData } from './Data'
import * as actionCreators from '../../store/actions/actionCreators'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../UI/Button/Button'

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300
    }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const Tour = (props) => {
    const TourData = useSelector(
        state => state.TourData
    );
    console.log(TourData)
    const classes = useStyles();
    const [city, setCity] = React.useState('');
    const [cost, setCost] = React.useState(1000000000000);
    const [category, setCategory] = React.useState('');
    const [openCity, setOpenCity] = React.useState(false);
    const [openCost, setOpenCost] = React.useState(false);
    const [openCategory, setOpenCategory] = React.useState(false);
    const [data, setData] = React.useState(TourData);

    const check = (price, place, types, cost, city, category) => {
        let res = true;
        if (category !== '' && types.length) {
            res = false;
            types.forEach(type => {
                console.log(type, category, type === category)
                if (type === category) res = true;
            })
        }
        if ((cost === 500000) && price < 500000 && price !== null) res = false;
        if (cost !== '' && cost !== 500000 && price > cost) res = false;
        if (city !== '' && place !== city) res = false;
        console.log(res)
        return res;
    }

    const handleChangeCity = async (event) => {
        let showUpData = [];
        TourData.forEach(tour => {
            if (check(tour.price, tour.city, tour.category, cost, event.target.value, category))
                showUpData.push(tour);
        })
        setCity(event.target.value);
        setData(showUpData);
    }

    const handleChangeCost = (event) => {
        let showUpData = [];
        TourData.forEach(tour => {
            if (check(tour.price, tour.city, tour.category, event.target.value, city, category))
                showUpData.push(tour);
        })
        setCost(event.target.value);
        setData(showUpData)

    };

    const handleChangeCategory = (event) => {
        let showUpData = [];
        TourData.forEach(tour => {
            if (check(tour.price, tour.city, tour.category, cost, city, event.target.value))
                showUpData.push(tour);
        })
        console.log("handleChangeCategory", showUpData);
        setCategory(event.target.value);
        setData(showUpData)

    };

    const handleCloseCity = () => {
        setOpenCity(false);
    };

    const handleOpenCity = () => {
        setOpenCity(true);
    };
    const handleCloseCost = () => {
        setOpenCost(false);
    };

    const handleOpenCost = () => {
        setOpenCost(true);
    };

    const handleCloseCategory = () => {
        setOpenCategory(false);
    };

    const handleOpenCategory = () => {
        setOpenCategory(true);
    };

    let content = data.map(tour => {
        // console.log(tour)
        return (
            <div className="col-12 col-md-6 col-lg-4" >
                <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="250ms">
                    <img src={tour.image} alt="" style={{ maxWidth: "100%", maxHeight: "200px" }} />
                    <div className="course-content">
                        <h4>{tour.header}</h4>
                        <div className="meta d-flex align-items-center">
                            <Link to="/tour/details">{tour.creator.name}</Link>
                            <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                            <Link to="/tour/details">{tour.city}</Link>
                        </div>

                        <p>{tour.description}</p>
                        <div className="meta d-flex align-items-center">{tour.category.map(type => (
                                    <React.Fragment>
                                        <span><i className="fa fa-circle" aria-hidden="true"></i>
                                        </span>
                                    <a>{type}</a>
                                    </React.Fragment>


                        ))}</div>
                    </div>
                    <div className="seat-rating-fee d-flex justify-content-between">
                        <div className="seat-rating h-100 d-flex align-items-center">
                            <div className="seat">
                                <i className="fa fa-user" aria-hidden="true"></i> {tour.joined}
                            </div>
                            <div className="rating">
                                <i className="fa fa-star" aria-hidden="true"></i> {Math.round(tour.averageRating)}
                            </div>
                            <div className="rating">
                                <i className="fas fa-dollar-sign" aria-hidden="true"></i> {tour.price}
                            </div>
                        </div>
                        <div className="course-fee h-100">
                            <Link to={`/tour/details?index=${tour.index}`} className="free" >Check</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    // console.log(content)
    return (
        <React.Fragment>
            <div className="breadcumb-area">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to>Tour</Link></li>
                    </ol>
                </nav>
            </div>
            <div className="clever-catagory bg-img d-flex align-items-center justify-content-center p-3" style={{ backgroundImage: "url(img/bg-img/bg2.jpg)" }}>
                <h3>Choose &amp; your destination</h3>
            </div>

            <section className="popular-courses-area section-padding-100" style={{ paddingTop: "50px" }}>
                <div className="container">
                    {/* SELECT */}
                    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "30px" }}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">Tỉnh/TP</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={openCity}
                                onClose={handleCloseCity}
                                onOpen={handleOpenCity}
                                value={city}
                                onChange={handleChangeCity}
                                MenuProps={MenuProps}
                            >
                                <MenuItem value={''}>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"TP. Hồ Chí Minh"}>TP. Hồ Chí Minh</MenuItem>
                                <MenuItem value={"Đà Nẵng"}>Đà Nẵng</MenuItem>
                                <MenuItem value={"Hà Nội"}>Hà Nội</MenuItem>
                                <MenuItem value={"Huế"}>Huế</MenuItem>
                                <MenuItem value={"Đồng Nai"}>Đồng Nai</MenuItem>
                                <MenuItem value={"Cần Thơ"}>Cần Thơ</MenuItem>
                                <MenuItem value={"Sa Pa"}>Sa Pa</MenuItem>
                                <MenuItem value={"Bình Thuận"}>Bình Thuận</MenuItem>
                                <MenuItem value={"Bình Dương"}>Bình Dương</MenuItem>
                                <MenuItem value={"Nghệ An"}>Nghệ An</MenuItem>
                                <MenuItem value={"Bình Định"}>Bình Định</MenuItem>
                                <MenuItem value={"Hà Tĩnh"}>Hà Tĩnh</MenuItem>
                                <MenuItem value={"Thanh Hóa"}>Thanh Hóa</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">Giá</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={openCost}
                                onClose={handleCloseCost}
                                onOpen={handleOpenCost}
                                value={cost === 1000000000000 ? '' : cost}
                                onChange={handleChangeCost}
                            >
                                <MenuItem value={1000000000000}><em>None</em></MenuItem>
                                <MenuItem value={50000}>Dưới 50.000</MenuItem>
                                <MenuItem value={100000}>Dưới 100.000</MenuItem>
                                <MenuItem value={200000}>Dưới 200.000</MenuItem>
                                <MenuItem value={499999}>Dưới 500.000</MenuItem>
                                <MenuItem value={500000}>Trên 500.000</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">Phân loại</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={openCategory}
                                onClose={handleCloseCategory}
                                onOpen={handleOpenCategory}
                                value={category}
                                onChange={handleChangeCategory}
                            >
                                <MenuItem value={''}><em>None</em></MenuItem>
                                <MenuItem value={"Đồ Ăn"}>Đồ Ăn</MenuItem>
                                <MenuItem value={"Đồ uống"}>Đồ uống</MenuItem>
                                <MenuItem value={"Hẹn hò"}>Hẹn hò</MenuItem>
                                <MenuItem value={"Danh lam thắng cảnh"}>Danh lam thắng cảnh</MenuItem>
                                <MenuItem value={"Văn Hóa địa phương"}>Văn Hóa địa phương</MenuItem>
                            </Select>
                        </FormControl>
                        <Link to="/tour/create"><Button btnType='posterBtn' btnWidth='60px'><h3 >+</h3></Button></Link>
                    </div>




                    <div className="row">
                        {content}
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="load-more text-center wow fadeInUp" data-wow-delay="1000ms">
                                <Link to="/#" className="btn clever-btn btn-2">Load More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    )
}

export default Tour