import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    const classes = useStyles();
    const [city, setCity] = React.useState('');
    const [openCity, setOpenCity] = React.useState(false);

    const handleChangeCity = async (event) => {
        setCity(event.target.value);
    }
    const handleCloseCity = () => {
        setOpenCity(false);
    };

    const handleOpenCity = () => {
        setOpenCity(true);
    };
    return (
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
                    onChange={async (event) => {
                        await handleChangeCity(event)
                        return props.handleChangeCity(event)
                    }}
                    MenuProps={MenuProps}
                >
                    <MenuItem value={null}>
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
        </div>
    )
}

export default Tour