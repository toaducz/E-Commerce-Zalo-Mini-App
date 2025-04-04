import React from "react";
import { DatePicker, Page } from "zmp-ui";

const Date: React.FunctionComponent = () => {
    return(
        <div>
            <DatePicker
                label="Chọn ngày:"
                mask
                maskClosable
                dateFormat="dd/mm/yyyy"
                locale="vn"
            >
            </DatePicker>
        </div>
    )
};

export default Date;