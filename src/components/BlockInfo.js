import * as React from "react";

const BlockInfo = ({text1, text2}) => {
    return (
        <div className={'groups_item_block'}>
            <p className={'groups_item_text'}>
                {text1}
            </p>
            <p className={'groups_item_text'}>
                {text2}
            </p>
        </div>
    )
}

export default BlockInfo;